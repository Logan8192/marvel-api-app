# Marvel API Mobile APP

Mobile App who uses Marvel's API to get info about characters, comics, series and more.

## Current Features
- Search and discover multiple versions of Marvel's characters.

<img src="./screenshots/character_search.png" width="300">
<img src="./screenshots/character_details.png" width="300">

## Get started

- Make sure that your computer has installed Node.js and NPM:

```
npm -v
```

```
node -v
```

- Install project's dependencies:

```
npm i
```

- Set up your development environment with the guide provided by [React Native docs.](https://reactnative.dev/docs/environment-setup)

- Create your local environment file by copying the example contained in the repository:

```
cp .env.example .env
```

- Register to the [Marvel Developer website](https://developer.marvel.com/) in order to get your API's public key.

- Read the [Authorization page](https://developer.marvel.com/documentation/authorization) in order to learn how to generate your API's hash.

- Copy your public key and hash in the previously generated .env file.

## Run App
- Run on an Android Device or Emulator:
```
npm run android
```

## Run Linter

- Run eslint without automatic code fixes:

```
npm run lint
```

- Run eslint with automatic code fixes:

```
npm run lint:fix
```

## Run Tests

```
npm run test
```

## Developed with

- [React Native](https://reactnative.dev/): Mobile application framework used to develop applications for Android and iOS with JavaScript/TypeScript.
- [NativeBase](https://nativebase.io/): UI component library for React Native.
