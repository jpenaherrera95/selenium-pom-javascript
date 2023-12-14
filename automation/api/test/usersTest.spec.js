const request = require('supertest');
const expect = require('chai').expect;
const users = require('../contracts/usersSchema.json');

describe('Restful Users Test', () => {
    const baseUrl = 'https://reqres.in';
    it('Users should have 200 status code', (done) => {
        request(baseUrl)
            .get('/api/users?page=2')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.statusCode).to.be.eql(200);
                if (err) {
                    throw err;
                }
                done();
            })
    })

    it('Users should match schema', (done) => {
        request(baseUrl)
            .get('/api/users?page=2')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.body).to.be.eql(users);
                if (err) {
                    throw err;
                }
                done();
            })
    })
})