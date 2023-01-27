import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { IUser, UserRoles } from '../../../src/models.ts/user';
import { generateId } from '../../../src/utils/generators';

export const getUser = (data?: Partial<IUser> ) => {
  const date = dayjs(faker.date.past());

  return {
    id: generateId({ count: 24 }),
    email: faker.internet.email(),
    markedForDeletion: false,
    role: UserRoles.Member,
    status: 'active',
    createdAt: date.toISOString(),
    lastModifiedAt: date.add(faker.datatype.number({ min: 5, max: 100 }), 'days').toISOString(),
    ...(data || {}),
  };
};