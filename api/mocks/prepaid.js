'use strict'

module.exports = {
  prepaidAccountsGet: prepaidAccountsGet,
  prepaidTransactionGet: prepaidTransactionGet,
  prepaidTransactionPut: prepaidTransactionPut,
  prepaidTransactionsGet: prepaidTransactionsGet,
  prepaidTransactionsPost: prepaidTransactionsPost,
  prepaidElectricitymeterPut: prepaidElectricitymeterPut,
  prepaidElectricitymetersGet: prepaidElectricitymetersGet,
  prepaidElectricitymetersPost: prepaidElectricitymetersPost,
  prepaidElectricitymetervoucherGet: prepaidElectricitymetervoucherGet,
  prepaidElectricitymetervouchersGet: prepaidElectricitymetervouchersGet,
  prepaidMoneySendGet: prepaidMoneySendGet,
  prepaidMoneySendPost: prepaidMoneySendPost,
  prepaidMoneySendHistoryGet: prepaidMoneySendHistoryGet
}

function prepaidAccountsGet (req, res, next) {
  res.json({
    'data': {
      'accounts': [
        {
          'accountName': 'Mark Twain',
          'accountNumber': '8970652413',
          'isOpen': true,
          'productCode': '101010',
          'productDescription': 'Prepaid account',
          'relationshipCode': '210012',
          'statusCode': '8970652413',
          'subProductCode': '1',
          'containerId': 1,
          'containerName': 'prepaid',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'EXT',
          'nickname': 'Mark',
          'sourceSystem': 'BankSystem',
          'interestRate': '7',
          'repaymentAmount': 1000,
          'accountHolder': 'Mark Twain',
          'actions': 'transact',
          'transactions': [
            {
              'transactionId': '574839201201',
              'description': 'Prepaid Transfer',
              'amount': 1000,
              'runningBalance': 10000,
              'debit': true,
              'account': '7812903456891',
              'postedDate': 'Sample text',
              'categoryId': 1,
              'childTransactions': [
                            {}
              ],
              'originalCategoryId': 1
            }
          ],
          'currency': 'RAND',
          'availableBalance': 10000,
          'currentBalance': 10000,
          'amountDue': 1000,
          'dueDate': '2017-07-27',
          'loanAmmount': 1000,
          'outstandingAmount': 1000,
          'profileAccountState': 'Active',
          'accountLevel': 'external',
          'viewAvailBal': true,
          'viewStmnts': true,
          'isRestricted': true,
          'viewCurrBal': true,
          'viewCredLim': true,
          'viewMinAmtDue': true,
          'isAlternateAccount': true,
          'allowCredits': true,
          'allowDebits': true,
          'accountRules': {}
        }
      ]
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ]
    }
  })
}

function prepaidTransactionGet (req, res, next) {
  res.json({
    'data': {
      'batchID': 1,
      'transactionID': 1,
      'capturedDate': '2017-07-12',
      'startDate': '2017-07-12',
      'nextTransDate': '2017-07-12',
      'beneficiaryID': 1,
      'bfName': {},
      'myDescription': {},
      'fromAccount': {
        'accountName': 'Mark Twain',
        'accountNumber': '',
        'isOpen': true,
        'productCode': '110',
        'productDescription': 'internal account',
        'relationshipCode': '210',
        'statusCode': '787970102030',
        'subProductCode': '',
        'containerId': 1,
        'containerName': 'bank',
        'isIncluded': true,
        'isPlastic': true,
        'accountType': 'current',
        'nickname': 'mark',
        'sourceSystem': 'bankSystem',
        'interestRate': '9',
        'repaymentAmount': 1000,
        'accountHolder': 'Mark Twain',
        'actions': 'Prepaid transaction',
        'transactions': [
          {
            'transactionId': '9867519021392',
            'description': 'Prepaid transfer',
            'amount': 1000,
            'runningBalance': 10000,
            'debit': true,
            'account': '9867452381',
            'postedDate': '2017-07-12',
            'categoryId': 1,
            'childTransactions': [
                        {}
            ],
            'originalCategoryId': 1
          }
        ],
        'currency': 'RAND',
        'availableBalance': 10000,
        'currentBalance': 10000,
        'amountDue': 1000,
        'dueDate': '2017-07-26',
        'loanAmmount': 1000,
        'outstandingAmount': 1000,
        'profileAccountState': 'Active',
        'accountLevel': 'Internal',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': true,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {}
      },
      'destinationNumber': '9867452381',
      'serviceProvider': 'Telenor',
      'productCode': '330',
      'amount': 1000,
      'isVoucherAmount': true,
      'reoccurrenceItem': {
        'reoccurrenceFrequency': 'Monthly',
        'recInstrID': 1,
        'reoccurrenceOccur': 1,
        'reoccOccurrencesLeft': 1,
        'reoccurrenceToDate': '2017-08-12',
        'reoccSubFreqType': '',
        'reoccSubFreqVal': '10'
      },
      'notificationDetails': [
        {
          'notificationId': 1,
          'notificationType': 'NONE',
          'notificationAddress': '',
          'notificationDefaultInd': true
        }
      ],
      'prepaidStatus': 'Active',
      'electricityAmountInArrears': 1000,
      'purchaseReferenceNumber': '6787542243',
      'unitsInBundle': '20',
      'favourite': true
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidTransactionPut (req, res, next) {
  res.json({
    'data': {
      'batchID': 1,
      'transactionID': 1,
      'capturedDate': '2017-07-12',
      'startDate': '2017-07-12',
      'nextTransDate': '2017-07-12',
      'beneficiaryID': 1,
      'bfName': {},
      'myDescription': {},
      'fromAccount': {
        'accountName': 'Mark Twain',
        'accountNumber': '787970102030',
        'isOpen': true,
        'productCode': '110',
        'productDescription': 'internal account',
        'relationshipCode': '210',
        'statusCode': '787970102030',
        'subProductCode': '',
        'containerId': 1,
        'containerName': 'bank',
        'isIncluded': true,
        'isPlastic': true,
        'accountType': 'current',
        'nickname': 'mark',
        'sourceSystem': 'bankSystem',
        'interestRate': '9',
        'repaymentAmount': 1000,
        'accountHolder': 'Mark Twain',
        'actions': 'Prepaid transaction',
        'transactions': [
          {
            'transactionId': '9867519021392',
            'description': 'Prepaid transfer',
            'amount': 1000,
            'runningBalance': 10000,
            'debit': true,
            'account': '9867452381',
            'postedDate': '2017-07-12',
            'categoryId': 1,
            'childTransactions': [
                        {}
            ],
            'originalCategoryId': 1
          }
        ],
        'currency': 'RAND',
        'availableBalance': 10000,
        'currentBalance': 10000,
        'amountDue': 1000,
        'dueDate': '2017-07-26',
        'loanAmmount': 1000,
        'outstandingAmount': 1000,
        'profileAccountState': 'Active',
        'accountLevel': 'Internal',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': true,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {}
      },
      'destinationNumber': '9867452381',
      'serviceProvider': 'Telenor',
      'productCode': '330',
      'amount': 1000,
      'isVoucherAmount': true,
      'reoccurrenceItem': {
        'reoccurrenceFrequency': 'Monthly',
        'recInstrID': 1,
        'reoccurrenceOccur': 1,
        'reoccOccurrencesLeft': 1,
        'reoccurrenceToDate': '2017-08-12',
        'reoccSubFreqType': '',
        'reoccSubFreqVal': '10'
      },
      'notificationDetails': [
        {
          'notificationId': 1,
          'notificationType': 'NONE',
          'notificationAddress': '',
          'notificationDefaultInd': true
        }
      ],
      'prepaidStatus': 'Active',
      'electricityAmountInArrears': 1000,
      'purchaseReferenceNumber': '6787542243',
      'unitsInBundle': '20',
      'favourite': true
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidTransactionsGet (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 1,
        'transactionID': 1,
        'capturedDate': '2017-07-12',
        'startDate': '2017-07-12',
        'nextTransDate': '2017-07-12',
        'beneficiaryID': 1,
        'bfName': {},
        'myDescription': {},
        'fromAccount': {
          'accountName': 'Mark Twain',
          'accountNumber': '787970102030',
          'isOpen': true,
          'productCode': '110',
          'productDescription': 'internal account',
          'relationshipCode': '210',
          'statusCode': '787970102030',
          'subProductCode': '',
          'containerId': 1,
          'containerName': 'bank',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'current',
          'nickname': 'mark',
          'sourceSystem': 'bankSystem',
          'interestRate': '9',
          'repaymentAmount': 1000,
          'accountHolder': 'Mark Twain',
          'actions': 'Prepaid transaction',
          'transactions': [
            {
              'transactionId': '9867519021392',
              'description': 'Prepaid transfer',
              'amount': 1000,
              'runningBalance': 10000,
              'debit': true,
              'account': '9867452381',
              'postedDate': '2017-07-12',
              'categoryId': 1,
              'childTransactions': [
                            {}
              ],
              'originalCategoryId': 1
            }
          ],
          'currency': 'RAND',
          'availableBalance': 10000,
          'currentBalance': 10000,
          'amountDue': 1000,
          'dueDate': '2017-07-26',
          'loanAmmount': 1000,
          'outstandingAmount': 1000,
          'profileAccountState': 'Active',
          'accountLevel': 'Internal',
          'viewAvailBal': true,
          'viewStmnts': true,
          'isRestricted': true,
          'viewCurrBal': true,
          'viewCredLim': true,
          'viewMinAmtDue': true,
          'isAlternateAccount': true,
          'allowCredits': true,
          'allowDebits': true,
          'accountRules': {}
        },
        'destinationNumber': '9867452381',
        'serviceProvider': 'Telenor',
        'productCode': '330',
        'amount': 1000,
        'isVoucherAmount': true,
        'reoccurrenceItem': {
          'reoccurrenceFrequency': 'Monthly',
          'recInstrID': 1,
          'reoccurrenceOccur': 1,
          'reoccOccurrencesLeft': 1,
          'reoccurrenceToDate': '2017-08-12',
          'reoccSubFreqType': '',
          'reoccSubFreqVal': '10'
        },
        'notificationDetails': [
          {
            'notificationId': 1,
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationDefaultInd': true
          }
        ],
        'prepaidStatus': 'Active',
        'electricityAmountInArrears': 1000,
        'purchaseReferenceNumber': '6787542243',
        'unitsInBundle': '20',
        'favourite': true
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidTransactionsPost (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 1,
        'transactionID': 1,
        'capturedDate': '2017-07-12',
        'startDate': '2017-07-12',
        'nextTransDate': '2017-07-12',
        'beneficiaryID': 1,
        'bfName': {},
        'myDescription': {},
        'fromAccount': {
          'accountName': 'Mark Twain',
          'accountNumber': '787970102030',
          'isOpen': true,
          'productCode': '110',
          'productDescription': 'internal account',
          'relationshipCode': '210',
          'statusCode': '787970102030',
          'subProductCode': '',
          'containerId': 1,
          'containerName': 'bank',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'current',
          'nickname': 'mark',
          'sourceSystem': 'bankSystem',
          'interestRate': '9',
          'repaymentAmount': 1000,
          'accountHolder': 'Mark Twain',
          'actions': 'Prepaid transaction',
          'transactions': [
            {
              'transactionId': '9867519021392',
              'description': 'Prepaid transfer',
              'amount': 1000,
              'runningBalance': 10000,
              'debit': true,
              'account': '9867452381',
              'postedDate': '2017-07-12',
              'categoryId': 1,
              'childTransactions': [
                            {}
              ],
              'originalCategoryId': 1
            }
          ],
          'currency': 'RAND',
          'availableBalance': 10000,
          'currentBalance': 10000,
          'amountDue': 1000,
          'dueDate': '2017-07-26',
          'loanAmmount': 1000,
          'outstandingAmount': 1000,
          'profileAccountState': 'Active',
          'accountLevel': 'Internal',
          'viewAvailBal': true,
          'viewStmnts': true,
          'isRestricted': true,
          'viewCurrBal': true,
          'viewCredLim': true,
          'viewMinAmtDue': true,
          'isAlternateAccount': true,
          'allowCredits': true,
          'allowDebits': true,
          'accountRules': {}
        },
        'destinationNumber': '9867452381',
        'serviceProvider': 'Telenor',
        'productCode': '330',
        'amount': 1000,
        'isVoucherAmount': true,
        'reoccurrenceItem': {
          'reoccurrenceFrequency': 'Monthly',
          'recInstrID': 1,
          'reoccurrenceOccur': 1,
          'reoccOccurrencesLeft': 1,
          'reoccurrenceToDate': '2017-08-12',
          'reoccSubFreqType': '',
          'reoccSubFreqVal': '10'
        },
        'notificationDetails': [
          {
            'notificationId': 1,
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationDefaultInd': true
          }
        ],
        'prepaidStatus': 'Active',
        'electricityAmountInArrears': 1000,
        'purchaseReferenceNumber': '6787542243',
        'unitsInBundle': '20',
        'favourite': true
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidElectricitymeterPut (req, res, next) {
  res.json({
    'data': {
      'destinationNumber': '965920217273',
      'beneficiaryName': 'Mark Twain',
      'myDescription': {},
      'beneficiaryID': 413423455453,
      'municipality': 'Model Town',
      'customerName': 'Mark Twain',
      'customerAddress': 'Block 3, Model Town',
      'notificationDetails': [
        {
          'notificationId': 1,
          'notificationType': 'NONE',
          'notificationAddress': 'Sample text',
          'notificationDefaultInd': true
        }
      ],
      'recentPayList': [
        {
          'bfPaymentDate': '2017-07-12',
          'bfPaymentAmount': 1000,
          'bfAcctNumber': '787970102030',
          'bfMyDescription': 'Prepaid transactions',
          'bfPurchaseReferenceNumber': '132415671289'
        }
      ]
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ]
    }
  })
}

function prepaidElectricitymetersGet (req, res, next) {
  res.json({
    'data': [
      {
        'destinationNumber': '965920217273',
        'beneficiaryName': 'Mark Twain',
        'myDescription': {},
        'beneficiaryID': 413423455453,
        'municipality': 'Model Town',
        'customerName': 'Mark Twain',
        'customerAddress': 'Block 3, Model Town',
        'notificationDetails': [
          {
            'notificationId': 1,
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationDefaultInd': true
          }
        ],
        'recentPayList': [
          {
            'bfPaymentDate': '2017-07-12',
            'bfPaymentAmount': 1000,
            'bfAcctNumber': '787970102030',
            'bfMyDescription': 'Prepaid transactions',
            'bfPurchaseReferenceNumber': '132415671289'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidElectricitymetersPost (req, res, next) {
  res.json({
    'data': [
      {
        'destinationNumber': '965920217273',
        'beneficiaryName': 'Mark Twain',
        'myDescription': {},
        'beneficiaryID': 413423455453,
        'municipality': 'Model Town',
        'customerName': 'Mark Twain',
        'customerAddress': 'Block 3, Model Town',
        'notificationDetails': [
          {
            'notificationId': 1,
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationDefaultInd': true
          }
        ],
        'recentPayList': [
          {
            'bfPaymentDate': '2017-07-12',
            'bfPaymentAmount': 1000,
            'bfAcctNumber': '787970102030',
            'bfMyDescription': 'Prepaid transactions',
            'bfPurchaseReferenceNumber': '132415671289'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidElectricitymetervoucherGet (req, res, next) {
  res.json({
    'data': [
      {
        'myDescription': 'Electricity Voucher',
        'purchaseDate': '2017-07-12',
        'fromAcctDetails': '787970102030',
        'meterNumber': '5643217890',
        'distributor': 'Eskom',
        'customerName': 'Mark Twain',
        'customerAddress': 'Model town',
        'serviceProvider': 'Eskom inc.',
        'nedbankReferenceNr': '20170712/GB/110110',
        'amount': 1000,
        'globalReceiptNr': 'SPAC//010101/0123/01',
        'taxInvoiceNr': 'INV0000000012',
        'supplyGroupCode': 567789012,
        'keyRevisionNr': 774589029,
        'tarrifIndexCode': 689067,
        'algorithmCode': 43567909,
        'tokenTechnologyCode': 232456643,
        'tokenDetail': [
          {
            'normalSaleToken': 'Electricity voucher',
            'electricityAmount': 1000,
            'vat': '5',
            'electricityUnits': 200,
            'receipt': '',
            'tarrif': [
              {
                'amount': 1000,
                'unitCost': 50,
                'units': '200'
              }
            ]
          }
        ],
        'enquiries': '9876567990'
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidElectricitymetervouchersGet (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 1,
        'transactionID': 1,
        'capturedDate': '2017-07-12',
        'startDate': '2017-07-12',
        'nextTransDate': '2017-07-12',
        'beneficiaryID': 1,
        'bfName': {},
        'myDescription': {},
        'fromAccount': {
          'accountName': 'Mark Twain',
          'accountNumber': '787970102030',
          'isOpen': true,
          'productCode': '110',
          'productDescription': 'internal account',
          'relationshipCode': '210',
          'statusCode': '787970102030',
          'subProductCode': '',
          'containerId': 1,
          'containerName': 'bank',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'current',
          'nickname': 'mark',
          'sourceSystem': 'bankSystem',
          'interestRate': '9',
          'repaymentAmount': 1000,
          'accountHolder': 'Mark Twain',
          'actions': 'Prepaid transaction',
          'transactions': [
            {
              'transactionId': '9867519021392',
              'description': 'Prepaid transfer',
              'amount': 1000,
              'runningBalance': 10000,
              'debit': true,
              'account': '9867452381',
              'postedDate': '2017-07-12',
              'categoryId': 1,
              'childTransactions': [
                            {}
              ],
              'originalCategoryId': 1
            }
          ],
          'currency': 'RAND',
          'availableBalance': 10000,
          'currentBalance': 10000,
          'amountDue': 1000,
          'dueDate': '2017-07-26',
          'loanAmmount': 1000,
          'outstandingAmount': 1000,
          'profileAccountState': 'Active',
          'accountLevel': 'Internal',
          'viewAvailBal': true,
          'viewStmnts': true,
          'isRestricted': true,
          'viewCurrBal': true,
          'viewCredLim': true,
          'viewMinAmtDue': true,
          'isAlternateAccount': true,
          'allowCredits': true,
          'allowDebits': true,
          'accountRules': {}
        },
        'destinationNumber': '9867452381',
        'serviceProvider': 'Telenor',
        'productCode': '330',
        'amount': 1000,
        'isVoucherAmount': true,
        'reoccurrenceItem': {
          'reoccurrenceFrequency': 'Monthly',
          'recInstrID': 1,
          'reoccurrenceOccur': 1,
          'reoccOccurrencesLeft': 1,
          'reoccurrenceToDate': '2017-08-12',
          'reoccSubFreqType': '',
          'reoccSubFreqVal': '10'
        },
        'notificationDetails': [
          {
            'notificationId': 1,
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationDefaultInd': true
          }
        ],
        'prepaidStatus': 'Active',
        'electricityAmountInArrears': 1000,
        'purchaseReferenceNumber': '6787542243',
        'unitsInBundle': '20',
        'favourite': true
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidMoneySendGet (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 1,
        'transactionID': 1,
        'capturedDate': '2017-07-12',
        'startDate': '2017-07-12',
        'nextTransDate': '2017-07-12',
        'beneficiaryID': 1,
        'bfName': {},
        'myDescription': {},
        'fromAccount': {
          'accountName': 'Mark Twain',
          'accountNumber': '787970102030',
          'isOpen': true,
          'productCode': '110',
          'productDescription': 'internal account',
          'relationshipCode': '210',
          'statusCode': '787970102030',
          'subProductCode': '',
          'containerId': 1,
          'containerName': 'bank',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'current',
          'nickname': 'mark',
          'sourceSystem': 'bankSystem',
          'interestRate': '9',
          'repaymentAmount': 1000,
          'accountHolder': 'Mark Twain',
          'actions': 'Prepaid transaction',
          'transactions': [
            {
              'transactionId': '9867519021392',
              'description': 'Prepaid transfer',
              'amount': 1000,
              'runningBalance': 10000,
              'debit': true,
              'account': '9867452381',
              'postedDate': '2017-07-12',
              'categoryId': 1,
              'childTransactions': [
                            {}
              ],
              'originalCategoryId': 1
            }
          ],
          'currency': 'RAND',
          'availableBalance': 10000,
          'currentBalance': 10000,
          'amountDue': 1000,
          'dueDate': '2017-07-26',
          'loanAmmount': 1000,
          'outstandingAmount': 1000,
          'profileAccountState': 'Active',
          'accountLevel': 'Internal',
          'viewAvailBal': true,
          'viewStmnts': true,
          'isRestricted': true,
          'viewCurrBal': true,
          'viewCredLim': true,
          'viewMinAmtDue': true,
          'isAlternateAccount': true,
          'allowCredits': true,
          'allowDebits': true,
          'accountRules': {}
        },
        'destinationNumber': '9867452381',
        'serviceProvider': 'Telenor',
        'productCode': '330',
        'amount': 1000,
        'isVoucherAmount': true,
        'reoccurrenceItem': {
          'reoccurrenceFrequency': 'Monthly',
          'recInstrID': 1,
          'reoccurrenceOccur': 1,
          'reoccOccurrencesLeft': 1,
          'reoccurrenceToDate': '2017-08-12',
          'reoccSubFreqType': '',
          'reoccSubFreqVal': '10'
        },
        'notificationDetails': [
          {
            'notificationId': 1,
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationDefaultInd': true
          }
        ],
        'prepaidStatus': 'Active',
        'electricityAmountInArrears': 1000,
        'purchaseReferenceNumber': '6787542243',
        'unitsInBundle': '20',
        'favourite': true
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidMoneySendPost (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 1,
        'transactionID': 1,
        'capturedDate': '2017-07-12',
        'startDate': '2017-07-12',
        'nextTransDate': '2017-07-12',
        'beneficiaryID': 1,
        'bfName': {},
        'myDescription': {},
        'fromAccount': {
          'accountName': 'Mark Twain',
          'accountNumber': '787970102030',
          'isOpen': true,
          'productCode': '110',
          'productDescription': 'internal account',
          'relationshipCode': '210',
          'statusCode': '787970102030',
          'subProductCode': '',
          'containerId': 1,
          'containerName': 'bank',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'current',
          'nickname': 'mark',
          'sourceSystem': 'bankSystem',
          'interestRate': '9',
          'repaymentAmount': 1000,
          'accountHolder': 'Mark Twain',
          'actions': 'Prepaid transaction',
          'transactions': [
            {
              'transactionId': '9867519021392',
              'description': 'Prepaid transfer',
              'amount': 1000,
              'runningBalance': 10000,
              'debit': true,
              'account': '9867452381',
              'postedDate': '2017-07-12',
              'categoryId': 1,
              'childTransactions': [
                            {}
              ],
              'originalCategoryId': 1
            }
          ],
          'currency': 'RAND',
          'availableBalance': 10000,
          'currentBalance': 10000,
          'amountDue': 1000,
          'dueDate': '2017-07-26',
          'loanAmmount': 1000,
          'outstandingAmount': 1000,
          'profileAccountState': 'Active',
          'accountLevel': 'Internal',
          'viewAvailBal': true,
          'viewStmnts': true,
          'isRestricted': true,
          'viewCurrBal': true,
          'viewCredLim': true,
          'viewMinAmtDue': true,
          'isAlternateAccount': true,
          'allowCredits': true,
          'allowDebits': true,
          'accountRules': {}
        },
        'destinationNumber': '9867452381',
        'serviceProvider': 'Telenor',
        'productCode': '330',
        'amount': 1000,
        'isVoucherAmount': true,
        'reoccurrenceItem': {
          'reoccurrenceFrequency': 'Monthly',
          'recInstrID': 1,
          'reoccurrenceOccur': 1,
          'reoccOccurrencesLeft': 1,
          'reoccurrenceToDate': '2017-08-12',
          'reoccSubFreqType': '',
          'reoccSubFreqVal': '10'
        },
        'notificationDetails': [
          {
            'notificationId': 1,
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationDefaultInd': true
          }
        ],
        'prepaidStatus': 'Active',
        'electricityAmountInArrears': 1000,
        'purchaseReferenceNumber': '6787542243',
        'unitsInBundle': '20',
        'favourite': true
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function prepaidMoneySendHistoryGet (req, res, next) {
  res.json([
    {
      'batchID': 1,
      'startDate': '2017-07-12',
      'nextTransDate': '2017-07-12',
      'myDescription': {},
      'destinationNumber': '9867452381',
      'isOwnNumber': true,
      'fromAccount': '787970102030',
      'amount': 1000,
      'notificationDetails': [
        {
          'notificationId': 1,
          'notificationType': 'NONE',
          'notificationAddress': 'Sample text',
          'notificationDefaultInd': true
        }
      ],
      'purchaseReferenceNumber': 'Prepaid transaction'
    }
  ])
}
