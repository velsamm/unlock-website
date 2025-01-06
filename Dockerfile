FROM node:18.20-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm install

FROM node:18.20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules node_modules
COPY . .
RUN npm run build

FROM node:18.20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone/ .next/standalone/
COPY --from=builder /app/.next/static/ .next/standalone/.next/static/

CMD ["node", ".next/standalone/server.js"]