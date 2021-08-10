module.exports = {
  // testEnvironment: "jsdom", // testEnvironment can be set here to be globally defined,
  //                              or at test file level with a codeblock
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // to handle css files imported as modules
  },
}
