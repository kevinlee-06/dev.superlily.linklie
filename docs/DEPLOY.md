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
docker run -p PORT:8080 kevinlee-06/linklie
```

### Example `docker-compose.yaml` file

```yaml
services:
  server:
    image: kevinlee-06/linklie
    ports:
      - 80:8080
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
