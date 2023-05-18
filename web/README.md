## Frontend

- Criar projeto Next.js
  `npx create-next-app@latest web --use-npm`

- Qualquer arquivo "page.tsx" na pasta "app" se torna uma rota
- Exemplo: "usuarios" -> "page.tsx" -> http://localhost:3000/usuarios

- Criar arquivo de configuração Tailwind/Prettier
  `npm i prettier-plugin-tailwindcss -D`

## Next.js

- Import de fonts próprio
- Para favicon personalizado é só colocar na pasta "app"

### Favicon

- .PNG: Arquivo "icon.png"
- .ICO: Arquivo "favicon.icon"

## Tailwind

- Para extender/criar classes no Tailwind, basta adicionar no arquivo "tailwind.config.js", exemplo:

```js
theme: {
  extend: {
    blur: {
      full: "194px",
    },
  }
}
```

- Assim, podemos acessar/chamar a propriedade com `blur-full`
