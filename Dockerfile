FROM node:latest

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

RUN npm install serve
CMD npx serve -s build -l 8080
