FROM node:7-slim
WORKDIR /usr/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD ["npm","start"]