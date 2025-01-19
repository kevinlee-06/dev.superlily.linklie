# Linklie - A URL shortener

## Deploying with Docker

### Clone the repository

```sh
git clone https://github.com/kevinlee-06/linklie.git
cd linklie
```

### Use docker compose to build and run the application in the background

```sh
docker compose up -d --build
```

> [!NOTE]  
> Don't forget to change the port in the `docker-compose.yaml` file.

## Deploying with Node.js

### Clone the repository

```sh
git clone https://github.com/kevinlee-06/linklie.git
cd linklie
```

### Run the server with Node.js

```sh
node server.js
```

> [!NOTE]  
> Don't forget to change the `PORT` in the `server.js` file.
