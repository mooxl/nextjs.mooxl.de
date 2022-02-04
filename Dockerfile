FROM node:16-alpine AS base
WORKDIR /base
COPY ./package.json ./package.json
RUN yarn install
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN yarn build

FROM node:16-alpine AS prod
ENV NODE_ENV=production
WORKDIR /app
RUN yarn add next@12.0.10
COPY --from=build /build .

EXPOSE 3000
