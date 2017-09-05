'use strict'

module.exports = {
  getLottoLists: getLottoLists,
  createLottoLists: createLottoLists,
  getLottoBatches: getLottoBatches
}

function getLottoLists (req, res, next) {
  res.json({
    'data': [
      {
        'batchID': 2054864,
        'capturedDate': '2017-08-15T00:00:00',
        'clientRequestedDate': '2017-08-15T00:00:00',
        'purchaseDate': '2017-08-15T00:00:00',
        'ticketRequestedTime': '13:38',
        'myDescription': "LOTTO after accepting T's and",
        'fromAccount': {
          'accountNumber': '1001005570',
          'accountType': 'CA'
        },
        'amount': 30,
        'notificationDetails': [
          {
            'notificationId': 1,
            'notificationType': 'EMAIL',
            'notificationAddress': 'refilwemn@nedbank.co.za'
          }
        ],
        'game': 'PWB',
        'gameType': 'QPK',
        'drawNumber': 0,
        'drawDate': '0001-01-01T00:00:00',
        'drawsPlayed': 2,
        'boardsPlayed': 3,
        'isLottoPlus': false,
        'isLottoPlusTwo': false,
        'ticketStatus': 'Success',
        'purchaseReferenceNumber': '20170815/Nedbank/000000489044674189'
      },
      {
        'batchID': 2053224,
        'capturedDate': '2017-08-08T00:00:00',
        'clientRequestedDate': '2017-08-08T00:00:00',
        'purchaseDate': '2017-08-08T00:00:00',
        'ticketRequestedTime': '10:09',
        'myDescription': "LOTTO after accepting T's and",
        'fromAccount': {
          'accountNumber': '1001005570',
          'accountType': 'CA'
        },
        'amount': 30,
        'notificationDetails': [],
        'game': 'PWB',
        'gameType': 'QPK',
        'drawNumber': 0,
        'drawDate': '0001-01-01T00:00:00',
        'drawsPlayed': 2,
        'boardsPlayed': 3,
        'isLottoPlus': false,
        'isLottoPlusTwo': false,
        'ticketStatus': 'Failure',
        'purchaseReferenceNumber': '20170808/Nedbank/000000489043657037'
      },
      {
        'batchID': 2053223,
        'capturedDate': '2017-08-08T00:00:00',
        'clientRequestedDate': '2017-08-08T00:00:00',
        'purchaseDate': '2017-08-08T00:00:00',
        'ticketRequestedTime': '10:08',
        'myDescription': 'LOTTO test1',
        'fromAccount': {
          'accountNumber': '1001005570',
          'accountType': 'CA'
        },
        'amount': 30,
        'notificationDetails': [],
        'game': 'LOT',
        'gameType': 'OWN',
        'drawNumber': 0,
        'drawDate': '0001-01-01T00:00:00',
        'drawsPlayed': 2,
        'boardsPlayed': 3,
        'isLottoPlus': false,
        'isLottoPlusTwo': false,
        'ticketStatus': 'Failure',
        'purchaseReferenceNumber': '20170808/Nedbank/000000489043657036'
      },
      {
        'batchID': 2041116,
        'capturedDate': '2017-06-22T00:00:00',
        'clientRequestedDate': '2017-06-22T00:00:00',
        'purchaseDate': '2017-06-22T00:00:00',
        'ticketRequestedTime': '14:54',
        'myDescription': "LOTTO after accepting T's and",
        'fromAccount': {
          'accountNumber': '1128760746',
          'accountType': 'CA'
        },
        'amount': 112.5,
        'notificationDetails': [],
        'game': 'PWB',
        'gameType': 'OWN',
        'drawNumber': 0,
        'drawDate': '0001-01-01T00:00:00',
        'drawsPlayed': 5,
        'boardsPlayed': 3,
        'isLottoPlus': true,
        'isLottoPlusTwo': false,
        'ticketStatus': 'Failure',
        'purchaseReferenceNumber': '20170622/Nedbank/000000489041703695'
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 20,
      'pageLimit': 1
    }
  })
}

function createLottoLists (req, res, next) {
  res.json({
    'data': {
      'LottoItems': [
        {
          'batchID': 1,
          'capturedDate': '2017-07-14',
          'clientRequestedDate': '2017-07-14',
          'purchaseDate': '2017-07-14',
          'picketRequestedTime': 'Sample text',
          'pyDescription': 'Sample text',
          'fromAccount': {
            'plasticNumber': '8294372919104712',
            'accountName': 'Mark Twain',
            'accountNumber': '769810292044',
            'isOpen': true,
            'productCode': '7328201121',
            'productDescription': 'lotto ticket',
            'relationshipCode': '382191039103',
            'statusCode': '3810302010',
            'subProductCode': '9301920930',
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
            'actions': 'lottoTransaction',
            'transactions': [
              {
                'transactionId': '283491209654',
                'description': 'lottoTransaction',
                'amount': 1000,
                'runningBalance': 50000,
                'debit': true,
                'account': '547821348903',
                'postedDate': '2017-07-14',
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
            'dueDate': '2017-07-20',
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
          'amount': 1000,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': 'Sample text',
              'notificationSequenceNumber': 1
            }
          ],
          'game': 'LTO',
          'gameType': 'OWN',
          'drawNumber': 20,
          'drawDate': '2017-07-14',
          'drawsPlayed': 2,
          'boardsPlayed': 2,
          'isLottoPlus': true,
          'boardDetails': [
            {
              'boardNumber': '2719231',
              'numbersPlayed': '2'
            }
          ],
          'ticketStatus': 'PEN',
          'purchaseReferenceNumber': '20170714/GREENBANK/000000489023992664',
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
              'reason': 'Sample text',
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text',
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text'
            }
          ]
        }
      ],
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text',
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
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
              'reason': 'Sample text',
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text',
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text'
            }
          ]
        }
      ]
    }
  })
}

function getLottoBatches (req, res, next) {
  res.json({
    'data': {
      'batchID': 2054864,
      'capturedDate': '2017-08-15T00:00:00',
      'clientRequestedDate': '2017-08-15T00:00:00',
      'purchaseDate': '2017-08-15T00:00:00',
      'ticketRequestedTime': '13:38',
      'myDescription': "LOTTO after accepting T's and",
      'fromAccount': {
        'accountNumber': '1001005570',
        'accountType': 'CA'
      },
      'amount': 30,
      'notificationDetails': [
        {
          'notificationId': 1,
          'notificationType': 'EMAIL',
          'notificationAddress': 'refilwemn@nedbank.co.za'
        }
      ],
      'game': 'PWB',
      'gameType': 'QPK',
      'drawNumber': 819,
      'drawDate': '2017-09-22T00:00:00',
      'drawsPlayed': 2,
      'boardsPlayed': 3,
      'isLottoPlus': false,
      'isLottoPlusTwo': false,
      'boardDetails': [
        {
          'boardNumber': 'A',
          'numbersPlayed': '4 7 13 29 39 7'
        },
        {
          'boardNumber': 'B',
          'numbersPlayed': '4 8 17 19 42 9'
        },
        {
          'boardNumber': 'C',
          'numbersPlayed': '3 5 11 20 26 12'
        }
      ],
      'ticketStatus': 'Success',
      'purchaseReferenceNumber': '20170815/Nedbank/000000489044674189'
    },
    'metadata': {
      'resultData': []
    }
  })
}
