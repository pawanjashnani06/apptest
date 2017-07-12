#!/bin/bash
./merge-yml/bin/merge-yml.sh \
  api/swagger/contracts/Test.yaml \
  api/swagger/contracts/NedbankID.yaml \
  api/swagger/contracts/FicaMe.yaml \
  api/swagger/contracts/SCPExpenses.yaml \
  api/swagger/contracts/SCPBudgets.yaml \
  api/swagger/contracts/SCPClients.yaml \
  api/swagger/contracts/Header.yaml \
> api/swagger/swagger.yaml
