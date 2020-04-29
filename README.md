# BackEndNode

Start App

yarn
yarn dev:server

server is running on portn 3333

//Iniciando container docker, pegar o id pelo docker ps -a
docker start(id)

//outros:
//comandos docker:
//Criar container
❯ docker run --name gostack_postgres -e POSTGRES_PASSWORD=\*\* -p 5432:5432 -d postgres

//verificar imagens docker que estão sendo executadas
docker ps

//lista todos os container da máquina
//docker ps -a

//Verificar os logs de um container
//docker logs:(id)
