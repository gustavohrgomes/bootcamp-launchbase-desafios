<h3 align="center">
  Desafios Módulo 3 - Iniciando no Back-end
</h3>

<blockquote align="center">“Faça seu melhor, mas sempre com prazo de entrega!”</blockquote>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

### :rocket: Desafio 3-1: Primeiro servidor

Nesse desafio você deve:
- Criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de `Cursos` e `Sobre`). 
- Implementar um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois 
- E também um arquivo que sirva uma página de erro 404.

Para capturar as requisições que não existem (404), foi adicionado o código abaixo no final de todas as rotas:

````js
  server.use((request, response) => {
    response.status(404).render("not-found")
  })
````
### :rocket: Desafio 3-2: Arquivos nunjucks e dados dinâmicos

Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.

### :rocket: Desafio 3-3: Página de descrição do curso

Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

#### Rota

A rota também será a `/courses`, porém o id do curso será passado via route params (ex.:` /courses/id_do_curso`). Dica: utilize o req.params para recuperar o id fornecido na rota.

```js
  server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    return res.send(`O id fornecido na rota é: ${id}`);
  });
```

#### Informações

- Layout padrão
- Card do curso
- Link que redireciona para a página do curso