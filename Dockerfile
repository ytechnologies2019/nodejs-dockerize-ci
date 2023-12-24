FROM node:18
WORKDIR /app
COPY . .
RUN npm i express
CMD [ "node", "server.js" ]
EXPOSE 3000