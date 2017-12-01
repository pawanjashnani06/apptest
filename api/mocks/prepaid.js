'use strict'

module.exports = {
  prepaidAccountsGet: prepaidAccountsGet,
  prepaidTransactionGet: prepaidTransactionGet,
  prepaidTransactionPut: prepaidTransactionPut,
  prepaidTransactionsGet: prepaidTransactionsGet,
  prepaidElectricitymeterPut: prepaidElectricitymeterPut,
  prepaidElectricitymetersGet: prepaidElectricitymetersGet,
  prepaidElectricitymetersPost: prepaidElectricitymetersPost,
  prepaidElectricitymetervoucherGet: prepaidElectricitymetervoucherGet,
  prepaidElectricitymetervouchersGet: prepaidElectricitymetervouchersGet,
  prepaidMoneySendGet: prepaidMoneySendGet,
  prepaidMoneySendPost: prepaidMoneySendPost,
  prepaidMoneySendHistoryGet: prepaidMoneySendHistoryGet,
  prepaidTransactionsPost: prepaidTransactionsPost,
  postElectricityV2: postElectricityV2,
  postMoneySendV2: postMoneySendV2
}

function prepaidAccountsGet (req, res, next) {
  res.json({
    'data': [ {
      'itemAccountId': '1',
      'accountNumber': '1001004345',
      'productCode': '017',
      'productDescription': 'TRANSACTOR',
      'isPlastic': false,
      'accountType': 'CA',
      'nickname': 'TRANS 02',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 50023.07,
      'currentBalance': 50023.07,
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
    }, {
      'itemAccountId': '3',
      'accountNumber': '1001005570',
      'productCode': '017',
      'productDescription': 'TRANSACTOR',
      'isPlastic': false,
      'accountType': 'CA',
      'nickname': 'TRANS  01',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 454502.48,
      'currentBalance': 454552.48,
      'profileAccountState': 'ACT',
      'accountLevel': 'U0',
      'viewAvailBal': true,
      'viewStmnts': true,
      'isRestricted': false,
      'viewCurrBal': true,
      'viewCredLim': true,
      'viewMinAmtDue': true,
      'isAlternateAccount': true,
      'allowCredits': false,
      'allowDebits': false,
      'accountRules': {
        'instantPayFrom': true,
        'onceOffPayFrom': false,
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
    }, {
      'itemAccountId': '18',
      'accountNumber': '1004800738',
      'productCode': '005',
      'productDescription': 'NC',
      'isPlastic': false,
      'accountType': 'NC',
      'nickname': 'NEDCR 03',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 1257134.48,
      'currentBalance': 1257134.48,
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
        'onceOffPayFrom': false,
        'futureOnceOffPayFrom': true,
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
    }, {
      'itemAccountId': '19',
      'accountNumber': '1012110826',
      'productCode': '005',
      'productDescription': 'NC',
      'isPlastic': false,
      'accountType': 'NC',
      'nickname': 'NEDCR 02',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 1500834.32,
      'currentBalance': 1500834.32,
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
    }, {
      'itemAccountId': '20',
      'accountNumber': '1014003210',
      'productCode': '005',
      'productDescription': 'NC',
      'isPlastic': false,
      'accountType': 'NC',
      'nickname': 'NEDCR 01',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 575573.08,
      'currentBalance': 575573.08,
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
        'recurringPayFrom': true,
        'recurringBDFPayFrom': true,
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
    }, {
      'itemAccountId': '4',
      'accountNumber': '1128760746',
      'productCode': '022',
      'productDescription': 'CA',
      'isPlastic': false,
      'accountType': 'CA',
      'nickname': 'JAKES CHEQ',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 167506.94,
      'currentBalance': 167506.94,
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
        'onceOffPayFrom': false,
        'futureOnceOffPayFrom': true,
        'recurringPayFrom': false,
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
    }, {
      'itemAccountId': '6',
      'accountNumber': '1357071450',
      'productCode': '015',
      'productDescription': 'CA',
      'isPlastic': false,
      'accountType': 'CA',
      'nickname': 'P&J Trust',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': -121.84,
      'currentBalance': -121.84,
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
        'futureOnceOffPayFrom': false,
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
    }, {
      'itemAccountId': '7',
      'accountNumber': '1713237059',
      'productCode': '001',
      'productDescription': 'CA',
      'isPlastic': false,
      'accountType': 'CA',
      'nickname': 'POTCH AQUA',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 1065135.49,
      'currentBalance': 1065135.49,
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
        'futureOnceOffPayFrom': false,
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
    }, {
      'itemAccountId': '8',
      'accountNumber': '1713241811',
      'productCode': '001',
      'productDescription': 'CA',
      'isPlastic': false,
      'accountType': 'CA',
      'nickname': 'GOMAC',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 1120693.87,
      'currentBalance': 1108693.87,
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
    }, {
      'itemAccountId': '9',
      'accountNumber': '1713267128',
      'productCode': '015',
      'productDescription': 'CA',
      'isPlastic': false,
      'accountType': 'CA',
      'nickname': 'GOMAC',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 1236993.73,
      'currentBalance': 1236993.73,
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
        'recurringPayFrom': false,
        'recurringBDFPayFrom': false,
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
    }, {
      'itemAccountId': '10',
      'accountNumber': '1713277581',
      'productCode': '001',
      'productDescription': 'CA',
      'isPlastic': false,
      'accountType': 'CA',
      'nickname': 'CURRENT',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 995502.53,
      'currentBalance': 992002.53,
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
    }, {
      'itemAccountId': '21',
      'accountNumber': '1940062772',
      'productCode': '005',
      'productDescription': 'SA',
      'isPlastic': false,
      'accountType': 'SA',
      'nickname': 'NEDCREDIT',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 43723.3,
      'currentBalance': 43723.3,
      'profileAccountState': 'ACT',
      'accountLevel': 'U0',
      'viewAvailBal': true,
      'viewStmnts': true,
      'isRestricted': true,
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
    }, {
      'itemAccountId': '12',
      'accountNumber': '2001008309',
      'productCode': '16',
      'productDescription': 'SA',
      'isPlastic': false,
      'accountType': 'SA',
      'nickname': 'SA 01',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 992278.72,
      'currentBalance': 992308.72,
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
    }, {
      'itemAccountId': '13',
      'accountNumber': '2713385954',
      'productCode': '16',
      'productDescription': 'SA',
      'isPlastic': false,
      'accountType': 'SA',
      'nickname': 'GOMAC',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 20784.66,
      'currentBalance': 20814.66,
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
    }, {
      'itemAccountId': '14',
      'accountNumber': '377093000052084',
      'productCode': 'AMX',
      'productDescription': 'AMEX',
      'isPlastic': true,
      'accountType': 'CC',
      'nickname': 'CRD 02',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 0,
      'currentBalance': 259629.95,
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
    }, {
      'itemAccountId': '15',
      'accountNumber': '5179900000237623',
      'productCode': 'MAS',
      'productDescription': 'MASTER',
      'isPlastic': true,
      'accountType': 'CC',
      'nickname': 'MASTER 1',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 42284.43,
      'currentBalance': 40284.43,
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
    }, {
      'itemAccountId': '16',
      'accountNumber': '5179900000988266',
      'productCode': 'MAS',
      'productDescription': 'MASTER',
      'isPlastic': true,
      'accountType': 'CC',
      'nickname': 'MASTER',
      'sourceSystem': 'Profile System',
      'currency': 'ZAR',
      'availableBalance': 498076.05,
      'currentBalance': 496076.05,
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
    }, {
      'itemAccountId': '17',
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
    } ],
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
        'transactions': [ {
          'transactionId': '9867519021392',
          'description': 'Prepaid transfer',
          'amount': 1000,
          'runningBalance': 10000,
          'debit': true,
          'account': '9867452381',
          'postedDate': '2017-07-12',
          'categoryId': 1,
          'childTransactions': [ {} ],
          'originalCategoryId': 1
        } ],
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
      'notificationDetails': [ {
        'notificationId': 1,
        'notificationType': 'NONE',
        'notificationAddress': '',
        'notificationDefaultInd': true
      } ],
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
      'resultData': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ],
      'resultSets': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ]
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
        'transactions': [ {
          'transactionId': '9867519021392',
          'description': 'Prepaid transfer',
          'amount': 1000,
          'runningBalance': 10000,
          'debit': true,
          'account': '9867452381',
          'postedDate': '2017-07-12',
          'categoryId': 1,
          'childTransactions': [ {} ],
          'originalCategoryId': 1
        } ],
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
      'notificationDetails': [ {
        'notificationId': 1,
        'notificationType': 'NONE',
        'notificationAddress': '',
        'notificationDefaultInd': true
      } ],
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
      'resultData': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ],
      'resultSets': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ]
    }
  })
}

function prepaidTransactionsGet (req, res, next) {
  res.json({
    'data': [ {
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
        'transactions': [ {
          'transactionId': '9867519021392',
          'description': 'Prepaid transfer',
          'amount': 1000,
          'runningBalance': 10000,
          'debit': true,
          'account': '9867452381',
          'postedDate': '2017-07-12',
          'categoryId': 1,
          'childTransactions': [ {} ],
          'originalCategoryId': 1
        } ],
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
      'notificationDetails': [ {
        'notificationId': 1,
        'notificationType': 'NONE',
        'notificationAddress': '',
        'notificationDefaultInd': true
      } ],
      'prepaidStatus': 'Active',
      'electricityAmountInArrears': 1000,
      'purchaseReferenceNumber': '6787542243',
      'unitsInBundle': '20',
      'favourite': true
    } ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ],
      'resultSets': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ]
    }
  })
}

function prepaidTransactionsPost (req, res, next) {
  res.json({
    'data': [ {
      'startDate': '2018-01-05',
      'nextTransDate': '2018-01-05',
      'fromAccount': {
        'accountName': 'TRANS 01',
        'accountNumber': '1001005570',
        'accountType': 'CA'
      },
      'destinationNumber': '0740033923',
      'serviceProvider': 'CLC',
      'productCode': 'PAI',
      'amount': 77,
      'isVoucherAmount': false,
      'favourite': false,
      'myDescription': 'MinaMoo'
    } ],
    'metadata': {
      'resultData': [ {
        'transactionID': '0',
        'resultDetail': [ {
          'operationReference': 'TRANSACTION',
          'result': 'R00',
          'status': 'SUCCESS'
        } ],
        'execEngineRef': ' '
      } ]
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
      'notificationDetails': [ {
        'notificationId': 1,
        'notificationType': 'NONE',
        'notificationAddress': 'Sample text',
        'notificationDefaultInd': true
      } ],
      'recentPayList': [ {
        'bfPaymentDate': '2017-07-12',
        'bfPaymentAmount': 1000,
        'bfAcctNumber': '787970102030',
        'bfMyDescription': 'Prepaid transactions',
        'bfPurchaseReferenceNumber': '132415671289'
      } ]
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [ {
        'batchID': 'Sample text',
        'transactionID': 'Sample text',
        'recInstrID': 'Sample text',
        'resultDetail': [ {
          'operationReference': 'Sample text',
          'result': 'Sample text',
          'status': 'Sample text',
          'reason': 'Sample text'
        } ],
        'execEngineRef': 'Sample text',
        'resultDetails': [ {
          'operationReference': 'Sample text',
          'result': 'Sample text',
          'status': 'Sample text',
          'reason': 'Sample text'
        } ]
      } ],
      'resultSets': [ {
        'batchID': 'Sample text',
        'transactionID': 'Sample text',
        'recInstrID': 'Sample text',
        'resultDetail': [ {
          'operationReference': 'Sample text',
          'result': 'Sample text',
          'status': 'Sample text',
          'reason': 'Sample text'
        } ],
        'execEngineRef': 'Sample text',
        'resultDetails': [ {
          'operationReference': 'Sample text',
          'result': 'Sample text',
          'status': 'Sample text',
          'reason': 'Sample text'
        } ]
      } ]
    }
  })
}

function prepaidElectricitymetersGet (req, res, next) {
  res.json({
    'data': [ {
      'destinationNumber': '965920217273',
      'beneficiaryName': 'Mark Twain',
      'myDescription': {},
      'beneficiaryID': 413423455453,
      'municipality': 'Model Town',
      'customerName': 'Mark Twain',
      'customerAddress': 'Block 3, Model Town',
      'notificationDetails': [ {
        'notificationId': 1,
        'notificationType': 'NONE',
        'notificationAddress': '',
        'notificationDefaultInd': true
      } ],
      'recentPayList': [ {
        'bfPaymentDate': '2017-07-12',
        'bfPaymentAmount': 1000,
        'bfAcctNumber': '787970102030',
        'bfMyDescription': 'Prepaid transactions',
        'bfPurchaseReferenceNumber': '132415671289'
      } ]
    } ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ],
      'resultSets': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ]
    }
  })
}

function prepaidElectricitymetersPost (req, res, next) {
  res.json({
    'data': [ {
      'destinationNumber': '965920217273',
      'beneficiaryName': 'Mark Twain',
      'myDescription': {},
      'beneficiaryID': 413423455453,
      'municipality': 'Model Town',
      'customerName': 'Mark Twain',
      'customerAddress': 'Block 3, Model Town',
      'notificationDetails': [ {
        'notificationId': 1,
        'notificationType': 'NONE',
        'notificationAddress': '',
        'notificationDefaultInd': true
      } ],
      'recentPayList': [ {
        'bfPaymentDate': '2017-07-12',
        'bfPaymentAmount': 1000,
        'bfAcctNumber': '787970102030',
        'bfMyDescription': 'Prepaid transactions',
        'bfPurchaseReferenceNumber': '132415671289'
      } ]
    } ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ],
      'resultSets': [ {
        'batchID': '',
        'transactionID': '',
        'recInstrID': '',
        'resultDetail': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ],
        'execEngineRef': '',
        'resultDetails': [ {
          'operationReference': '',
          'result': '',
          'status': '',
          'reason': ''
        } ]
      } ]
    }
  })
}

function prepaidElectricitymetervoucherGet (req, res, next) {
  res.json({
    'data': [ {
      'myDescription': 'Alpha Numeric Meter Input',
      'purchaseDate': '2017-08-08T00:00:00',
      'meterNumber': '01050020009',
      'distributor': 'Eskom',
      'customerName': '',
      'customerAddress': '',
      'serviceProvider': 'BLT',
      'nedbankReferenceNr': '20170523/Nedbank/000000489035291992',
      'amount': 700,
      'globalReceiptNr': 'CIGIC2A95523708',
      'taxInvoiceNr': '',
      'supplyGroupCode': 100646,
      'keyRevisionNr': 1,
      'tarrifIndexCode': 4,
      'algorithmCode': 7,
      'tokenTechnologyCode': 2,
      'tokenDetail': [ {
        'normalSaleToken': '09150820170523091508',
        'electricityAmount': 700,
        'vat': '0',
        'electricityUnits': 987,
        'receipt': 'CIGIC2A95523708',
        'tarrif': []
      } ],
      'enquiries': 'Megawatt Park, Contact Centre tel 086-003-7566'
    } ]
  })
}

function prepaidElectricitymetervouchersGet (req, res, next) {
  res.json({
    'data': [ {
      'batchID': 2053296,
      'transactionID': 28949883,
      'capturedDate': '2017-08-08T00:00:00',
      'startDate': '2017-08-08T00:00:00',
      'nextTransDate': '2017-08-08T00:00:00',
      'beneficiaryID': 0,
      'fromAccount': {
        'accountNumber': '1001005570'
      },
      'destinationNumber': '01050020009',
      'serviceProvider': 'BLT',
      'productCode': 'PEL',
      'amount': 400,
      'notificationDetails': [ {
        'notificationType': 'NONE',
        'notificationAddress': ' '
      } ],
      'prepaidStatus': 'Success',
      'purchaseReferenceNumber': '20170808/Nedbank/000000489043657940',
      'bfName': 'UNKNOWN',
      'myDescription': 'Alpha Numeric Meter Input'
    } ],
    'metadata': {
      'page': 1,
      'pageSize': 20,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function prepaidMoneySendGet (req, res, next) {
  res.json({
    'data': [ {
      'batchID': 2057865,
      'transactionID': 28965227,
      'capturedDate': '2017-09-07T00:00:00',
      'startDate': '2017-09-07T00:00:00',
      'nextTransDate': '2017-09-07T00:00:00',
      'beneficiaryID': 0,
      'fromAccount': {
        'accountNumber': '1001005570'
      },
      'destinationNumber': '0839000128',
      'serviceProvider': 'NED',
      'productCode': 'PMS',
      'amount': 50,
      'notificationDetails': [ {
        'notificationType': 'NONE',
        'notificationAddress': ' '
      } ],
      'prepaidStatus': 'Success',
      'purchaseReferenceNumber': '20170907/Nedbank/000000489045105728',
      'bfName': 'UNKNOWN',
      'myDescription': 'QATest'
    }, {
      'batchID': 2057836,
      'transactionID': 28965195,
      'capturedDate': '2017-09-07T00:00:00',
      'startDate': '2017-09-07T00:00:00',
      'nextTransDate': '2017-09-07T00:00:00',
      'beneficiaryID': 0,
      'fromAccount': {
        'accountNumber': '1001005570'
      },
      'destinationNumber': '0839000128',
      'serviceProvider': 'NED',
      'productCode': 'PMS',
      'amount': 50,
      'notificationDetails': [ {
        'notificationType': 'NONE',
        'notificationAddress': ' '
      } ],
      'prepaidStatus': 'Success',
      'purchaseReferenceNumber': '20170907/Nedbank/000000489045105465',
      'bfName': 'UNKNOWN',
      'myDescription': 'QATest'
    }, {
      'batchID': 2057776,
      'transactionID': 28965133,
      'capturedDate': '2017-09-07T00:00:00',
      'startDate': '2017-09-07T00:00:00',
      'nextTransDate': '2017-09-07T00:00:00',
      'beneficiaryID': 0,
      'fromAccount': {
        'accountNumber': '1001005570'
      },
      'destinationNumber': '0839000128',
      'serviceProvider': 'NED',
      'productCode': 'PMS',
      'amount': 50,
      'notificationDetails': [ {
        'notificationType': 'NONE',
        'notificationAddress': ' '
      } ],
      'prepaidStatus': 'Success',
      'purchaseReferenceNumber': '20170907/Nedbank/000000489045102819',
      'bfName': 'UNKNOWN',
      'myDescription': 'QATest'
    }, {
      'batchID': 2053306,
      'transactionID': 28949958,
      'capturedDate': '2017-08-08T00:00:00',
      'startDate': '2017-08-08T00:00:00',
      'nextTransDate': '2017-08-08T00:00:00',
      'beneficiaryID': 0,
      'fromAccount': {
        'accountNumber': '1001005570'
      },
      'destinationNumber': '0839000128',
      'serviceProvider': 'NED',
      'productCode': 'PMS',
      'amount': 50,
      'notificationDetails': [ {
        'notificationType': 'NONE',
        'notificationAddress': ' '
      } ],
      'prepaidStatus': 'Success',
      'purchaseReferenceNumber': '20170808/Nedbank/000000489043657987',
      'bfName': 'UNKNOWN',
      'myDescription': 'QATest'
    }, {
      'batchID': 2053305,
      'transactionID': 28949957,
      'capturedDate': '2017-08-08T00:00:00',
      'startDate': '2017-08-08T00:00:00',
      'nextTransDate': '2017-08-08T00:00:00',
      'beneficiaryID': 0,
      'fromAccount': {
        'accountNumber': '1001005570'
      },
      'destinationNumber': '0839000128',
      'serviceProvider': 'NED',
      'productCode': 'PMS',
      'amount': 50,
      'notificationDetails': [ {
        'notificationType': 'NONE',
        'notificationAddress': ' '
      } ],
      'prepaidStatus': 'Success',
      'purchaseReferenceNumber': '20170808/Nedbank/000000489043657986',
      'bfName': 'UNKNOWN',
      'myDescription': 'QATest'
    }, {
      'batchID': 2053304,
      'transactionID': 28949956,
      'capturedDate': '2017-08-08T00:00:00',
      'startDate': '2017-08-08T00:00:00',
      'nextTransDate': '2017-08-08T00:00:00',
      'beneficiaryID': 0,
      'fromAccount': {
        'accountNumber': '1001005570'
      },
      'destinationNumber': '0839000128',
      'serviceProvider': 'NED',
      'productCode': 'PMS',
      'amount': 50,
      'notificationDetails': [ {
        'notificationType': 'NONE',
        'notificationAddress': ' '
      } ],
      'prepaidStatus': 'Success',
      'purchaseReferenceNumber': '20170808/Nedbank/000000489043657985',
      'bfName': 'UNKNOWN',
      'myDescription': 'QATest'
    } ],
    'metadata': {
      'page': 1,
      'pageSize': 20,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function prepaidMoneySendPost (req, res, next) {
  res.json({
    'data': [ {
      'startDate': '2017-09-11T00:00:00',
      'nextTransDate': '2017-09-11T00:00:00',
      'fromAccount': {
        'accountName': 'TRANS  01',
        'accountNumber': '1001005570',
        'accountType': 'CA'
      },
      'destinationNumber': '0839000128',
      'serviceProvider': 'NED',
      'productCode': 'PMS',
      'amount': 50,
      'isVoucherAmount': false,
      'myDescription': 'QATest'
    } ],
    'metadata': {
      'resultData': [ {
        'batchID': '0',
        'resultDetail': [ {
          'operationReference': 'TRANSACTION',
          'result': 'R00',
          'status': 'SUCCESS'
        } ],
        'execEngineRef': ' '
      } ]
    }
  })
}

function prepaidMoneySendHistoryGet (req, res, next) {
  res.json([ {
    'batchID': 1,
    'startDate': '2017-07-12',
    'nextTransDate': '2017-07-12',
    'myDescription': {},
    'destinationNumber': '9867452381',
    'isOwnNumber': true,
    'fromAccount': '787970102030',
    'amount': 1000,
    'notificationDetails': [ {
      'notificationId': 1,
      'notificationType': 'NONE',
      'notificationAddress': 'Sample text',
      'notificationDefaultInd': true
    } ],
    'purchaseReferenceNumber': 'Prepaid transaction'
  } ])
}

function postMoneySendV2 (req, res, next) {
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
      'destinationNumber': '965920217273',
      'serviceProvider': 'PPP',
      'myDescription': {},
      'beneficiaryID': 413423455453,
      'productCode': 'PPP',
      'amount': 123.20,
      'mIsVoucherAmount': true
    } ]
  })
}

function postElectricityV2 (req, res, next) {
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
      'destinationNumber': '965920217273',
      'bfName': 'Mark Twain',
      'myDescription': {},
      'beneficiaryID': 413423455453,
      'productCode': 'PWD',
      'isVoucherAmount': true,
      'electricityAmountInArrears': 123.20,
      'electricityMeterDetails': {
        'Municipality': 'Model Town',
        'CustomerName': 'Mark Twain',
        'CustomerAddress': 'Block 3, Model Town'
      }
    } ]
  })
}
