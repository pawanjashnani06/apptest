'use strict'

module.exports = {
  contactCardsDetailsGet: contactCardsDetailsGet,
  contactCardsDetailsPost: contactCardsDetailsPost,
  contactCardGet: contactCardGet,
  contactCardPut: contactCardPut
}

function contactCardsDetailsGet (req, res, next) {
  res.json({
    'data': [
      {
        'contactCardID': 1001,
        'contactCardName': 'Mark Twain',
        'contactCardDetails': [
          {
            'beneficiaryID': 10101010,
            'beneficiaryName': 'Mark Twain',
            'accountNumber': '783421094571',
            'bankName': 'Green Bank',
            'branchCode': '110110',
            'beneficiaryType': 'BDF',
            'beneficiarySubType': 'INT',
            'myReference': 'My debit references',
            'beneficiaryReference': 'My creditor references'
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '9886712834',
            'notificationType': 'mobile',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 1,
                'beneficiaryType': '',
                'beneficiarySubType': '',
                'notificationID': 1
              }
            ]
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

function contactCardsDetailsPost (req, res, next) {
  res.json({
    'data': {
      'contactCardID': 1001,
      'contactCardName': 'Mark Twain',
      'contactCardDetails': [
        {
          'beneficiaryID': 10101010,
          'beneficiaryName': 'Mark Twain',
          'accountNumber': '783421094571',
          'bankName': 'Green Bank',
          'branchCode': '110110',
          'beneficiaryType': 'BDF',
          'beneficiarySubType': 'INT',
          'myReference': 'My debit references',
          'beneficiaryReference': 'My creditor references'
        }
      ],
      'contactCardNotifications': [
        {
          'notificationAddress': '9886712834',
          'notificationType': 'mobile',
          'notificationDefault': true,
          'notificationParents': [
            {
              'beneficiaryID': 1,
              'beneficiaryType': 'Sample text',
              'beneficiarySubType': 'Sample text',
              'notificationID': 1
            }
          ]
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

function contactCardGet (req, res, next) {
  res.json({
    'data': {
      'contactCardID': 1001,
      'contactCardName': 'Mark Twain',
      'contactCardDetails': [
        {
          'beneficiaryID': 10101010,
          'beneficiaryName': 'Mark Twain',
          'accountNumber': '783421094571',
          'bankName': 'Green Bank',
          'branchCode': '110110',
          'beneficiaryType': 'BDF',
          'beneficiarySubType': 'INT',
          'myReference': 'My debit references',
          'beneficiaryReference': 'My creditor references'
        }
      ],
      'contactCardNotifications': [
        {
          'notificationAddress': '9886712834',
          'notificationType': 'mobile',
          'notificationDefault': true,
          'notificationParents': [
            {
              'beneficiaryID': 1,
              'beneficiaryType': 'Sample text',
              'beneficiarySubType': 'Sample text',
              'notificationID': 1
            }
          ]
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

function contactCardPut (req, res, next) {
  res.json({
    'data': {
      'contactCardID': 1001,
      'contactCardName': 'Mark Twain',
      'contactCardDetails': [
        {
          'beneficiaryID': 10101010,
          'beneficiaryName': 'Mark Twain',
          'accountNumber': '783421094571',
          'bankName': 'Green Bank',
          'branchCode': '110110',
          'beneficiaryType': 'BDF',
          'beneficiarySubType': 'INT',
          'myReference': 'My debit references',
          'beneficiaryReference': 'My creditor references'
        }
      ],
      'contactCardNotifications': [
        {
          'notificationAddress': '9886712834',
          'notificationType': 'mobile',
          'notificationDefault': true,
          'notificationParents': [
            {
              'beneficiaryID': 1,
              'beneficiaryType': 'Sample text',
              'beneficiarySubType': 'Sample text',
              'notificationID': 1
            }
          ]
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
