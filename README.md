# Delivery Much Challenge:

## Minhas considerações sobre o desafio:

Gostei bastante da idéia, decidi utilizar typescript pela ajuda no intellisense e pela tipagem um pouco mais forte.

Na parte de testes utilizei o Jest por ser de fácil configuração e alta eficiência, junto com o supertest para fazer chamadas http

Para o Linting usei o ESLint com o plugin de Typescript

Foi uma REST apI simples porém divertida, jamais tinha utilizado a API do Giphy, muito menos a do Pui

## Variáveis ambiente:

o aqruivo .env ficou fora do ```.gitignore``` por não conter nenhuma informação relevante e para facilitar a configuração do ambiente

## Configuração:
  Como solicitado é necessário que a API rode no docker, então os comandos a seguir deverão ser executados:

  ``` sudo docker build -t challenge-delivery-much . ```
  
  ``` sudo docker run -it -p 9000:3333 challenge-delivery-much ```

## Utilização:

A API é constituída de apenas uma requisição GET

Para usá-la, após o docker estar rodando, basta chamar:

> http://localhost:3333/recipes/?i=ingrediente1,ingrediente2,ingrediente3 

como estabelecido, pelo menos um ingrediente deve ser passado, e 3 ingredientes como limite


## Testes:
### foram feitos testes unitários e de integração, para rodá-los é apenas rodar o comando:

``` npm test ```

ou

``` yarn test ```  
