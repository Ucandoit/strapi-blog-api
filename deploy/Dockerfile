FROM strapi/base:14-alpine
ENV NODE_ENV production
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY favicon.ico .
COPY api/ api/
COPY components/ components/
COPY config/ config/
COPY extensions/ extensions/
COPY public/robots.txt public/

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]