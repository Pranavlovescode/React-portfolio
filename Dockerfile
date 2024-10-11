FROM node:20-alpine
WORKDIR /portfolio
COPY package*.json /portfolio/
RUN npm install
COPY . /portfolio/
EXPOSE 5173
CMD ["npm", "run","dev"]