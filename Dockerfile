FROM node:18

COPY package*.json .
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script
EXPOSE 3000
CMD npm run dev