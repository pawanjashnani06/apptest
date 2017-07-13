'use strict'

module.exports = {
  paymentaccountsGet: paymentaccountsGet,
  paymenttransactionGet: paymenttransactionGet,
  paymenttransactionPut: paymenttransactionPut,
  paymenttransactionsGet: paymenttransactionsGet,
  paymenttransactionsPost: paymenttransactionsPost
}

function paymentaccountsGet (req, res, next) {
  res.json({
    'data': {
      'accounts': [
        {
          'accountName': 'John Dow',
          'accountNumber': '342517405967',
          'isOpen': true,
          'productCode': '110',
          'productDescription': 'internal account`',
          'relationshipCode': '210',
          'statusCode': '342517405967',
          'subProductCode': '',
          'containerId': 1,
          'containerName': 'bank',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'current',
          'nickname': 'John',
          'sourceSystem': 'banksystem',
          'interestRate': '8',
          'repaymentAmount': 1,
          'accountHolder': 'John Dow',
          'actions': 'payment',
          'transactions': [
            {
              'transactionId': '1867519021392',
              'description': 'transaction',
              'amount': 10000,
              'runningBalance': 50000,
              'debit': true,
              'account': '342517405967',
              'postedDate': '2017-07-10',
              'categoryId': 1,
              'childTransactions': [
                            {}
              ],
              'originalCategoryId': 1
            }
          ],
          'currency': 'RAND',
          'availableBalance': 50000,
          'currentBalance': 50000,
          'amountDue': 1000,
          'dueDate': '2015-07-20',
          'loanAmmount': 1000,
          'outstandingAmount': 1000,
          'profileAccountState': 'Active',
          'accountLevel': 'internal',
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
          'execEngineRef': ''
        }
      ]
    }
  })
}

function paymenttransactionGet (req, res, next) {
  res.json({
    'data': {
      'batchID': 1,
      'transactionID': 1,
      'capturedDate': '2017-07-10',
      'startDate': '2017-07-10',
      'nextTransDate': '2017-07-10',
      'beneficiaryID': 1,
      'sortCode': '000110',
      'bFName': {},
      'bFType': 'INT',
      'bank': 'Green Bank',
      'myDescription': {},
      'beneficiaryDescription': {},
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
        'sourceSystem': 'banksystem',
        'interestRate': '9',
        'repaymentAmount': 1000,
        'accountHolder': 'Mark Twain',
        'actions': 'payment',
        'transactions': [
          {
            'transactionId': '9867519021392',
            'description': 'payment',
            'amount': 10000,
            'runningBalance': 50000,
            'debit': true,
            'account': '787970102030',
            'postedDate': '2017-07-10',
            'categoryId': 1,
            'childTransactions': [
                        {}
            ],
            'originalCategoryId': 1
          }
        ],
        'currency': 'RAND',
        'availableBalance': 50000,
        'currentBalance': 50000,
        'amountDue': 10000,
        'dueDate': '2017-07-20',
        'loanAmmount': 10000,
        'outstandingAmount': 10000,
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
      'toAccount': {
        'accountName': 'John Dow',
        'accountNumber': '342517405967',
        'isOpen': true,
        'productCode': '110',
        'productDescription': 'internal account',
        'relationshipCode': '210',
        'statusCode': '342517405967',
        'subProductCode': '1',
        'containerId': 1,
        'containerName': 'bank',
        'isIncluded': true,
        'isPlastic': true,
        'accountType': 'current',
        'nickname': 'John',
        'sourceSystem': 'banksystem',
        'interestRate': '8',
        'repaymentAmount': 1000,
        'accountHolder': 'John Dow',
        'actions': 'payment',
        'transactions': [
          {
            'transactionId': '1867519021392',
            'description': 'transaction',
            'amount': 10000,
            'runningBalance': 50000,
            'debit': true,
            'account': '342517405967',
            'postedDate': '2017-07-10',
            'categoryId': 1,
            'childTransactions': [
                        {}
            ],
            'originalCategoryId': 1
          }
        ],
        'currency': 'RAND',
        'availableBalance': 50000,
        'currentBalance': 50000,
        'amountDue': 10000,
        'dueDate': '2017-07-25',
        'loanAmmount': 10000,
        'outstandingAmount': 10000,
        'profileAccountState': 'Active',
        'accountLevel': 'internal',
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
      'amount': 10000,
      'reoccurrenceItem': {
        'reoccurrenceFrequency': 'Monthly',
        'recInstrID': 1,
        'reoccurrenceOccur': 1,
        'reoccOccurrencesLeft': 1,
        'reoccurrenceToDate': '2017-08-10',
        'reoccSubFreqType': '',
        'reoccSubFreqVal': '10'
      },
      'notificationDetail': {
        'notificationType': 'NONE',
        'notificationAddress': ''
      },
      'instantPayment': true,
      'saveBeneficiary': true,
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
          'execEngineRef': ''
        }
      ]
    }
  })
}

function paymenttransactionPut (req, res, next) {
  res.json({
    'data': {
      'batchID': 1,
      'transactionID': 1,
      'capturedDate': '2017-07-10',
      'startDate': '2017-07-10',
      'nextTransDate': '2017-07-10',
      'beneficiaryID': 1,
      'sortCode': '000110',
      'bFName': {},
      'bFType': 'INT',
      'bank': 'Green bank',
      'myDescription': {},
      'beneficiaryDescription': {},
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
        'sourceSystem': 'banksystem',
        'interestRate': '9',
        'repaymentAmount': 1,
        'accountHolder': 'Mark Twain',
        'actions': 'payment',
        'transactions': [
          {
            'transactionId': '9867519021392',
            'description': 'payment',
            'amount': 10000,
            'runningBalance': 50000,
            'debit': true,
            'account': '787970102030',
            'postedDate': '2017-07-10',
            'categoryId': 1,
            'childTransactions': [
                        {}
            ],
            'originalCategoryId': 1
          }
        ],
        'currency': 'RAND',
        'availableBalance': 50000,
        'currentBalance': 50000,
        'amountDue': 10000,
        'dueDate': '2017-07-20',
        'loanAmmount': 10000,
        'outstandingAmount': 10000,
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
      'toAccount': {
        'accountName': 'John Dow',
        'accountNumber': '342517405967',
        'isOpen': true,
        'productCode': '110',
        'productDescription': 'internal account',
        'relationshipCode': '210',
        'statusCode': '342517405967',
        'subProductCode': '1',
        'containerId': 1,
        'containerName': 'bank',
        'isIncluded': true,
        'isPlastic': true,
        'accountType': 'current',
        'nickname': 'John',
        'sourceSystem': 'banksystem',
        'interestRate': '8',
        'repaymentAmount': 1000,
        'accountHolder': 'John Dow',
        'actions': 'payment',
        'transactions': [
          {
            'transactionId': '1867519021392',
            'description': 'transaction',
            'amount': 10000,
            'runningBalance': 50000,
            'debit': true,
            'account': '342517405967',
            'postedDate': '2017-07-10',
            'categoryId': 1,
            'childTransactions': [
                        {}
            ],
            'originalCategoryId': 1
          }
        ],
        'currency': 'RAND',
        'availableBalance': 50000,
        'currentBalance': 50000,
        'amountDue': 10000,
        'dueDate': '2017-07-25',
        'loanAmmount': 10000,
        'outstandingAmount': 10000,
        'profileAccountState': 'Active',
        'accountLevel': 'internal',
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
      'amount': 1,
      'reoccurrenceItem': {
        'reoccurrenceFrequency': 'Monthly',
        'recInstrID': 1,
        'reoccurrenceOccur': 1,
        'reoccOccurrencesLeft': 1,
        'reoccurrenceToDate': '2017-08-10',
        'reoccSubFreqType': '',
        'reoccSubFreqVal': '10'
      },
      'notificationDetail': {
        'notificationType': 'NONE',
        'notificationAddress': ''
      },
      'instantPayment': true,
      'saveBeneficiary': true,
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
          'execEngineRef': ''
        }
      ]
    }
  })
}

function paymenttransactionsGet (req, res, next) {
  res.json({
    'data': {
      'Payments': [
        {
          'batchID': 1,
          'transactionID': 1,
          'capturedDate': '2017-07-10',
          'startDate': '2017-07-10',
          'nextTransDate': '2017-07-10',
          'beneficiaryID': 1,
          'sortCode': '000110',
          'bFName': {},
          'bFType': 'INT',
          'bank': 'Green Bank',
          'myDescription': {},
          'beneficiaryDescription': {},
          'fromAccount': {
            'accountName': 'Mark Twain',
            'accountNumber': '787970102030',
            'isOpen': true,
            'productCode': '110',
            'productDescription': 'internal account',
            'relationshipCode': '210',
            'statusCode': '787970102030',
            'subProductCode': '1',
            'containerId': 1,
            'containerName': 'bank',
            'isIncluded': true,
            'isPlastic': true,
            'accountType': 'current',
            'nickname': 'Mark',
            'sourceSystem': 'bankSystem',
            'interestRate': '9',
            'repaymentAmount': 1000,
            'accountHolder': 'Mark Twain',
            'actions': 'payment',
            'transactions': [
              {
                'transactionId': '9867519021392',
                'description': 'payment',
                'amount': 10000,
                'runningBalance': 20000,
                'debit': true,
                'account': '787970102030',
                'postedDate': '2017-07-10',
                'categoryId': 1,
                'childTransactions': [
                                {}
                ],
                'originalCategoryId': 1
              }
            ],
            'currency': 'RAND',
            'availableBalance': 20000,
            'currentBalance': 20000,
            'amountDue': 2000,
            'dueDate': '2017-07-20',
            'loanAmmount': 2000,
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
          'toAccount': {
            'accountName': 'John Dow',
            'accountNumber': '342517405967',
            'isOpen': true,
            'productCode': '110',
            'productDescription': 'internal account',
            'relationshipCode': '210',
            'statusCode': '342517405967',
            'subProductCode': '1',
            'containerId': 1,
            'containerName': 'bank',
            'isIncluded': true,
            'isPlastic': true,
            'accountType': 'current',
            'nickname': 'John',
            'sourceSystem': 'BankSystem',
            'interestRate': '8',
            'repaymentAmount': 1000,
            'accountHolder': 'John Dow',
            'actions': 'payment',
            'transactions': [
              {
                'transactionId': '1867519021392',
                'description': 'transaction',
                'amount': 10000,
                'runningBalance': 40000,
                'debit': true,
                'account': '342517405967',
                'postedDate': '2017-07-10',
                'categoryId': 1,
                'childTransactions': [
                                {}
                ],
                'originalCategoryId': 1
              }
            ],
            'currency': 'RAND',
            'availableBalance': 40000,
            'currentBalance': 40000,
            'amountDue': 10000,
            'dueDate': '2017-07-25',
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
          'amount': 10000,
          'reoccurrenceItem': {
            'reoccurrenceFrequency': 'Monthly',
            'recInstrID': 1,
            'reoccurrenceOccur': 1,
            'reoccOccurrencesLeft': 1,
            'reoccurrenceToDate': '2017-08-10',
            'reoccSubFreqType': '',
            'reoccSubFreqVal': '10'
          },
          'notificationDetail': {
            'notificationType': 'NONE',
            'notificationAddress': ''
          },
          'instantPayment': true,
          'saveBeneficiary': true,
          'favourite': true
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
          'execEngineRef': 'Sample text'
        }
      ]
    }
  })
}

function paymenttransactionsPost (req, res, next) {
  res.json([{
    'data': {
      'Payments': [
        {
          'batchID': 1,
          'transactionID': 1,
          'capturedDate': '2017-07-10',
          'startDate': '2017-07-10',
          'nextTransDate': '2017-07-10',
          'beneficiaryID': 1,
          'sortCode': '000110',
          'bFName': {},
          'bFType': 'INT',
          'bank': 'Green Bank',
          'myDescription': {},
          'beneficiaryDescription': {},
          'fromAccount': {
            'accountName': 'Mark Twain',
            'accountNumber': '787970102030',
            'isOpen': true,
            'productCode': '110',
            'productDescription': 'internal account',
            'relationshipCode': '210',
            'statusCode': '787970102030',
            'subProductCode': '1',
            'containerId': 1,
            'containerName': 'bank',
            'isIncluded': true,
            'isPlastic': true,
            'accountType': 'current',
            'nickname': 'Mark',
            'sourceSystem': 'bankSystem',
            'interestRate': '9',
            'repaymentAmount': 1000,
            'accountHolder': 'Mark Twain',
            'actions': 'payment',
            'transactions': [
              {
                'transactionId': '9867519021392',
                'description': 'payment',
                'amount': 10000,
                'runningBalance': 20000,
                'debit': true,
                'account': '787970102030',
                'postedDate': '2017-07-10',
                'categoryId': 1,
                'childTransactions': [
                                {}
                ],
                'originalCategoryId': 1
              }
            ],
            'currency': 'RAND',
            'availableBalance': 20000,
            'currentBalance': 20000,
            'amountDue': 2000,
            'dueDate': '2017-07-20',
            'loanAmmount': 2000,
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
          'toAccount': {
            'accountName': 'John Dow',
            'accountNumber': '342517405967',
            'isOpen': true,
            'productCode': '110',
            'productDescription': 'internal account',
            'relationshipCode': '210',
            'statusCode': '342517405967',
            'subProductCode': '1',
            'containerId': 1,
            'containerName': 'bank',
            'isIncluded': true,
            'isPlastic': true,
            'accountType': 'current',
            'nickname': 'John',
            'sourceSystem': 'BankSystem',
            'interestRate': '8',
            'repaymentAmount': 1000,
            'accountHolder': 'John Dow',
            'actions': 'payment',
            'transactions': [
              {
                'transactionId': '1867519021392',
                'description': 'transaction',
                'amount': 10000,
                'runningBalance': 40000,
                'debit': true,
                'account': '342517405967',
                'postedDate': '2017-07-10',
                'categoryId': 1,
                'childTransactions': [
                                {}
                ],
                'originalCategoryId': 1
              }
            ],
            'currency': 'RAND',
            'availableBalance': 40000,
            'currentBalance': 40000,
            'amountDue': 10000,
            'dueDate': '2017-07-25',
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
          'amount': 10000,
          'reoccurrenceItem': {
            'reoccurrenceFrequency': 'Monthly',
            'recInstrID': 1,
            'reoccurrenceOccur': 1,
            'reoccOccurrencesLeft': 1,
            'reoccurrenceToDate': '2017-08-10',
            'reoccSubFreqType': '',
            'reoccSubFreqVal': '10'
          },
          'notificationDetail': {
            'notificationType': 'NONE',
            'notificationAddress': ''
          },
          'instantPayment': true,
          'saveBeneficiary': true,
          'favourite': true
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
          'execEngineRef': 'Sample text'
        }
      ]
    }
  }])
}
