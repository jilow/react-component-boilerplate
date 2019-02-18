# React Component Boilerplate

A template for reusable react components using typescript and built with [microbundle](https://www.npmjs.com/package/microbundle).

## Quickstart

Install dependencies
```
yarn install
```

Development - build on file changes
```
yarn start
```

Run tests - using jest
```
yarn test
```

Production - build once
```
yarn build
```

## Quirks

If you are using `npm link` to consume this component in another app. Then you need link that app's react to this component `npm link ../myapp/node_modules/react`.
