# Delivery Much Challenge:

## Minhas considerações sobre o desafio:

Gostei bastante da idéia, decidi utilizar typescript pela ajuda no intellisense e pela tipagem um pouco mais forte.


Na parte de testes utilizei o Jest por ser de fácil configuração e alta eficiência, junto com o supertest para fazer chamadas http

Para o Linting usei o ESLint com o plugin de Typescript

## Configuração:
  Como solicitado é necessário que a API rode no docker, então os comandos a seguir deverão ser executados:
  > sudo docker build -t challenge-delivery-much .
  
  > sudo docker run -it -p 9000:3333 challenge-delivery-much



## Testes:
### foram feitos testes unitários e de integração, para rodá-los é apenas rodar o comando:
> npm test
> 
ou
> yarn test  
