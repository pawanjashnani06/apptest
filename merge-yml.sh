#!/bin/bash
./merge-yml/bin/merge-yml.sh \
  api/swagger/contracts/SCPGoals.yaml \
  api/swagger/contracts/Enquiries.yaml \
  api/swagger/contracts/ContactCards.yaml \
  api/swagger/contracts/Transfers.yaml \
  api/swagger/contracts/ReferenceData.yaml \
  api/swagger/contracts/Prepaids.yaml \
  api/swagger/contracts/Payments.yaml \
  api/swagger/contracts/Beneficiary.yaml \
  api/swagger/contracts/Test.yaml \
  api/swagger/contracts/NedbankID.yaml \
  api/swagger/contracts/FicaMe.yaml \
  api/swagger/contracts/SCPExpenses.yaml \
  api/swagger/contracts/SCPBudgets.yaml \
  api/swagger/contracts/SCPClients.yaml \
  api/swagger/contracts/Header.yaml \
> api/swagger/swagger.yaml
