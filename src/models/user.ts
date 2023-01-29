import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { computed, makeObservable, observable } from 'mobx';
import { BaseModel } from './base-model';

dayjs.extend(utc);

type PrivateFields = '_user';

export enum UserRoles {
  Member = 'member',
  Admin = 'admin',
  God = 'god',
}

export enum UserStatus {
  Active = 'active',
  Locked = 'locked',
  Banned = 'banned',
}

export interface IUser {
  id: string;
  email: string;
  role: UserRoles;
  markedForDeletion: boolean;
  status: UserStatus;
  createdAt: Date;
  lastModifiedAt: Date;
}

export class User extends BaseModel {
  private _user: IUser;

  constructor (userInfo: IUser) {
    super();

    makeObservable<this, PrivateFields>(this, {
      _user: observable,
      id: computed,
      email: computed,
      role: computed,
      createdAt: computed,
    });

    this._user = userInfo;
  }

  get id() { return this._user.id; }
  get email() { return this._user.email; }
  get role() { return this._user.role; }
  get markedForDeletion() { return this._user.markedForDeletion; }
  get createdAt() { return dayjs(this._user.createdAt).local(); }
  get lastModifiedAt() { return dayjs(this._user.lastModifiedAt).local(); }
}