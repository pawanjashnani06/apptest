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
        'availableBalance': 9301.03,
        'currentBalance': 9350.03,
        'safeToSpendAmount': 2500,
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
        'accountNumber': '1001005570',
        'productCode': '017',
        'productDescription': 'TRANSACTOR',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'TRANS  01',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 463620.08,
        'currentBalance': 463670.08,
        'safeToSpendAmount': 100000,
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
        'safeToSpendAmount': 50000,
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
        'accountNumber': '1357071450',
        'productCode': '015',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'P&J Trust',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': -364.51,
        'currentBalance': -364.51,
        'safeToSpendAmount': 0,
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
        'availableBalance': 1066566.89,
        'currentBalance': 1066566.89,
        'safeToSpendAmount': 200000,
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
        'availableBalance': 1145276.55,
        'currentBalance': 1133276.55,
        'safeToSpendAmount': 300000,
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
        'safeToSpendAmount': 500000,
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
        'safeToSpendAmount': 100000,
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
        'safeToSpendAmount': 50000,
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
        'safeToSpendAmount': 10000,
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
        'safeToSpendAmount': 20000,
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
        'safeToSpendAmount': 15000,
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
        'availableBalance': 498129.05,
        'currentBalance': 496129.05,
        'safeToSpendAmount': 100000,
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
        'safeToSpendAmount': 0,
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
