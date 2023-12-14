const environments = {
    local: {
        baseUrl: 'http://localhost:3000/'
    }
};

const selectedEnvironment = process.env.NODE_ENV || 'local';
module.exports = { ...environments[selectedEnvironment], browser: 'chrome' };