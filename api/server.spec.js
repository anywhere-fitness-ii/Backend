const server = require('./server.js');
const request = require('supertest');

describe('server', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })

    describe('get/', function() {
        it('should return its alive', function() {
            return request(server).get('/').then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return json', function() {
            //make a request to the api
            return request(server).get('/').then(res => {
                expect(res.type).toMatch(/json/);
            })
        })
        it('should have response.bod of message: its alive', function() {
            //make a request to the api
            return request(server).get('/').then(res => {
                expect(res.body).toEqual({message: "It's alive!"});
            })
        })
    })
});