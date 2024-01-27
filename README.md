# vite-react-template

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

**It would be good if you knew this before starting**

We are using:

- [Husky](https://typicode.github.io/husky/) to run the Git Hooks;
- [NVM](https://github.com/nvm-sh/nvm) to handle the Node versions;

You can update environment variables in the files:

- [.env](./.env): the base env vile, the variables here will be used in all environments
- [.env.development](./.env): the development mode, just read in your local environment (npm run dev)
- [.env.production](./.env): the production mode, will be read in your production environment (npm run build)

And you can create new variables with the prefix `VITE_`.

Example: `VITE_EXAMPLE_VAR`.

In the [App.tsx](./src/App.tsx) you can see the use of `import.meta.env` to import env variables.

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

## Running the tests

Running all tests:

```sh
npm t
```

Watching all tests:

```sh
npm run test:watch
```

To watch one file, you just need to add the path in the watch command:

```sh
npm run test:watch src/components/Example/Example.test.tsx
```

To run the coverage, you just need this command:

```sh
npm run coverage
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
