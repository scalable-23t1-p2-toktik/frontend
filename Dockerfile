FROM node:18

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
COPY ./.next .
RUN npm run start
