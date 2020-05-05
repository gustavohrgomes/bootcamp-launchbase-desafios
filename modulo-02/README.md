<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafios Módulo 2 - Iniciando no Front-end
</h3>

---

#### :rocket: Desafio 2-1: Primeiro HTML

Criar um arquivo html que contenha um [favicon](https://raw.githubusercontent.com/Rocketseat/bootcamp-launchbase-desafios-02/master/desafios/favicon.ico) e um header com 3 links: Comunidade, Email e Telefone.

#### Favicon

O favicon é o ícone que aparece na aba do navegador.

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```

#### Links

- `Comunidade`: Link que deve apontar para o convite da comunidade aberta da rocketseat `(https://discordapp.com/invite/gCRAFhc)`.

- `Email`: Link que deve chamar o comando de enviar email para o destinatário `oi@rocketseat.com.br`.

- `Telefone`: Link que deve chamar o comando de realizar uma ligação para o número `+5547992078767`.

#### Estilização

- Deve ser aplicado um background
- Deve ser utilizada a fonte Roboto
- O header precisa ocupar todo o espaço lateral e superior (body sem margin)
- O header precisa ter um espaçamento interno de 30px em todas as direções
- Os links devem ter um espaçamento de 30px entre si

#### :rocket: Desafio 2-2: Página de descrição

Adicionar um novo link no header chamado Sobre. Essa página deverá mostrar informações referentes a Rocketseat.

#### Informações da página

- Uma imagem da logo da empresa
- O nome da empresa
- Uma breve descrição da empresa
- Uma lista com as principais tecnologias utilizadas.
- Links para as redes sociais da empresa (Github, Instagram e Facebook)

#### Estilização

- A imagem deve ter uma borda e um formato circular.
- Deve ser utilizada a fonte Roboto.
- O nome da empresa e a imagem devem ser destacar do restante.
- Os links das redes sociais devem ter alguma alteração visual quando o cursor do mouse passar por cima.

#### :rocket: Desafio 2-3: Página de cursos e iframe

Adicionar no header um link chamado Conteúdos. Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.

#### Informações da página

- Título da página.
- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos cursos.55555cdfv xvv55555cdfv xvv#### Informações do card

- Logo do curso ([Starter](https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg), [Launchbase](https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg) e [GoStack](https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg))
- Título do curso
- Quantidade de módulos dos cursos
- Informação se o curso é gratuito ou pago

#### Modal

- Deve conter um iframe que busca a página do curso. 
- Botão de fechar o modal
- Implementar funcionalidade de maximizar o modal.

#### Estilização

- Deve ser utilizado o grid para organizar os cursos
- O modal nunca deve abrir maximizado