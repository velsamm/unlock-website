FROM node:latest

WORKDIR /app
COPY /build/ /app/build/

RUN npm install serve
CMD npx serve -s build -l 8080
