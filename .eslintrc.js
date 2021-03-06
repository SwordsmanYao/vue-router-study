// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  // 如果要忽略检测规则的话值为 0
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eqeqeq': 0
    // 'space-before-function-paren': 0,
    // 'space-before-blocks': 0,
    // 'keyword-spacing': 0,
    // 'key-spacing': 0,
    // 'comma-spacing': 0,
    // 'spaced-comment': 0
  }
}
