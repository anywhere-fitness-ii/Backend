const router = require('../api/server.js');
const request = require('supertest');
const db = require('../data/db-config.js');

describe('usersRouter', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })
    describe('GET /', function() {
        it('not allow user to login without token', function() {
            //make a request to the api
            return request(router)
            // .set('Content-Type', 'application/json')
            .get('/api/users')
            .set('Authorization', "incorrect token")
            .then(res => {
                expect(res.body.message).toBe("Invalid Credentials");
            })
        })
        it('should return json', function() {
            //make a request to the api
            return request(router).get('/api/users').then(res => {
                expect(res.type).toMatch(/json/);
            })
        })
    })
});