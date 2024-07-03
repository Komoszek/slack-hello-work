FROM docker.io/node:20-alpine

WORKDIR /app

COPY dist/slack-hello-work slack-hello-work

WORKDIR /app/slack-hello-work

RUN npm --omit=dev install

CMD [ "node", "." ]