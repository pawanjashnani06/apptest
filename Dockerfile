FROM schickling/swagger-ui:latest

ENV SWAGGER_JSON "/usr/src/app/combined.yaml"

EXPOSE 8000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/

CMD [ "npm", "start" ]