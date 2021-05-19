# build phase
FROM node:15.1-alpine
WORKDIR '/app'
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
 
# run phase
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
