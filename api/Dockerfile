FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "dist/app.js" ]