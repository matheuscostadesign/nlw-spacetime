## Mobile

- Documentação Expo
  https://docs.expo.dev/

- Criar projeto React Native com Expo
  `npx create-expo-app my-app`

- NativeWind (Tailwind p/ React Native)
  https://www.nativewind.dev/quick-starts/expo

- Instalar NativeWind
  `npm i nativewind`

- Criar arquivo Tailwind config
  `npx tailwindcss init`

- Instalar Tailwind
  `npm i tailwindcss -D`

- Incluir suporte a Typescript no arquivo "tsconfig.json"

  ```json
    "compilerOptions": {
    "types": ["nativewind/types"]
  },
  ```

- Instalar Prettier Tailwind
  `npm i prettier-plugin-tailwindcss -D`

- Criar o arquivo "prettier.config.js" com os dados e reiniciar VSCode para funcionar

```js
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
};
```

- Instalar fontes
  https://github.com/expo/google-fonts
  `npx expo install @expo-google-fonts/bai-jamjuree expo-font`

  - Import de imagens no Tyscript
  - Criar arquivo em "src/assets/assets.d.ts"

  ```ts
  declare module "*.png";
  ```

- Instalar suporte p/ arquivos SVG
  https://github.com/kristerkari/react-native-svg-transformer
  `npx expo install react-native-svg`
  `npm i react-native-svg-transformer -D`
  Criar arquivo "metro.config.js"

  ```js
  const { getDefaultConfig } = require("expo/metro-config");

  module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    config.transformer = {
      ...transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    };
    config.resolver = {
      ...resolver,
      assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...resolver.sourceExts, "svg"],
    };

    return config;
  })();
  ```
