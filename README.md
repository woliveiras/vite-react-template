# vite-react-template

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

**It would be good if you knew this before starting**

We are using:

- [Husky](https://typicode.github.io/husky/) to run the Git Hooks;
- [NVM](https://github.com/nvm-sh/nvm) to handle the Node versions;

## How to run this project

First of all, let's configure our enviroment.

You will need NVM installed on your environment. So, get the latest version here: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

Install the `.nvmrc` Node version with the following command:

```sh
nvm install
```

After that, you can use it with:

```sh
nvm use
```

Now, we are able to install the application dependencies and start our dev-server with the commands below:

```sh
npm i
npm run dev
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
