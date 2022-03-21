const app = require('../server');
const supertest = require('supertest');
const testUserId = '';
const testUserMail = '';

describe('Check getting all the users', ()=>{
  test('Users', async ()=> {
    const users = await supertest(app).get('/accounts');
    expect(users.status).toBe(200)
  })
});

describe('Check getting user by id', ()=>{
  test('User', async ()=> {
    const user = await supertest(app)
    .post(`/accounts${testUserId}`)
    expect(user.status).toBe(200)
  })
});

