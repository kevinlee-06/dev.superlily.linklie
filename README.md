# Linklie - A URL shortener

## Features

### Password Protection for Deletion

- A password is required to delete a URL. You can set the deletion password in the web console. The password is stored as a hash in the database.

### Web UI

- A simple web interface is provided to allow users to add and delete URLs easily. The UI can be accessed at the root URL of the server.

## Deploying with Docker

### Clone the repository

```sh
git clone https://github.com/kevinlee-06/linklie.git
cd linklie
```

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

### Clone the repository

```sh
git clone https://github.com/kevinlee-06/linklie.git
cd linklie
```

### Run the server with Node.js

```sh
npm install
node server.js
```

> [!NOTE]  
> Don't forget to change the `PORT` in the `server.js` file.
