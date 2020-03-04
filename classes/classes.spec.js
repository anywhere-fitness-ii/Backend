const router = require('../api/server.js');
const request = require('supertest');
const db = require('../data/db-config.js');

describe('classesRouter', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })
    describe('GET /', function() {
        it('not allow user to access without correct token', function() {
            //make a request to the api
            return request(router)
            // .set('Content-Type', 'application/json')
            .get('/api/classes')
            .set('Authorization', "incorrect token")
            .then(res => {
                expect(res.body.message).toBe("Invalid Credentials");
            })
        })
        it('should return json', function() {
            //make a request to the api
            return request(router).get('/api/classes').then(res => {
                expect(res.type).toMatch(/json/);
            })
        })
    })
    describe('GET /:ID', function() {
        it('not allow user to access without correct token', function() {
            //make a request to the api
            return request(router)
            // .set('Content-Type', 'application/json')
            .get('/api/classes/1')
            .set('Authorization', "incorrect token")
            .then(res => {
                expect(res.body.message).toBe("Invalid Credentials");
            })
        })
        it('should return json', function() {
            //make a request to the api
            return request(router).get('/api/classes').then(res => {
                expect(res.type).toMatch(/json/);
            })
        })
    })
    describe('post / add class', function() {
        it('responds with json', function() {
            return request(router)
            // .set('Content-Type', 'application/json')
            .post('/api/classes')
            .send({
                class_name: "greg",
                class_type: "pass",
                class_date: "03-09-2020",
                class_start_time: "10:00",
                class_duration: "1hr",
                class_intensity: "moderate",
                class_location: "michigan",
                registered_participants: 10,
                class_max_participants: 44
            })
            .then(res => {
                expect(res.type).toMatch(/json/)
            })
           
        });
        it('not allow user to create class without correct token', function() {
            //make a request to the api
            return request(router)
            // .set('Content-Type', 'application/json')
            .post('/api/classes')
            .set('Authorization', "incorrect token")
            .send({
                class_name: "greg",
                class_type: "pass",
                class_date: "03-09-2020",
                class_start_time: "10:00",
                class_duration: "1hr",
                class_intensity: "moderate",
                class_location: "michigan",
                registered_participants: 10,
                class_max_participants: 44
            })
            .then(res => {
                expect(res.body.message).toBe("Invalid Credentials");
            })
        })
    })
    describe("PUT /:ID", function() {
        it('not allow user to create class without correct token', function() {
            //make a request to the api
            return request(router)
            // .set('Content-Type', 'application/json')
            .put('/api/classes/1')
            .set('Authorization', "incorrect token")
            .send({
                class_name: "greg",
                class_type: "pass",
                class_date: "03-09-2020",
                class_start_time: "10:00",
                class_duration: "1hr",
                class_intensity: "moderate",
                class_location: "michigan",
                registered_participants: 10,
                class_max_participants: 44
            })
            .then(res => {
                expect(res.body.message).toBe("Invalid Credentials");
            })
        })
        it('responds with json', function() {
            return request(router)
            // .set('Content-Type', 'application/json')
            .put('/api/classes/1')
            .set('Authorization', "incorrect token")
            .send({
                class_name: "greg",
                class_type: "pass",
                class_date: "03-09-2020",
                class_start_time: "10:00",
                class_duration: "1hr",
                class_intensity: "moderate",
                class_location: "michigan",
                registered_participants: 10,
                class_max_participants: 44
            })
            .then(res => {
                expect(res.type).toMatch(/json/)
            })
           
        });
    })
    describe('DELETE /:ID', function() {
        it('responds with json', function() {
            return request(router)
            // .set('Content-Type', 'application/json')
            .delete('/api/classes/1')
            .set('Authorization', "incorrect token")
            .then(res => {
                expect(res.type).toMatch(/json/)
            })
           
        });
        it('should not allow user to delete class without proper token', function() {
            //make a request to the api
            return request(router)
            // .set('Content-Type', 'application/json')
            .delete('/api/classes/1')
            .set('Authorization', "incorrect token")
            .then(res => {
                expect(res.body.message).toBe("Invalid Credentials");
            })
        })
        
    })
})