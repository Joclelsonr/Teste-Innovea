<div align="center">

![innovea](https://user-images.githubusercontent.com/104178622/199556722-8af96477-1eb1-4bb6-a538-2d60f5727539.png)

# Teste de Homologação - INNOVEA
</div>

## Objetivo 🎯

Construa uma aplicação utilizando a linguagem e frameworks da vaga concorrida. Essa aplicação deve consumir a API <a href="https://newsapi.org" target="_blank">News API</a> e exibir a lista de artigos com informações de autores, título e descrição.

## Funcionalidades ⚡️


#### Retorna todas as notícias
```http
  GET  /news
```

#### Paginação e quantidade de notícias por página

```http
  GET  /news?limit=10&page=1
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `limit`     |  `string`  |       quantidade de notícias por página     |
| `page`      |  `string`  |                   paginação                 |

###  Body

#### Pesquisa por assuntos e Linguagem da notícia

```javascript
{
    "topic": "apple",
    "language": "pt"
}
```

## Tecnologias Utilizadas 🔨

<li>Typescript</li>
<li>Node JS</li>
<li>Axios</li>
<li>Cors</li>
<li>Helmet</li>


## Variáveis de Ambiente 🛅

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_KEY`


## Rodando localmente 💻

Clone o projeto

```bash
  git clone https://github.com/Joclelsonr/teste-Innovea.git
```

Entre no diretório do projeto

```bash
  cd teste-innovea
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```
