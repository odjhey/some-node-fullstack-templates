const request = require('supertest');
const server = require('../../server');

describe('/messages', () => {
  it('should get a message', async () => {
    const response = await request(server.callback()).get(
      '/api/v1/messages/bff28903-042e-47c2-b9ee-07c3954989ec',
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      created_at: 1558536830937,
      id: 'bff28903-042e-47c2-b9ee-07c3954989ec',
      message: 'Hello World!',
    });
  });
});
