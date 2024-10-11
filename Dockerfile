FROM node:20-alpine3.19 as base

FROM base as builder
WORKDIR /build
COPY package*.json .npmrc ./
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npm run build && npm prune --production

FROM base
WORKDIR /app
COPY --from=builder /build ./
ENTRYPOINT ["node", "--enable-source-maps", "dist/main.js"]
