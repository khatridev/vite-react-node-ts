import request from 'supertest';
import app from '../src/index';
import { expect, test, describe } from 'vitest';

describe('server loads correctly', () => {
  test('api url shows message', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('api works!');
  });
});
