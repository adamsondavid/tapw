FROM node:18-alpine3.18
WORKDIR /app
COPY . .
EXPOSE 8080/tcp
ENTRYPOINT [ "node", ".tapw/src/main.docker.js" ]
