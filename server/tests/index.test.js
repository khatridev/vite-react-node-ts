import request from 'supertest';
import app from '../src/index';
import { expect } from 'vitest';
import { describe } from 'node:test';

describe("server loads correctly", () => {
	test('api url shows message', async () => {
		const res = await request(app)
			.get('/api');
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toBe('api works!');
	})
})
