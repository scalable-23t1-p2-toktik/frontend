FROM node:18
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . ./

RUN npm run build

EXPOSE 3000

# Hardcoding migration query, not good
CMD ["sh", "-c", "npm run prisma-generate && npx prisma migrate resolve --applied 20231025115659_users_db && npm run start:prod"]
# RUN npm run prisma-generate
# RUN npm run migrate-resolve
# RUN npm run dev
