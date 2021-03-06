// 这里纯粹是为了单元测试。umi自带babel配置，项目运行及编译与这里无关
module.exports = {
  verbose: true,
  bail: 0,
  transform: {
    '\\.(js|ts|jsx|tsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|webmanifest|xml)$':
      '<rootDir>/src/jest/fileTransformer.js',
  },
  moduleNameMapper: {
    '^@@/(.*)$': '<rootDir>/src/.umi/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
