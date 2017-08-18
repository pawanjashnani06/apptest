'use strict'

module.exports = {
  getLimits: getLimits,
  getLimitsLatest: getLimitsLatest,
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

function getLimitsLatest (req, res, next) {
  res.json({
    'data': [
      {
        'limitType': 'transfer',
        'dailyLimit': 150000,
        'userAvailableDailyLimit': 150000,
        'maxDailyLimit': 150000,
        'isTempLimit': false,
        'maxTmpDateRangeLimit': 30
      },
      {
        'limitType': 'payment',
        'dailyLimit': 150000,
        'userAvailableDailyLimit': 150000,
        'maxDailyLimit': 150000,
        'isTempLimit': false,
        'maxTmpDateRangeLimit': 30
      },
      {
        'limitType': 'lotto',
        'dailyLimit': 599,
        'userAvailableDailyLimit': 599,
        'maxDailyLimit': 1000,
        'isTempLimit': false,
        'maxTmpDateRangeLimit': 30
      },
      {
        'limitType': 'sendimali',
        'dailyLimit': 2500,
        'userAvailableDailyLimit': 2500,
        'maxDailyLimit': 2500,
        'isTempLimit': false,
        'maxTmpDateRangeLimit': 30
      },
      {
        'limitType': 'prepaid',
        'dailyLimit': 3000,
        'userAvailableDailyLimit': 3000,
        'maxDailyLimit': 3000,
        'isTempLimit': false,
        'maxTmpDateRangeLimit': 30
      },
      {
        'limitType': 'instantpayment',
        'dailyLimit': 9600,
        'userAvailableDailyLimit': 9600,
        'maxDailyLimit': 10000,
        'isTempLimit': true,
        'tempLimitStart': '2017-08-17T00:00:00',
        'tempLimitEnd': '2017-08-22T00:00:00',
        'tempDailyLimit': 9600,
        'tempAvailableDailyLimit': 9600,
        'lastPermanentLimit': 1000,
        'maxTmpDateRangeLimit': 30
      },
      {
        'limitType': 'visapayment',
        'dailyLimit': 80000,
        'userAvailableDailyLimit': 80000,
        'maxMonthlyLimit': 80000,
        'isTempLimit': false
      }
    ],
    'metadata': {
      'resultData': []
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
