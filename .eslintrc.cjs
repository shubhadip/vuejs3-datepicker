module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '@vue/prettier',
    // '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    indent: 'off',
    'no-tabs': 'error',
    'max-len': [2, 200, 4, { ignoreUrls: true }],
    'no-template-curly-in-string': 'error',
    'prefer-arrow-callback': 'error',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/indent': ['error', 2],
    // TODO: refactor these rules starts here
    'vuejs-accessibility/form-control-has-label': 'off',
    'import/extensions': 'off',
    'vue/require-default-prop': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'vuejs-accessibility/click-events-have-key-events':'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'vue/multi-word-component-names': 'off',
    // TODO: refactor these rules ends here
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },

      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'd.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
