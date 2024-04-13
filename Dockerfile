FROM node:20-alpine3.19 as node

FROM node as build
WORKDIR /build
COPY package*.json .
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npx vite build && npx esbuild src/main.docker.ts --bundle --platform=node --outfile=server.js

FROM node
WORKDIR /app
COPY --from=build /build/dist dist
COPY --from=build /build/server.js .
EXPOSE 80/tcp
ENTRYPOINT ["node", "server.js"]
