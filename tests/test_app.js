const request = require('supertest');
const app = require('../src/app');


describe('Basic App Tests', () => {
test('GET / returns 200 and message', async () => {
const res = await request(app).get('/');
expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty('message');
});


test('GET /health returns UP', async () => {
const res = await request(app).get('/health');
expect(res.statusCode).toBe(200);
expect(res.body).toEqual({ status: 'UP' });
});
});