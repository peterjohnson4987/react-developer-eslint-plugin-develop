# eslint-plugin-primer-react

ESLint rules for Primer React

## Installation

1. Assuming you already have [ESLint](https://www.npmjs.com/package/eslint) installed, run:

   ```shell
   npm install --save-dev eslint-plugin-primer-react

   # or
   
   yarn add --dev eslint-plugin-primer-react
   ```

2. In your [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files), extend the recommended Primer React ESLint config:

   ```js
   {
     "extends": [
       // ...
       "plugin:primer-react/recommended"
     ]
   }
   ```

## Rules

- [no-deprecated-colors](https://github.com/primer/eslint-plugin-primer-react/blob/main/docs/rules/no-deprecated-colors.md)
