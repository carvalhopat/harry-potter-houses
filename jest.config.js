const resolvePathRoot = '<rootDir>' 

module.exports = {
  moduleNameMapper: {
    '\\.module\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(css|less|scss)$': `${resolvePathRoot}/_tests_/unit/mocks/styleMock.js`,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${resolvePathRoot}/_tests_/unit/mocks/fileMock.js`,
  },
  testEnvironment: 'jsdom',
};