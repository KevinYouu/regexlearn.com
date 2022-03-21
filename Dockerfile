FROM node:lts-alpine

WORKDIR /app
ADD . /app/
COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

RUN npm install && \
    npm run build

CMD ["npm", "run", "start"]
