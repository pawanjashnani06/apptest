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
  prepaidTransactionsPost: prepaidTransactionsPost
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
        'startDate': '2018-01-05',
        'nextTransDate': '2018-01-05',
        'fromAccount':
        {
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
      }
    ],
    'metadata': {
      'resultData': [
        {
          'transactionID': '0',
          'resultDetail': [
{ 'operationReference': 'TRANSACTION', 'result': 'R00', 'status': 'SUCCESS' }
          ],
          'execEngineRef': ' '
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
        'tokenDetail': [
          {
            'normalSaleToken': '09150820170523091508',
            'electricityAmount': 700,
            'vat': '0',
            'electricityUnits': 987,
            'receipt': 'CIGIC2A95523708',
            'tarrif': []
          }
        ],
        'enquiries': 'Megawatt Park, Contact Centre tel 086-003-7566'
      }
    ]
  })
}

function prepaidElectricitymetervouchersGet (req, res, next) {
  res.json({
    'data': [
      {
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
        'notificationDetails': [
          {
            'notificationType': 'NONE',
            'notificationAddress': ' '
          }
        ],
        'prepaidStatus': 'Success',
        'purchaseReferenceNumber': '20170808/Nedbank/000000489043657940',
        'bfName': 'UNKNOWN',
        'myDescription': 'Alpha Numeric Meter Input'
      }
    ],
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
