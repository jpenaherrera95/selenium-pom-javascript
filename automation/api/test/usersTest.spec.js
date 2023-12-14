const request = require('supertest');
const expect = require('chai').expect;
const users = require('../contracts/usersSchema.json');
const config = require('../data/config')

describe('Restful Users Test', () => {
    it('Users should have 200 status code', (done) => {
        request(config.baseUrl)
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
        request(config.baseUrl)
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