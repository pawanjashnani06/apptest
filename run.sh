#!/bin/bash
cd merge-yml
mvn -P uberjar package
cd ../
./merge-yml.sh
swagger project edit -p 10011 &
