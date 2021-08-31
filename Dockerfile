FROM node:16-alpine3.12
RUN apk update
RUN apk add git
RUN git clone https://github.com/366-stavros/mock-controller
WORKDIR /mock-controller
RUN yarn install
RUN npm install -g ts-node