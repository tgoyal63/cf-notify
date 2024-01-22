FROM oven/bun:1.0.25-alpine

ENV PORT {PORT}

WORKDIR /usr/apps/cf-notify

COPY package.json .
COPY bun.lockb .

RUN bun install --frozen-lockfile --production

COPY . .

EXPOSE 5000-10000

CMD ["bun", "start"]
