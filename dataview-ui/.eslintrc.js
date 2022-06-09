module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/no-unused-components": "off",
    "generator-star-spacing": "off",
    "no-tabs":"off",
    "no-unused-vars":"off",
    "no-console":"off",
    "no-irregular-whitespace":"off",
    "@typescript-eslint/no-explicit-any": ["off"] ,// 新增这句话，关闭any报错
    "@typescript-eslint/no-unused-vars": ["off"] ,// 新增这句话，关闭不使用参数报错
    '@typescript-eslint/no-var-requires': ["off"],
    "no-debugger": "off"
  }
}
