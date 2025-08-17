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

    // React
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',

    // Import / ESLint
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': 'off',
    'import/newline-after-import': 'off',

    // Next.js
    '@next/next/no-img-element': 'off',

    // Unicorn
    'unicorn/filename-case': 'off',

    // General
    'no-nested-ternary': 'off',
    'no-redeclare': 'off',
    'no-console': 'off', // allows console.log
    '@typescript-eslint/no-unused-vars': 'off',
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
  },
};
