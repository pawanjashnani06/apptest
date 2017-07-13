#!/bin/bash
docker run -it --rm \
    --name merge-yml.build \
    -v "$PWD":/usr/src/mymaven -w /usr/src/mymaven maven:alpine \
    mvn -f merge-yml/pom.xml -P uberjar package
