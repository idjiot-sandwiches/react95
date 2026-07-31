# Stage 1: Build application
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

RUN npm run build

# Stage 2: Runner (Final Image)
FROM nginxinc/nginx-unprivileged:alpine3.22 AS runner

LABEL org.opencontainers.image.source="https://github.com/idjiot-sandwiches/react95"
LABEL org.opencontainers.image.title="React95"
LABEL org.opencontainers.image.description="React95 hobby website"
LABEL org.opencontainers.image.licenses="MIT"
LABEL org.opencontainers.image.url="https://github.com/idjiot-sandwiches/react95"
LABEL org.opencontainers.image.vendor="Idjiot Sandwiches"

COPY nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html

USER nginx

EXPOSE 8080

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]