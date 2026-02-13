FROM node:16

ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGODB_DB_NAME gha-docker-demo
ENV MONGODB_CLUSTER_ADDRESS cluster0.ntrwp.mongodb.net
ENV MONGODB_USERNAME stoevandy_db
ENV MONGODB_PASSWORD Hi9gRBGU5B******

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]