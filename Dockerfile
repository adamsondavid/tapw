FROM node:20-alpine3.19 as node

FROM node as build
WORKDIR /build
COPY package*.json .
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npm run build

FROM node
WORKDIR /app
COPY --from=build /build/dist dist
EXPOSE 3000/tcp
ENTRYPOINT ["node", "dist/main.js"]
