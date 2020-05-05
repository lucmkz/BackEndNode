<h4 align="center">
  BackEndNode
</h4>

Start App
<br>

yarn<br>

yarn dev:server
<br>

server is running on portn 3333
<br>

//Iniciando container docker, pegar o id pelo docker ps -a
docker start(id)
<br>

//outros: <br>
<br>
//comandos docker:
<br>
//Criar container
<br>
❯ docker run --name gostack_postgres -e POSTGRES_PASSWORD=\*\* -p 5432:5432 -d postgres

<br>
//verificar imagens docker que estão sendo executadas
<br>
docker ps
<br>

<br>
//lista todos os container da máquina
<br>
//docker ps -a
<br>

<br>
//Verificar os logs de um container
<br>
//docker logs:(id)
<br>

<br>
//Atualizar tabela
<br>
//Necessário que o banco de dados esteja UP
<br>
//yarn migration:revert - Para reverter a última alteração (pode ser executada em sequencia quantas vezes for necessário)
<br>
//yarn migration:run - para criar as tabelas no banco
<br>
<br>
