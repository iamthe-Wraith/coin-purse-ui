import axios, { AxiosInstance, AxiosRequestHeaders, Method } from 'axios';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { ApiError } from '../utils/api-error';

type PrivateFields = '_apiBaseUrl'
| '_authToken'
| '_client'
| '_headers' 
| '_initClient' 
| '_loading' 
| '_setAuthToken';

interface IRequestConfig {
  data?: any;
  method: Method;
  queryParams?: { [key: string]: any };
  path: string;
  headers?: AxiosRequestHeaders;
}

interface IResponse<T> {
  success: boolean;
  value?: T;
  error?: ApiError;
  errorName?: string;
}

export class BaseModel {
  private _apiBaseUrl: string = null;
  private _authToken = '';
  private _client: AxiosInstance = null;
  private _headers: any = {};
  private _loading = false;

  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _apiBaseUrl: observable,
      _authToken: observable,
      _client: observable.ref,
      _headers: observable,
      _loading: observable,
      loading: computed,
      _initClient: action,
      _setAuthToken: action,
      sendRequest: action,
    });

    this._apiBaseUrl = import.meta.env.DEV ? 'http://localhost:3000' : 'https://coin-purse.gold';

    this._headers = {
      ...this._headers,
      'Service-Name': 'coin-purse',
    };
    this._setAuthToken();
    this._initClient();
  }

  get loading() { return this._loading; }

  buildV1Path = (path: string) => {
    const includeSlash = path[0] !== '/';
    return `/api/v1${includeSlash ? '/' : ''}${path}`;
  };

  sendRequest = async <T>({ data, method, queryParams, path, headers }: IRequestConfig, tokenOptional?: boolean): Promise<IResponse<T>> => {
    if (!this._client) {
      return {
        success: false,
        error: new ApiError('web service client not found'),
      };
    }

    this._loading = true;

    if (!this._authToken && !tokenOptional) this._setAuthToken();

    const query = queryParams ? this._constructQuery(queryParams) : '';

    try {      
      const response = await this._client({
        data,
        method,
        url: `${this._apiBaseUrl}${path}${query}`,
        headers,
      });

      runInAction(() => {
        this._loading = false;
      });

      if (response?.status >= 200 && response?.status < 300) {
        return {
          success: true,
          value: response.data,
        };
      }

      return {
        success: false,
        error: new ApiError(response.data.message as string, response.status, response.data.field as string),
      };
    } catch (error: any) {
      runInAction(() => {
        this._loading = false;
      });
      
      const { message, field } = (error.response?.data || {});
      return {
        success: false,
        error: new ApiError(message as string, error.response?.status as number, field as string),
      };
    }
  };

  private _constructQuery = (params: { [key: string]: any }) => {
    const query: string[] = [];

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        query.push(`${key}=${value}`);
      }
    });

    return query.length > 0
      ? `?${query.join('&')}`
      : '';
  };

  private _initClient = () => {
    this._client = axios.create({
      headers: this._headers,
      baseURL: this._apiBaseUrl,
    });

    this._client.interceptors.request.use(config => {
      const updatedConfig = { ...config };

      if (this._authToken) updatedConfig.headers.Authorization = this._authToken;

      return updatedConfig;
    }, err => Promise.reject(err));

    this._client.interceptors.response.use(response => {
      if (response?.headers?.authorization) {
        this._authToken = response.headers.authorization;
        window.localStorage.setItem('token', this._authToken); 
      } else {
        this._authToken = null;
        window.localStorage.removeItem('token');
      }

      return response;
    }, err => Promise.reject(err));
  };

  private _setAuthToken = () => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) this._authToken = token;
    } catch (err) {
      return {
        success: false,
        error: 'no token found',
      };
    }
  };
}