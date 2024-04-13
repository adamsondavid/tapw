FROM node:20-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npx vite build
EXPOSE 80/tcp
ENTRYPOINT ["tsx", "src/main.docker.ts"]