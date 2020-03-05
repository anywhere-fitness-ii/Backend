const router = require('../api/server.js');
const request = require('supertest');
const db = require('../data/db-config.js');

describe('authRouter', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })
    describe('POST /register', function() {
        it('responds with json object', function() {
            return request(router)
            .post('/api/auth/register')
            .send({
                name: "greg",
                email: "greg@email.com",
                username: "greg", 
                password: "password",
                role_id: 1
            })
            .then(res => {
                expect(res.type).toMatch(/json/)
            })
        })
        it('responds with status 201', function() {
            return request(router)
            .post('/api/auth/register')
            .send({
                name: "greg",
                email: "greg@email.com",
                username: "greg", 
                password: "password",
                role_id: 1
            })
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
    })

    describe('POST /LOGIN', function() {
        it('responds with 200 ,', function() {
            return request(router)
            // .set('Content-Type', 'application/json')
            .post('/api/auth/login')
            .send({
                username: "damon",
                password: "pass"
            })
            .then(res => {
                expect(res.status).toBe(200)
            })
           
        });
        it('responds with json', function() {
            return request(router)
            // .set('Content-Type', 'application/json')
            .post('/api/auth/login')
            .send({
                username: "greg",
                password: "pass"
            })
            .then(res => {
                expect(res.type).toMatch(/json/)
            })
           
        });
    })
    
});