<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafios Módulo 3 - Iniciando no Back-end
</h3>

---

#### :rocket: Desafio 3-1: Primeiro servidor

- Criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (páginas de `Cursos` e `Sobre`). 
- Implementar um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois 
- E também um arquivo que sirva uma página de erro 404.

Para capturar as requisições que não existem (404), foi adicionado o código abaixo no final de todas as rotas:

````js
  server.use((request, response) => {
    response.status(404).render("not-found")
  })
````
#### :rocket: Desafio 3-2: Arquivos nunjucks e dados dinâmicos

- Atualizar os arquivos com informações dos cursos e descrição de forma dinâmica.

#### :rocket: Desafio 3-3: Página de descrição do curso

- Criar uma página de descrição do curso que deve ser chamada no lugar do modal quando o usuário clicar no card do curso.

#### Rota

A rota também será a `/courses`, porém o id do curso será passado via route params (ex.:` /courses/id_do_curso`). Foi utilizado o req.params para recuperar o id fornecido na rota:

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