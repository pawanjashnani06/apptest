'use strict'

module.exports = {
  transactionsEnquiry: transactionsEnquiry
}

function transactionsEnquiry (req, res, next) {
  res.json({
    'data': {
      'Prepaids': [
        {
          'transactionDate': '2017-07-13',
          'fromAccount': '783421674390',
          'toAccount': '321456748191',
          'branchCode': '110110',
          'destinationNumber': '8965432810',
          'serviceProvider': 'Telenor',
          'prepaidType': 'GSM',
          'beneficiaryName': 'John Dow',
          'myDescription': 'Prepaid transaction',
          'beneficiaryDescription': 'prepaid transaction',
          'lottoGameDetail': 'lotto game',
          'purchaseRefNr': '117523891789',
          'amount': 1000,
          'statusReason': 'prepaid transaction',
          'notificationDetails': [
            {
              'NotificationType': 'NONE',
              'NotificationAddress': 'Sample text',
              'NotificationDefaultInd': true,
              'notificationType': 'NONE',
              'notificationAddress': 'Sample text',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ]
        }
      ]
    },
    'metadata': {
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
