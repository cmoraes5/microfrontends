ARG PROJECT

FROM node:18-alpine AS build-prod

ARG PROJECT

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build:production -- $PROJECT

FROM nginx:1.23.1-alpine

ARG PROJECT

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-prod /usr/src/app/dist/$PROJECT /usr/share/nginx/html