FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

FROM node:20-alpine AS runtime

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY index.js  /app
COPY src /app/src

RUN apk add --no-cache tzdata
ENV TZ="Europe/Vienna"
RUN date

# EnvVars:
# - APP_HOSTNAME
# - APP_NAME
# - APP_EMAIL
# - APP_RENDER_DEFAULT_PAGES
# - APP_ENABLE_CORS

EXPOSE 3000
CMD ["node", "index.js"]
