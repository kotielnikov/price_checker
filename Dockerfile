FROM node:alpine
WORKDIR /usr/app
COPY package.json .
RUN apk add --no-cache --virtual .gyp \
  python \
  make \
  g++ \
  && npm install --quiet \
  && apk del .gyp
COPY . .