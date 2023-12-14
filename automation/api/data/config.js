/* eslint-disable no-undef */
const environments = {
    local: {
        baseUrl: 'https://reqres.in'
    }
};

const selectedEnvironment = process.env.NODE_ENV || 'local';
module.exports = { ...environments[selectedEnvironment], browser: 'chrome' };