'use strict'

module.exports = {
  paymentaccountsGet: paymentaccountsGet,
  paymentaccountsGetLatest: paymentaccountsGetLatest,
  paymenttransactionGet: paymenttransactionGet,
  paymenttransactionPut: paymenttransactionPut,
  paymenttransactionsGet: paymenttransactionsGet,
  paymenttransactionsGetLatest: paymenttransactionsGetLatest,
  paymenttransactionsPost: paymenttransactionsPost,
  paymenttransactionsPostLatest: paymenttransactionsPostLatest,
  postPaymentTransactionV2: postPaymentTransactionV2
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

function paymentaccountsGetLatest (req, res, next) {
  res.json({
    'data': [
      {
        'itemAccountId': '1',
        'accountNumber': '1001004345',
        'productCode': '017',
        'productDescription': 'TRANSACTOR',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'TRANS 02',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 42253886219.1,
        'currentBalance': 42253886268.1,
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
        'itemAccountId': '3',
        'accountNumber': '1001005570',
        'productCode': '017',
        'productDescription': 'TRANSACTOR',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'TRANS  01',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 95440604309.35,
        'currentBalance': 95440604359.35,
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
        'itemAccountId': '18',
        'accountNumber': '1004800738',
        'productCode': '005',
        'productDescription': 'NC',
        'isPlastic': false,
        'accountType': 'NC',
        'nickname': 'NEDCR 03',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 8451076477.13,
        'currentBalance': 8451076477.13,
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
        'itemAccountId': '19',
        'accountNumber': '1012110826',
        'productCode': '005',
        'productDescription': 'NC',
        'isPlastic': false,
        'accountType': 'NC',
        'nickname': 'NEDCR 02',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 16900989939.93,
        'currentBalance': 16900989939.93,
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
        'itemAccountId': '20',
        'accountNumber': '1014003210',
        'productCode': '005',
        'productDescription': 'NC',
        'isPlastic': false,
        'accountType': 'NC',
        'nickname': 'NEDCR 01',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 16905833143.15,
        'currentBalance': 16905833143.15,
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
        'itemAccountId': '4',
        'accountNumber': '1128760746',
        'productCode': '022',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'JAKES CHEQ',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 164297.77,
        'currentBalance': 164297.77,
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
        'itemAccountId': '6',
        'accountNumber': '1357071450',
        'productCode': '015',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'P&J Trust',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 16899828741.15,
        'currentBalance': 16899828741.15,
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
        'itemAccountId': '7',
        'accountNumber': '1713237059',
        'productCode': '001',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'POTCH AQUA',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 8450819717.69,
        'currentBalance': 8450819717.69,
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
        'itemAccountId': '8',
        'accountNumber': '1713241811',
        'productCode': '001',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'GOMAC',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 1311119.38,
        'currentBalance': 1299119.38,
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
        'itemAccountId': '9',
        'accountNumber': '1713267128',
        'productCode': '015',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'GOMAC',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 1230325.81,
        'currentBalance': 1230325.81,
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
        'itemAccountId': '10',
        'accountNumber': '1713277581',
        'productCode': '001',
        'productDescription': 'CA',
        'isPlastic': false,
        'accountType': 'CA',
        'nickname': 'CURRENT',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 984287.85,
        'currentBalance': 980787.85,
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
        'itemAccountId': '21',
        'accountNumber': '1940062772',
        'productCode': '005',
        'productDescription': 'NC',
        'isPlastic': false,
        'accountType': 'NC',
        'nickname': 'NEDCREDIT',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 144174.3,
        'currentBalance': 144174.3,
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
        'itemAccountId': '12',
        'accountNumber': '2001008309',
        'productCode': '16',
        'productDescription': 'SA',
        'isPlastic': false,
        'accountType': 'SA',
        'nickname': 'SA 01',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 984478.79,
        'currentBalance': 984508.79,
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
        'itemAccountId': '13',
        'accountNumber': '2713385954',
        'productCode': '16',
        'productDescription': 'SA',
        'isPlastic': false,
        'accountType': 'SA',
        'nickname': 'GOMAC',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 0,
        'currentBalance': 16.18,
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
        'itemAccountId': '15',
        'accountNumber': '5179900000000369',
        'productCode': 'MAS',
        'productDescription': 'MASTER',
        'isPlastic': true,
        'accountType': 'CC',
        'nickname': 'MASTER',
        'sourceSystem': 'Profile System',
        'currency': 'ZAR',
        'availableBalance': 499268.07,
        'currentBalance': 497268.07,
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

function paymenttransactionGet (req, res, next) {
  res.json({
    'data': {
      'batchID': 1,
      'transactionID': 1,
      'capturedDate': '2017-07-10',
      'startDate': '2017-07-10',
      'nextTransDate': '2017-07-10',
      'beneficiaryID': 787970102030,
      'sortCode': '000110',
      'bFName': 'Mark Twain',
      'bFType': 'INT',
      'bank': 'Green Bank',
      'myDescription': 'Debit money for Mark Twain.',
      'beneficiaryDescription': 'Credited money in Mark Twain account.',
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
      'beneficiaryID': 787970102030,
      'sortCode': '000110',
      'bFName': 'Mark Twain',
      'bFType': 'INT',
      'bank': 'Green bank',
      'myDescription': 'Debit money for Mark Twain.',
      'beneficiaryDescription': 'Credited money in Mark Twain account.',
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
          'beneficiaryID': 787970102030,
          'sortCode': '000110',
          'bFName': 'Mark Twain',
          'bFType': 'INT',
          'bank': 'Green Bank',
          'myDescription': 'Debit money for Mark Twain.',
          'beneficiaryDescription': 'Credited money in Mark Twain account.',
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
  res.json({
    'data': {
      'Payments': [
        {
          'batchID': 1,
          'transactionID': 1,
          'capturedDate': '2017-07-10',
          'startDate': '2017-07-10',
          'nextTransDate': '2017-07-10',
          'beneficiaryID': 787970102030,
          'sortCode': '000110',
          'bFName': 'Mark Twain',
          'bFType': 'INT',
          'bank': 'Green Bank',
          'myDescription': 'Debit money for Mark Twain.',
          'beneficiaryDescription': 'Credited money in Mark Twain account.',
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
            'notificationType': 'SMS',
            'notificationAddress': '8910302895'
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

function paymenttransactionsGetLatest (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 2042706,
        'transactionID': 28935034,
        'capturedDate': '2017-07-13T00:00:00',
        'startDate': '2017-07-13T00:00:00',
        'nextTransDate': '2017-07-13T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '250655',
        'bFName': '20Jan17',
        'myDescription': 'WesHein',
        'beneficiaryDescription': 'WESHein',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '62003019503',
          'accountType': 'CA'
        },
        'amount': 55.6,
        'instantPayment': true,
        'purchaseReferenceNumber': '20170713/NEDBANK/ '
      },
      {
        'batchID': 2042701,
        'transactionID': 28935029,
        'capturedDate': '2017-07-13T00:00:00',
        'startDate': '2017-07-13T00:00:00',
        'nextTransDate': '2017-07-13T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '250655',
        'bFName': '20Jan17',
        'myDescription': 'hgsf',
        'beneficiaryDescription': 'khydfk',
        'fromAccount': {
          'accountNumber': '1012108910'
        },
        'toAccount': {
          'accountNumber': '62003019503',
          'accountType': 'CA'
        },
        'amount': 55.6,
        'instantPayment': true,
        'purchaseReferenceNumber': '20170713/NEDBANK/ '
      },
      {
        'batchID': 2050650,
        'transactionID': 28943731,
        'capturedDate': '2017-07-31T00:00:00',
        'startDate': '2017-07-31T00:00:00',
        'nextTransDate': '2017-07-31T00:00:00',
        'beneficiaryID': 54,
        'sortCode': '632005',
        'bFName': 'ABSA_Benef',
        'myDescription': 'onceoff_pay_ext',
        'beneficiaryDescription': 'onceoff_pay_ext',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '4047050967',
          'accountType': 'CA'
        },
        'amount': 50,
        'instantPayment': true,
        'purchaseReferenceNumber': '20170731/NEDBANK/ '
      },
      {
        'batchID': 2050687,
        'transactionID': 28943793,
        'capturedDate': '2017-07-31T00:00:00',
        'startDate': '2017-07-31T00:00:00',
        'nextTransDate': '2017-07-31T00:00:00',
        'beneficiaryID': 54,
        'sortCode': '632005',
        'bFName': 'ABSA_Benef',
        'myDescription': 'onceoff_pay_ext',
        'beneficiaryDescription': 'onceoff_pay_ext',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '4047050967',
          'accountType': 'CA'
        },
        'amount': 50,
        'purchaseReferenceNumber': '20170731/NEDBANK/000000489042723942'
      },
      {
        'batchID': 2050674,
        'transactionID': 28943763,
        'capturedDate': '2017-07-31T00:00:00',
        'startDate': '2017-07-31T00:00:00',
        'nextTransDate': '2017-07-31T00:00:00',
        'beneficiaryID': 54,
        'sortCode': '632005',
        'bFName': 'ABSA_Benef',
        'myDescription': 'onceoff_pay_ext',
        'beneficiaryDescription': 'onceoff_pay_ext',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '4047050967',
          'accountType': 'CA'
        },
        'amount': 50,
        'purchaseReferenceNumber': '20170731/NEDBANK/000000489042722584'
      },
      {
        'batchID': 2051035,
        'transactionID': 28944241,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'asdf',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007326'
      },
      {
        'batchID': 2051034,
        'transactionID': 28944240,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'asdf',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007325'
      },
      {
        'batchID': 2051033,
        'transactionID': 28944239,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'wetwrt',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007324'
      },
      {
        'batchID': 2051032,
        'transactionID': 28944238,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'wert',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007323'
      },
      {
        'batchID': 2051031,
        'transactionID': 28944237,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'wert',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007322'
      },
      {
        'batchID': 2051030,
        'transactionID': 28944236,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'asfd',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007320'
      },
      {
        'batchID': 2051029,
        'transactionID': 28944235,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'sdfg',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007319'
      },
      {
        'batchID': 2051028,
        'transactionID': 28944234,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'sdf',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007318'
      },
      {
        'batchID': 2051027,
        'transactionID': 28944233,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 5221001013983879',
        'beneficiaryDescription': 'asdf',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '5221001013983879',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043007317'
      },
      {
        'batchID': 2051026,
        'transactionID': 28944232,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '000000',
        'bFName': 'UNKNOWN',
        'myDescription': 'Payment to 4314620000216422',
        'beneficiaryDescription': 'CC',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '4314620000216422',
          'accountType': 'CC'
        },
        'amount': 100,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489043007316'
      },
      {
        'batchID': 2051025,
        'transactionID': 28944231,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 0,
        'sortCode': '250655',
        'bFName': '20Jan17',
        'myDescription': 'WesHein',
        'beneficiaryDescription': 'WESHein',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '62003019503',
          'accountType': 'CA'
        },
        'amount': 55.6,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489042763533'
      },
      {
        'batchID': 2050895,
        'transactionID': 28944097,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'beneficiaryID': 54,
        'sortCode': '632005',
        'bFName': 'ABSA_Benef',
        'myDescription': 'onceoff_pay_ext',
        'beneficiaryDescription': 'onceoff_pay_ext',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '4047050967',
          'accountType': 'CA'
        },
        'amount': 50,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042762871'
      },
      {
        'batchID': 2050861,
        'transactionID': 28944062,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'beneficiaryID': 54,
        'sortCode': '632005',
        'bFName': 'ABSA_Benef',
        'myDescription': 'onceoff_pay_ext',
        'beneficiaryDescription': 'onceoff_pay_ext',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '4047050967',
          'accountType': 'CA'
        },
        'amount': 50,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042762827'
      },
      {
        'batchID': 2050856,
        'transactionID': 28944057,
        'capturedDate': '2017-08-01T00:00:00',
        'startDate': '2017-08-01T00:00:00',
        'nextTransDate': '2017-08-01T00:00:00',
        'beneficiaryID': 54,
        'sortCode': '632005',
        'bFName': 'ABSA_Benef',
        'myDescription': 'onceoff_pay_ext',
        'beneficiaryDescription': 'onceoff_pay_ext',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '4047050967',
          'accountType': 'CA'
        },
        'amount': 50,
        'purchaseReferenceNumber': '20170801/NEDBANK/000000489042761683'
      },
      {
        'batchID': 2051174,
        'transactionID': 28944707,
        'capturedDate': '2017-08-02T00:00:00',
        'startDate': '2017-08-02T00:00:00',
        'nextTransDate': '2017-08-02T00:00:00',
        'beneficiaryID': 54,
        'sortCode': '632005',
        'bFName': 'ABSA_Benef',
        'myDescription': 'onceoff_pay_ext',
        'beneficiaryDescription': 'onceoff_pay_ext',
        'fromAccount': {
          'accountNumber': '1009000675'
        },
        'toAccount': {
          'accountNumber': '4047050967',
          'accountType': 'CA'
        },
        'amount': 50,
        'purchaseReferenceNumber': '20170802/NEDBANK/000000489043013371'
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 20,
      'pageLimit': 2,
      'resultData': []
    }
  })
}

function paymenttransactionsPostLatest (req, res, next) {
  res.json({
    'data': [
      {
        'startDate': '2017-08-18T00:00:00',
        'nextTransDate': '2017-08-18T00:00:00',
        'bank': 'First National Bank',
        'beneficiaryID': 2,
        'sortCode': '250655',
        'bFName': 'Calvin Nedbank',
        'bFType': 'BnfExt',
        'myDescription': 'WesHein',
        'beneficiaryDescription': 'WESHein',
        'fromAccount': {
          'accountName': 'STOP CHEQU',
          'accountNumber': '1009000675',
          'productDescription': 'CA',
          'accountType': 'CA'
        },
        'toAccount': {
          'accountNumber': '62003019503',
          'accountType': 'U0'
        },
        'amount': 55.6,
        'instantPayment': false,
        'saveBeneficiary': true
      }
    ],
    'metadata': {
      'resultData': [
        {
          'batchID': '0',
          'transactionID': '0',
          'resultDetail': [
            {
              'operationReference': 'BENEFICIARYSAVED',
              'result': 'R00',
              'status': 'SUCCESS'
            },
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

function postPaymentTransactionV2 (req, res, next) {
  res.json({
    'metadata': {
      'resultData': {
        'transactionID': '1234',
        'resultDetail': [ {
          'operationReference': 'qq23233',
          'result': 'Done',
          'status': 'Complete',
          'reason': ''
        } ]
      }
    },
    'data': [ {
      'startDate': '12323232',
      'nextTransDate': '1233434',
      'fromAccount': {
        'accountName': 'tom',
        'accountNumber': '1234',
        'accountType': 'Saving'
      },
      'toAccount': {
        'accountName': 'Harry',
        'accountNumber': '12356',
        'accountType': 'Saving'
      },
      'bfName': 'Mark Twain',
      'bank': 'nedbank',
      'beneficiaryID': '12323121',
      'myDescription': {},
      'sortCode': 'ASD',
      'beneficiaryDescription': '',
      'amount': 123.0,
      'favourite': false,
      'saveBeneficiary': true
    } ]
  })
}
