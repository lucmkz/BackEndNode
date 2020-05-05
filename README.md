<h4 align="center">
  BackEndNode
</h4>

## :Start App

```bash
# Clone this repository and install dependencies
$ yarn

# Start Server
$ yarn dev:server
```
<p>
server is running on port 3333
<p>

## :Docker 
```bash
# To get id, use docker ps -a
$ docker start(id)

# Other Commands
# To create a new instance
$ docker run --name gostack_postgres -e POSTGRES_PASSWORD=\*\* -p 5432:5432 -d postgres

# docker Images Running
$ docker ps
# or
$ docker ps -a
# Logs
$ docker logs:(id)
```

## :Migrations on TypeORM (database)
```bash
# To create a new migration
$ yarn migration:create -n (NameOfMigration)

# To create or Update Table (image docker necessary up)
$ yarn migration:run

# To revert migrations
$ yarn migration:revert
```

Made by Lucas Santos :wave: [Get in touch!](https://www.linkedin.com/in/lucasmk/)
