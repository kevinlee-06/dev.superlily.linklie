# Deploying Linklie

## Clone the repository

```sh
git clone https://github.com/kevinlee-06/linklie.git
cd linklie
```

## Deploying with Docker

### Build the Docker image

```sh
docker build -t kevinlee-06/linklie .
```

### Run the Docker container

```sh
docker run -d \
  --name server \
  -p 14400:8080 \
  -v data:/usr/src/app/db \
  kevinlee-06/linklie:latest

```

### Example `docker-compose.yaml` file

```yaml
services:
  server:
    image: ghcr.io/kevinlee-06/linklie:latest
    ports:
      - PORT:8080
    volumes:
      - data:/usr/src/app/db    
volumes:
  data:
    driver: local
```

#### Use the command to run the latest version of Linklie

```sh
docker compose up -d --pull always
```

> [!NOTE]  
> Don't forget to change the port in the `docker-compose.yaml` file.

## Deploying with Node.js

### Run the server with Node.js

```sh
npm install
node server.js
```

> [!NOTE]  
> Don't forget to change the `PORT` in the `server.js` file.
