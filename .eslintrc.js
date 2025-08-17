const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    // TypeScript
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',

    // React
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-sort-props': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-no-leaked-render': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-curly-brace-presence': 'off',

    // Import / ESLint
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': 'off',
    'import/newline-after-import': 'off',

    // Next.js
    '@next/next/no-img-element': 'off',

    // Unicorn
    'unicorn/filename-case': 'off',

    // General JS
    'no-nested-ternary': 'off',
    'no-redeclare': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-constant-condition': 'off',
    'no-async-promise-executor': 'off',
    'no-duplicate-imports': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-useless-catch': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-unsafe-return': 'off',
    'no-unsafe-argument': 'off',
    'no-unsafe-assignment': 'off',
    'no-unsafe-member-access': 'off',
    'no-alert': 'off',
    '@typescript-eslint/no-empty-function': 'off',
'@typescript-eslint/prefer-optional-chain': 'off',
'@typescript-eslint/no-unsafe-return': 'off',
'no-unused-disable-directive': 'off',

  },
};
