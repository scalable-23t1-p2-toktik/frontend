FROM node:18
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm run prisma-generate && npm run start:prod"]
# RUN npm run prisma-generate
# RUN npm run migrate-resolve
# RUN npm run dev
