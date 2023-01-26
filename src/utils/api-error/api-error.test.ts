import { expect, describe } from 'vitest';
import { ApiError } from '.';

describe('Api-Error', () => {
  const apiError = new ApiError('test', 400, 'test');
  expect(apiError.message).toBe('test');
  expect(apiError.statusCode).toBe(400);
  expect(apiError.field).toBe('test');
});