const router = require('../api/server.js');
const request = require('supertest');
const db = require('../data/db-config.js');

describe('authRouter', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })
    // describe('GET /', function() {
    //     it('responds with json', function() {
    //         return request(router)
    //         .get('api/users')
    //         .then(res => {})
    //     })
    // })
});