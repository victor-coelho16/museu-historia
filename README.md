# Museu Digital | Revolta dos Malês

Versão atualizada para GitHub, com todos os arquivos na mesma pasta.

Não existe pasta `pages`.
Não existe pasta `assets`.

## Arquivos que devem ser enviados para o GitHub

Envie todos estes arquivos para a raiz do repositório:

- index.html
- o-que-foi.html
- quem-eram.html
- contexto.html
- causas.html
- como-ocorreu.html
- consequencias.html
- importancia.html
- kahoot.html
- referencias.html
- style.css
- script.js
- config.js
- .nojekyll

## Como subir no GitHub

1. Extraia este ZIP.
2. Entre no seu repositório do GitHub.
3. Clique em Add file.
4. Clique em Upload files.
5. Selecione todos os arquivos de dentro da pasta extraída.
6. Clique em Commit changes.

## Como publicar

Settings → Pages → Deploy from a branch → main → /root → Save

## Como colocar o Kahoot

Abra o arquivo `config.js`, encontre:

```js
window.KAHOOT_URL = "";
```

e troque por:

```js
window.KAHOOT_URL = "cole-o-link-do-kahoot-aqui";
```

Depois suba o `config.js` atualizado no GitHub.
