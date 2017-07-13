#!/bin/bash
cd merge-yml
mvn -P uberjar package
cd ../
./merge-yml.sh

