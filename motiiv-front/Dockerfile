# STAGE 1 : Build
FROM node:12-alpine AS build

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . ./

RUN yarn build

# STAGE 2 : Clean up
FROM node:12-alpine

WORKDIR /app

COPY --from=build /app/build build

EXPOSE 3000

RUN yarn add serve

CMD ["yarn", "serve", "-s", "build", "-l", "3000"]

