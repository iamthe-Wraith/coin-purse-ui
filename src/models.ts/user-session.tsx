import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { BaseModel } from './base-model';
import { IUser } from './user';

type PrivateFields = '_user';

interface IAuthResponse {
  user: IUser;
}

export class UserSession extends BaseModel {
  private _user: IUser;

  constructor () {
    super();

    makeObservable<this, PrivateFields>(this, {
      _user: observable,
      isLoggedIn: computed,
      user: computed,
      authenticate: action,
      login: action,
      signup: action,
    });
  }

  get user() { return this._user; }
  get isLoggedIn() { return !!this._user?.id; }

  authenticate = async () => {
    if (this.busy) return;

    const result = await this.sendRequest<IAuthResponse>({
      method: 'POST',
      path: this.buildV1Path('/auth/verify-token'),
    });

    if (result.success) {
      runInAction(() => {
        this._user = result.value.user;
      });
    } else {
      throw result.error;
    }
  };

  login = async (email: string, password: string) => {
    if (this.busy) return;

    const result = await this.sendRequest<IAuthResponse>({
      data: { email, password },
      method: 'POST',
      path: this.buildV1Path('/auth/login'),
    });

    if (result.success) {
      runInAction(() => {
        this._user = result.value.user;
      });
    } else {
      throw result.error;
    }
  };

  logout = async () => {
    if (this.busy) return;

    const result = await this.sendRequest<IAuthResponse>({
      method: 'POST',
      path: this.buildV1Path('/logout'),
    });

    if (result.success) {
      runInAction(() => {
        this._user = null;
      });
    } else {
      throw result.error;
    }
  };

  signup = async (email: string, password: string) => {
    if (this.busy) return;

    const result = await this.sendRequest<IAuthResponse>({
      data: { email, password },
      method: 'POST',
      path: this.buildV1Path('/signup'),
    });

    if (result.success) {
      runInAction(() => {
        this._user = result.value.user;
      });
    } else {
      throw result.error;
    }
  };
}