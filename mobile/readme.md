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
