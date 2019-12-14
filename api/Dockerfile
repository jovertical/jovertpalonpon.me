FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "dist/app.js" ]