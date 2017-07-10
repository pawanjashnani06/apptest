#!/bin/bash
cd merge-yml
mvn -P uberjar package
cd ../
./merge-yml/bin/merge-yml.sh api/swagger/contracts/Headers.yaml api/swagger/contracts/NedbankID.yaml api/swagger/contracts/FicaMe.yaml api/swagger/contracts/SCPExpenses.yaml > api/swagger/swagger.yaml
swagger project edit -p 10011 &
