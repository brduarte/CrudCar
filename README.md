# 🚗 CrudCar

## ⚒️ Ferramentas Utilizadas 
  
  - Node.js
  - Express
  - ORM Sequelize 
  - Mocha
  - Postgres 

## 👨‍💻 Executando Manualmente

Assegure-se de ter [Node.js](http://nodejs.org/) instalado

1. Clone seu repositório e instale as dependências  

```console
$ git clone https://github.com/brduarte/CrudCar.git 
$ cd CrudCar
$ npm install
```

2. Renome o arquivo .env.example para .env
```console
$ cp -v .env.example .env
```

3. Execute o banco de dados. Você pode instanciar o banco de dados onde preferir, mas eu deixei uma configuração do *Docker Compose* para subir um banco de dados para você utilizando os parâmetros configurado no arquivo .env, basta você executar o comando abaixo.
         
         ⚠️ OBS: Certifique-se que você tenha o Docker e o Docker Compose instalado em seu computador, caso o contrário você pode encontrar o guia de instalação no índice de documentação.


```console
$ docker-compose up postgres
```


4. Execute o projeto
```console
$ npm start
```

5. Sua API deve estar sendo executado em [localhost:3000](http://localhost:3000/).

        ⚠️ OBS: A API será executada na porta parametrizada na variável `APP_PORT` do projeto. 

## 📝 Documentação 

Para obter mais informações das ferramentas utilizadas:

- [Node.js](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/pt-br/)

## Autor

| [<img width="125px" src="https://avatars2.githubusercontent.com/u/29002558?v=4"><br><sub>@brduarte</sub>](https://github.com/brduarte)|
| :---: |
