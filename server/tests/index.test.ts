import request from 'supertest';
import { expect, it, describe } from 'vitest';
import app from '../src/index';

describe('server loads correctly', () => {
  it('GET /api should return a message', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('api works!');
  });
});
