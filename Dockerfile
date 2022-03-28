FROM node:16.14.2-alpine

WORKDIR /var/www/app

COPY package*.json yarn.lock ./

RUN yarn --pure-lockfile

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
