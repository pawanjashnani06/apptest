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
  if (req.param('validate') === true || req.param('validate') === 'true') {
    res.json({
      'data': [
        {
          'clientRequestedDate': '2017-10-04T00:00:00',
          'purchaseDate': '2017-10-04T00:00:00',
          'myDescription': 'LOTTO (04-10-2017)',
          'fromAccount': {
            'accountNumber': '1357071450',
            'accountType': 'CA'
          },
          'amount': 10,
          'game': 'LOT',
          'gameType': 'QPK',
          'drawNumber': 1750,
          'drawDate': '2017-10-04T00:00:00+02:00',
          'drawsPlayed': 1,
          'boardsPlayed': 2,
          'isLottoPlus': false,
          'isLottoPlusTwo': false,
          'boardDetails': []
        }
      ],
      'metadata': {
        'resultData': [
          {
            'batchID': '0',
            'transactionID': '0',
            'resultDetail': [
              {
                'operationReference': 'TRANSACTION',
                'result': 'SAVED_VALID',
                'status': 'SUCCESS',
                'reason': ' '
              }
            ]
          }
        ]
      }
    })
  } else {
    res.json({
      'metadata': {
        'resultData': [
          {
            'batchID': '2086255',
            'transactionID': '29379036',
            'resultDetail': [
              {
                'operationReference': 'TRANSACTION',
                'result': 'SAVED_VALID',
                'status': 'SUCCESS',
                'reason': ' '
              }
            ],
            'execEngineRef': '20171004/Nedbank/489048500841'
          }
        ]
      }
    })
  }
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
