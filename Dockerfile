# Install dependencies only when needed
FROM node:lts-alpine AS deps

WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:lts-alpine AS builder

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY prisma ./prisma/
RUN npx prisma generate
RUN npm run build

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner

WORKDIR /app
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/postcss.config.js ./postcss.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/components.json ./components.json
CMD ["sh", "-c", "npx prisma migrate dev && node_modules/.bin/next start"]
# CMD ["node_modules/.bin/next", "start"]
