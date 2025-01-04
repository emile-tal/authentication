# syntax=docker/dockerfile:1

FROM node:23

WORKDIR /client

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 5173
CMD ["npm", "start"]