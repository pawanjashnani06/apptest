'use strict'

module.exports = {
  getItems: getItems,
  getNoticeTypeItem: getNoticeTypeItem,
  updateNoticeTypeItem: updateNoticeTypeItem
}

function getItems (req, res, next) {
  res.json({
    'data': [
      {
        'noticeTitle': 'Payment transfer',
        'versionNumber': 134234,
        'acceptedDateTime': '2017-07-14',
        'versionDate': '1.0',
        'noticeEffectiveDate': '2017-07-14',
        'channelID': 1,
        'noticeType': 'EPM',
        'newVersionNumber': 1,
        'noticeDetails': {
          'versionDate': '2017-07-14',
          'PresentationTemplateType': 'PH',
          'noticePresentationTemplate': 'NoticePresentationTemplate',
          'noticeContent': 'Notice content',
          'channelID': 1
        }
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

function getNoticeTypeItem (req, res, next) {
  res.json({
    'data': {
      'noticeType': 'Payment transfer',
      'versionNumber': '1.0',
      'acceptedDateTime': '2017-7-14',
      'noticeDetails': {
        'versionDate': '2017-07-14',
        'PresentationTemplateType': 'PH',
        'noticePresentationTemplate': 'NoticePresentationTemplate',
        'noticeContent': 'Notice content',
        'channelID': 1
      }
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
      ]
    }
  })
}

function updateNoticeTypeItem (req, res, next) {
  res.json({
    'data': {
      'noticeType': 'Payment transfer',
      'versionNumber': '1.12',
      'acceptedDateTime': '2017-7-14',
      'noticeDetails': {
        'versionDate': '2017-07-14',
        'PresentationTemplateType': 'PH',
        'noticePresentationTemplate': 'NoticePresentationTemplate',
        'noticeContent': 'Notice content',
        'channelID': 1
      }
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
      ]
    }
  })
}
