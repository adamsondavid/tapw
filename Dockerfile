FROM node:20-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npm run build
RUN npm prune --include=prod
ENTRYPOINT ["node", "--enable-source-maps", "dist/main.js"]
