FROM node:lts-alpine as build

RUN apk add --no-cache yarn
WORKDIR /app
ADD . /app/
COPY . .

RUN yarn && yarn build

FROM node:lts-alpine
WORKDIR /app
COPY --from=build /app /app
CMD ["yarn", "start"]
