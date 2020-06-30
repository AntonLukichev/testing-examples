module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'import',
  ],
  rules: {
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.{ts,tsx}',
        '**/*.stories.{ts,tsx}',
        'src/setupTests.ts',
      ]
    }],
    'import/extensions': ['error', 'ignorePackages', {
      'js': 'never',
      'mjs': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never',
    }],
    'react/jsx-props-no-spreading': 0,
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'never',
    }]
  },
};
