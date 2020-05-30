module.exports = {
  root: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel.jest',
  },
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testPathIgnorePatterns: ['/node_modules', '/dist/'],
};
