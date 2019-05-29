FROM node:10-alpine

ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
