FROM rowanto/docker-java8-mvn-nodejs-npm:latest

EXPOSE 10010
EXPOSE 10011

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

RUN npm install -g swagger

COPY . /usr/src/app/

ADD run.sh /usr/src/app/
RUN /bin/bash -c "source run.sh"

RUN ./run.sh
CMD ["swagger", "project", "start", "-m"]
