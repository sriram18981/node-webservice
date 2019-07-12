# Docker container for node based processors NOTE: This should build on top of a shared os/node layer so we should look to the secure alpine based ca images
FROM node:alpine

MAINTAINER Sriram Tanikella "sriram18981@gmail.com"
EXPOSE 8888

WORKDIR /src
ADD . .

RUN mkdir -p /data/logs/
RUN npm install

CMD ["npm", "start"]
