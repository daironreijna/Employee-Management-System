module.exports = {
    testEnvironment: 'node', // You might adjust this based on your testing environment
    testMatch: ["**/__tests__/*.test.js"],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'json', 'node'],
};