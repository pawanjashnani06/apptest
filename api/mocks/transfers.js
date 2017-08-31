'use strict'

module.exports = {
  transfersAccountsGet: transfersAccountsGet,
  transfersTransactionGet: transfersTransactionGet,
  transfersTransactionPut: transfersTransactionPut,
  transfersTransactionsGet: transfersTransactionsGet,
  transfersTransactionsPost: transfersTransactionsPost,
  accountsTransferGetLatest: accountsTransferGetLatest,
  transfersTransactionsPostLatest: transfersTransactionsPostLatest,
  transfersTransactionsGetLatest: transfersTransactionsGetLatest
}

function transfersAccountsGet (req, res, next) {
  res.json({
    'data': {
      'accounts': [
        {
          'accountName': 'John Dow',
          'accountNumber': '342517405967',
          'isOpen': true,
          'productCode': '110',
          'productDescription': 'internal account',
          'relationshipCode': '210',
          'statusCode': '342517405967',
          'subProductCode': '',
          'containerId': 1,
          'containerName': 'Savvy Plus',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'Savvy Plus',
          'nickname': 'John',
          'sourceSystem': 'banksystem',
          'interestRate': '8',
          'repaymentAmount': 1,
          'accountHolder': 'John Dow',
          'actions': 'transfer',
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
          'dueDate': '2017-08-15',
          'loanAmmount': 1000,
          'outstandingAmount': 1000,
          'safeToSpendAmount': 2500,
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
        {
          'accountName': 'John Dow',
          'accountNumber': '112581405091',
          'isOpen': true,
          'productCode': '220',
          'productDescription': 'internal account',
          'relationshipCode': '410',
          'statusCode': '112581405091',
          'subProductCode': '',
          'containerId': 2,
          'containerName': 'credit card',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'credit card',
          'nickname': 'John',
          'sourceSystem': 'banksystem',
          'interestRate': '8',
          'repaymentAmount': 1,
          'accountHolder': 'John Dow',
          'actions': 'transfer',
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
          'availableBalance': 75000,
          'currentBalance': 75000,
          'amountDue': 2500,
          'dueDate': '2017-08-10',
          'loanAmmount': 2500,
          'outstandingAmount': 2600,
          'safeToSpendAmount': 3000,
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
        {
          'accountName': 'John Dow',
          'accountNumber': '992391018823',
          'isOpen': true,
          'productCode': '510',
          'productDescription': 'internal account',
          'relationshipCode': '810',
          'statusCode': '992391018823',
          'subProductCode': '',
          'containerId': 3,
          'containerName': 'Savvy Bundle',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'Savvy Bundle',
          'nickname': 'John',
          'sourceSystem': 'banksystem',
          'interestRate': '8',
          'repaymentAmount': 2000,
          'accountHolder': 'John Dow',
          'actions': 'transfer',
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
          'availableBalance': 95000,
          'currentBalance': 95000,
          'amountDue': 5000,
          'dueDate': '2017-08-04',
          'outstandingAmount': 7000,
          'loanAmmount': 10000,
          'safeToSpendAmount': 2500,
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
        {
          'accountName': 'John Dow',
          'accountNumber': '720166109011',
          'isOpen': true,
          'productCode': '710',
          'productDescription': 'external account',
          'relationshipCode': '910',
          'statusCode': '720166109011',
          'subProductCode': '',
          'containerId': 4,
          'containerName': 'American Express Card',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'American Express Card',
          'nickname': 'John',
          'sourceSystem': 'banksystem',
          'interestRate': '8',
          'repaymentAmount': 3000,
          'accountHolder': 'John Dow',
          'actions': 'transfer',
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
          'availableBalance': 150000,
          'currentBalance': 150000,
          'amountDue': 15000,
          'dueDate': '2017-08-11',
          'outstandingAmount': 1000,
          'loanAmmount': 10000,
          'safeToSpendAmount': 50000,
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
        },
        {
          'accountName': 'John Dow',
          'accountNumber': '653801879023',
          'isOpen': true,
          'productCode': '910',
          'productDescription': 'internal account',
          'relationshipCode': '110',
          'statusCode': '653801879023',
          'subProductCode': '',
          'containerId': 5,
          'containerName': 'Private Wealth Management',
          'isIncluded': true,
          'isPlastic': true,
          'accountType': 'Private Wealth Management',
          'nickname': 'John',
          'sourceSystem': 'banksystem',
          'interestRate': '8',
          'repaymentAmount': 5000,
          'accountHolder': 'John Dow',
          'actions': 'transfer',
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
          'availableBalance': 15000,
          'currentBalance': 15000,
          'amountDue': 10000,
          'dueDate': '2017-08-08',
          'outstandingAmount': 10000,
          'loanAmmount': 11000,
          'safeToSpendAmount': 18000,
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

function transfersTransactionGet (req, res, next) {
  res.json({
    'data': {
      'batchID': 1,
      'transactionID': 1,
      'capturedDate': '2017-07-11',
      'startDate': '2017-07-11',
      'nextTransDate': '2017-07-11',
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
        'actions': 'transfers',
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
        'actions': 'transfers',
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

function transfersTransactionPut (req, res, next) {
  res.json({
    'data': {
      'batchID': 1,
      'transactionID': 1,
      'capturedDate': '2017-07-11',
      'startDate': '2017-07-11',
      'nextTransDate': '2017-07-11',
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
        'actions': 'transfers',
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
        'actions': 'transfers',
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
      'favourite': true
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

function transfersTransactionsGet (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 1,
        'transactionID': 1,
        'capturedDate': '2017-07-11',
        'startDate': '2017-07-11',
        'nextTransDate': '2017-07-11',
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
          'actions': 'transfers',
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
          'actions': 'transfers',
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
          'execEngineRef': ''
        }
      ]
    }
  })
}

function transfersTransactionsPost (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 1,
        'transactionID': 1,
        'capturedDate': '2017-07-11',
        'startDate': '2017-07-11',
        'nextTransDate': '2017-07-11',
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
          'actions': 'transfers',
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
          'actions': 'transfers',
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
          'execEngineRef': ''
        }
      ]
    }
  })
}

function accountsTransferGetLatest (req, res, next) {
  res.json({
    'data': [
      {
        'accountNumber': '1001004345',
        'productCode': '017',
        'productDescription': 'TRANSACTOR',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'TRANS 02',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 9193.03,
        'currentBalance': 9242.03,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': false,
          'onceOffTransferTo': false,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '1001005570',
        'productCode': '017',
        'productDescription': 'TRANSACTOR',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'TRANS  01',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 471756.08,
        'currentBalance': 471806.08,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': false,
          'futureTransferTo': false,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '1004800738',
        'productCode': '005',
        'productDescription': 'NC',
        'isPlastic': false,
        'accountType': 'NC',
        'nickname': 'NEDCR 03',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 1214252.16,
        'currentBalance': 1214252.16,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': false,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': false,
          'recurringPayFrom': false,
          'recurringBDFPayFrom': false,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': false,
          'futureTransferTo': false,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': false,
          'futurePrepaidFrom': false,
          'recurringPrepaidFrom': false,
          'onceOffElectricityFrom': false,
          'onceOffLottoFrom': false,
          'onceOffiMaliFrom': false
        }
      },
      {
        'accountNumber': '1012110826',
        'productCode': '005',
        'productDescription': 'NC',
        'isPlastic': false,
        'accountType': 'NC',
        'nickname': 'NEDCR 02',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 1503346.46,
        'currentBalance': 1503346.46,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': false,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': false,
          'recurringPayFrom': false,
          'recurringBDFPayFrom': false,
          'onceOffTransferFrom': false,
          'onceOffTransferTo': false,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': false,
          'futurePrepaidFrom': false,
          'recurringPrepaidFrom': false,
          'onceOffElectricityFrom': false,
          'onceOffLottoFrom': false,
          'onceOffiMaliFrom': false
        }
      },
      {
        'accountNumber': '1014003210',
        'productCode': '005',
        'productDescription': 'NC',
        'isPlastic': false,
        'accountType': 'NC',
        'nickname': 'NEDCR 01',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 569712.63,
        'currentBalance': 569712.63,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': false,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': false,
          'recurringPayFrom': false,
          'recurringBDFPayFrom': false,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': false,
          'futureTransferTo': false,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': false,
          'futurePrepaidFrom': false,
          'recurringPrepaidFrom': false,
          'onceOffElectricityFrom': false,
          'onceOffLottoFrom': false,
          'onceOffiMaliFrom': false
        }
      },
      {
        'accountNumber': '1128760746',
        'productCode': '022',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'JAKES CHEQ',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 168036.94,
        'currentBalance': 168036.94,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': false,
          'recurringTransferTo': false,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '1357071450',
        'productCode': '015',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'P&J Trust',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 5.1,
        'currentBalance': 5.1,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '1713237059',
        'productCode': '001',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'POTCH AQUA',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 1066572.89,
        'currentBalance': 1066572.89,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '1713241811',
        'productCode': '001',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'GOMAC',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 1155319.87,
        'currentBalance': 1143319.87,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '1713267128',
        'productCode': '015',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'GOMAC',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 1229189.65,
        'currentBalance': 1229189.65,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '1713277581',
        'productCode': '001',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'CURRENT',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 996725.53,
        'currentBalance': 993225.53,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': false,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '1940062772',
        'productCode': '005',
        'productDescription': 'NC',
        'isPlastic': false,
        'accountType': 'NC',
        'nickname': 'NEDCREDIT',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 143573.3,
        'currentBalance': 143573.3,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': false,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': false,
          'recurringPayFrom': false,
          'recurringBDFPayFrom': false,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': false,
          'futurePrepaidFrom': false,
          'recurringPrepaidFrom': false,
          'onceOffElectricityFrom': false,
          'onceOffLottoFrom': false,
          'onceOffiMaliFrom': false
        }
      },
      {
        'accountNumber': '2001008309',
        'productCode': '16',
        'productDescription': 'SA',
        'isPlastic': false,
        'accountType': 'SA',
        'nickname': 'SA 01',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 990866.61,
        'currentBalance': 990896.61,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '2713385954',
        'productCode': '16',
        'productDescription': 'SA',
        'isPlastic': false,
        'accountType': 'SA',
        'nickname': 'GOMAC',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 20676.9,
        'currentBalance': 20706.9,
        'profileAccountState': 'ACT',
        'accountLevel': 'U0',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': true,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': true,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': true
        }
      },
      {
        'accountNumber': '377093000052084',
        'productCode': 'AMX',
        'productDescription': 'AMEX',
        'isPlastic': true,
        'accountType': 'CC',
        'nickname': 'CRD 02',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 0,
        'currentBalance': 275516.49,
        'profileAccountState': 'ACT',
        'accountLevel': 'PCD',
        'viewAvailBal': false,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': false,
        'viewMinAmtDue': true,
        'isAlternateAccount': false,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': false,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': false
        }
      },
      {
        'accountNumber': '5179900000237623',
        'productCode': 'MAS',
        'productDescription': 'MASTER',
        'isPlastic': true,
        'accountType': 'CC',
        'nickname': 'MASTER 1',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 42306.48,
        'currentBalance': 40306.48,
        'profileAccountState': 'ACT',
        'accountLevel': 'PCD',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': false,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': false,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': false
        }
      },
      {
        'accountNumber': '5179900000988266',
        'productCode': 'MAS',
        'productDescription': 'MASTER',
        'isPlastic': true,
        'accountType': 'CC',
        'nickname': 'MASTER',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 497428.78,
        'currentBalance': 495428.78,
        'profileAccountState': 'ACT',
        'accountLevel': 'PCD',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': false,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': false,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': false
        }
      },
      {
        'accountNumber': '5299850000003886',
        'productCode': 'MAS',
        'productDescription': 'MASTER',
        'isPlastic': true,
        'accountType': 'CC',
        'nickname': 'CRD 03',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 0,
        'currentBalance': 0,
        'profileAccountState': 'ACT',
        'accountLevel': 'PCD',
        'viewAvailBal': true,
        'viewStmnts': true,
        'isRestricted': false,
        'viewCurrBal': true,
        'viewCredLim': true,
        'viewMinAmtDue': true,
        'isAlternateAccount': false,
        'allowCredits': true,
        'allowDebits': true,
        'accountRules': {
          'instantPayFrom': false,
          'onceOffPayFrom': true,
          'futureOnceOffPayFrom': true,
          'recurringPayFrom': true,
          'recurringBDFPayFrom': true,
          'onceOffTransferFrom': true,
          'onceOffTransferTo': true,
          'futureTransferFrom': true,
          'futureTransferTo': true,
          'recurringTransferFrom': true,
          'recurringTransferTo': true,
          'onceOffPrepaidFrom': true,
          'futurePrepaidFrom': true,
          'recurringPrepaidFrom': true,
          'onceOffElectricityFrom': true,
          'onceOffLottoFrom': true,
          'onceOffiMaliFrom': false
        }
      }
    ],
    'metadata': {
      'resultData': []
    }
  })
}

function transfersTransactionsPostLatest (req, res, next) {
  res.json({
    'data': [
      {
        'startDate': '2017-08-10',
        'nextTransDate': '2017-08-10',
        'fromAccount': {
          'accountNumber': '1001005570',
          'accountType': 'CA',
          'accountName': 'Mr. Oberoi'
        },
        'toAccount': {
          'accountNumber': '1001004345',
          'accountType': 'CA',
          'accountName': 'Mr. Oberoi'
        },
        'amount': 1,
        'favourite': true
      }
    ],
    'metadata': {
      'resultData': [
        {
          'execEngineRef': '489044960821',
          'transactionID': '28959863',
          'batchID': '2056693',
          'resultDetail': [
            {
              'operationReference': 'TRANSACTION',
              'result': 'SOK',
              'status': 'SUCCESS'
            }
          ]
        }
      ]
    }
  })
}

function transfersTransactionsGetLatest (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 1879284,
        'transactionID': 28222325,
        'capturedDate': '2016-08-18T00:00:00',
        'startDate': '2016-08-18T00:00:00',
        'nextTransDate': '2017-08-18T00:00:00',
        'fromAccount': {
          'accountNumber': '2955006092'
        },
        'toAccount': {
          'accountNumber': '100995-9941'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170818/NEDBANK/000000489025474788'
      },
      {
        'batchID': 1879283,
        'transactionID': 28222324,
        'capturedDate': '2016-08-18T00:00:00',
        'startDate': '2016-08-18T00:00:00',
        'nextTransDate': '2017-08-18T00:00:00',
        'fromAccount': {
          'accountNumber': '2955006092'
        },
        'toAccount': {
          'accountNumber': '100995-9941'
        },
        'amount': 120,
        'purchaseReferenceNumber': '20170818/NEDBANK/000000489025474787'
      },
      {
        'batchID': 2050073,
        'transactionID': 28942815,
        'capturedDate': '2017-07-28T00:00:00',
        'startDate': '2017-07-25T00:00:00',
        'nextTransDate': '2017-07-28T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 40,
        'purchaseReferenceNumber': '20170728/NEDBANK/000000489042673194'
      },
      {
        'batchID': 2050320,
        'transactionID': 28943314,
        'capturedDate': '2017-07-28T00:00:00',
        'startDate': '2017-07-28T00:00:00',
        'nextTransDate': '2017-07-28T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170728/NEDBANK/000000489042678678'
      },
      {
        'batchID': 2050307,
        'transactionID': 28943202,
        'capturedDate': '2017-07-28T00:00:00',
        'startDate': '2017-07-28T00:00:00',
        'nextTransDate': '2017-07-28T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170728/NEDBANK/000000489042678668'
      },
      {
        'batchID': 2050261,
        'transactionID': 28943092,
        'capturedDate': '2017-07-28T00:00:00',
        'startDate': '2017-07-28T00:00:00',
        'nextTransDate': '2017-07-28T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170728/NEDBANK/000000489042678380'
      },
      {
        'batchID': 2050206,
        'transactionID': 28943022,
        'capturedDate': '2017-07-28T00:00:00',
        'startDate': '2017-07-28T00:00:00',
        'nextTransDate': '2017-07-28T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170728/NEDBANK/000000489042678289'
      },
      {
        'batchID': 2050090,
        'transactionID': 28942861,
        'capturedDate': '2017-07-28T00:00:00',
        'startDate': '2017-07-28T00:00:00',
        'nextTransDate': '2017-07-28T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170728/NEDBANK/000000489042677039'
      },
      {
        'batchID': 2050087,
        'transactionID': 28942829,
        'capturedDate': '2017-07-28T00:00:00',
        'startDate': '2017-07-28T00:00:00',
        'nextTransDate': '2017-07-28T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170728/NEDBANK/000000489042677037'
      },
      {
        'batchID': 2050530,
        'transactionID': 28943539,
        'capturedDate': '2017-07-29T00:00:00',
        'startDate': '2017-07-29T00:00:00',
        'nextTransDate': '2017-07-29T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 200,
        'purchaseReferenceNumber': '20170729/NEDBANK/000000489042679689'
      },
      {
        'batchID': 2050704,
        'transactionID': 28943818,
        'capturedDate': '2017-07-31T00:00:00',
        'startDate': '2017-07-31T00:00:00',
        'nextTransDate': '2017-07-31T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009006967'
        },
        'amount': 20,
        'purchaseReferenceNumber': '20170731/NEDBANK/000000489042723960'
      },
      {
        'batchID': 2050688,
        'transactionID': 28943802,
        'capturedDate': '2017-07-31T00:00:00',
        'startDate': '2017-07-31T00:00:00',
        'nextTransDate': '2017-07-31T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170731/NEDBANK/000000489042723943'
      },
      {
        'batchID': 2050675,
        'transactionID': 28943764,
        'capturedDate': '2017-07-31T00:00:00',
        'startDate': '2017-07-31T00:00:00',
        'nextTransDate': '2017-07-31T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170731/NEDBANK/000000489042722585'
      },
      {
        'batchID': 2050980,
        'transactionID': 28944185,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009035940'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042763358'
      },
      {
        'batchID': 2050896,
        'transactionID': 28944098,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042762873'
      },
      {
        'batchID': 2050862,
        'transactionID': 28944063,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042762830'
      },
      {
        'batchID': 2050857,
        'transactionID': 28944058,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '1009087231'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042761684'
      },
      {
        'batchID': 2050829,
        'transactionID': 28944029,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'fromAccount': {
          'accountNumber': '1061400077'
        },
        'toAccount': {
          'accountNumber': '1631024043'
        },
        'amount': 50,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042761577'
      },
      {
        'batchID': 2050828,
        'transactionID': 28944028,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'fromAccount': {
          'accountNumber': '1061400077'
        },
        'toAccount': {
          'accountNumber': '1631024043'
        },
        'amount': 50,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042761578'
      },
      {
        'batchID': 2050827,
        'transactionID': 28944027,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'fromAccount': {
          'accountNumber': '037955500520-0001'
        },
        'toAccount': {
          'accountNumber': '1061400077'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042761579'
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 20,
      'pageLimit': 3,
      'resultData': []
    }
  })
}
