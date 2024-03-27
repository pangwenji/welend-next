############################
# Stage 0: base
FROM node:10-alpine as base

RUN apk update && apk add --no-cache \
    autoconf \
    automake \
    nasm \
    bash \
    g++ \
    gcc \
    make \
    musl-dev \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev

############################
# Stage 1: deps
FROM base as deps

RUN apk update && apk add --no-cache \
    git

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 100000

############################
# Stage 2: builder
FROM base as builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

############################
# Stage 3: test
FROM deps as test

WORKDIR /app

COPY . .
RUN NODE_ENV=test yarn test
RUN yarn lint

############################
# Stage 4: runner
FROM builder as runner

WORKDIR /app

COPY . .
COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 8888

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# RUN npx next telemetry disable

CMD [ "node", "server.js" ]
