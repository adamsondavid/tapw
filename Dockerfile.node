FROM node:lts-alpine AS builder
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
RUN NITRO_PRESET=node_server npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /build/.output ./.output
EXPOSE 3000/tcp
ENTRYPOINT ["node", "--enable-source-maps", ".output/server/index.mjs"]
