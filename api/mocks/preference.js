'use strict'

module.exports = {
  getLimits: getLimits,
  getSortOrder: getSortOrder
}

function getLimits (req, res, next) {
  res.json({
    'data': {
      'dailyPaymentLimit': 50000,
      'dailyTransferLimit': 50000,
      'prePaidPurchaseLimit': 10000,
      'rTCPayLimit': 10000,
      'dailyIMALILimit': 10000,
      'dailyLottoLimit': 10000,
      'userAvailablePaymentLimit': 50000,
      'userAvailableTransferLimit': 50000,
      'userAvailablePrepaidLimit': 50000,
      'userAvailableRTCLimit': 50000,
      'uerAvailableIMALILimit': 50000,
      'userAvailableLottoLimit': 10000
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

function getSortOrder (req, res, next) {
  res.json({
    'data': {
      'custPrefField': 'BENF_NO',
      'custPrefOrder': 'ASC'
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
