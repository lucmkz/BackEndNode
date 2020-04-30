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

//Atualizar tabela
//Necessário que o banco de dados esteja UP
//yarn migration:revert - Para reverter a última alteração (pode ser executada em sequencia quantas vezes for necessário)
//yarn migration:run - para criar as tabelas no banco
