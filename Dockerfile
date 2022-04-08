FROM node:14

WORKDIR /app

COPY . .
COPY package*.json ./
COPY webpack.config.js ./
RUN npm i

EXPOSE 5001

CMD ["npm", "run", "dev"]

# FROM nginx
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
