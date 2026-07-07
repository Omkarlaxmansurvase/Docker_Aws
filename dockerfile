FROM node:20-alpine as build-frontend
COPY ./frontend /app
WORKDIR /app
RUN npm install
RUN npm run build


# build backend 
FROM node:20-alpine 
COPY ./backend /app
WORKDIR /app
RUN npm install
COPY --from=build-frontend /app/dist /app/public
CMD ["node", "server.js"]

