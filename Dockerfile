# Stage 1
FROM node:10 as kudi-website-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn global add serve
RUN yarn build

CMD ["serve", "-l", "3000", "public"]
