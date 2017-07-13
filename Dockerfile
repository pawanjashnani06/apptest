FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install
RUN npm install -g swagger

# Bundle app source
COPY app.js .
COPY api/ api/
COPY config/ config/

EXPOSE 10010
CMD ["swagger", "project", "start", "-m"]
