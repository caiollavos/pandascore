module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-empty-character-class': 'off',
  },
  overrides: [
    {
      files: ['**/*.*spec.ts'],
      rules: {
        'node/no-unpublished-import': 'off',
      },
    },
  ],
};