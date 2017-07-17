'use strict'

module.exports = {
  acceptInformationNotice: acceptInformationNotice,
  getInformationNotice: getInformationNotice,
  checkForNotice: checkForNotice,
  getLatestNoticeVersion: getLatestNoticeVersion
}

function acceptInformationNotice (req, res, next) {
  res.json({
    'ErrorMessage': 'Accepted information notice',
    'ErrorCode': '200',
    'data': {},
    'metadata': {
      'code': 'Sample text',
      'desription': 'Sample text',
      'InvalidFieldsList': [
        {
          'invalidFieldField': 'Sample text',
          'invalidFieldMessageField': 'Sample text'
        }
      ]
    }
  })
}

function getInformationNotice (req, res, next) {
  res.json({
    'Type': 'AAA',
    'Content': 'content of the information notice. Compressed huffman Base64 encoded data',
    'PresentationList': [
      {
        'PresentationTemplateType': 'DH',
        'NoticePresentationTemplate': 'A template that is used to display the notice content. Compressed huffman Base64 encoded'
      }
    ],
    'Version': {
      'VersionNumber': 1,
      'VersionDate': '2017-07-13T14:10:29.962Z'
    },
    'DocumentId': '2849219',
    'DocumentExt': 'pdf',
    'DocumentName': 'InformationNotice',
    'DocumentCategoryCode': 13432,
    'DocumentTypeCode': 124353
  })
}

function checkForNotice (req, res, next) {
  res.json([
    {
      'Type': 'BBB',
      'Version': {
        'VersionNumber': 128322,
        'VersionDate': '2017-07-14T06:25:53.256Z'
      }
    }
  ])
}

function getLatestNoticeVersion (req, res, next) {
  res.json({
    'Type': 'AAA',
    'Content': 'The content of the information notice. Compressed huffman Base64 encoded data',
    'PresentationList': [
      {
        'PresentationTemplateType': 'DH',
        'NoticePresentationTemplate': 'A template that is used to display the notice content. Compressed huffman Base64 encoded'
      }
    ],
    'Version': {
      'VersionNumber': 1,
      'VersionDate': '2017-07-14T06:30:50.077Z'
    },
    'DocumentId': '2849219',
    'DocumentExt': 'pdf',
    'DocumentName': 'InformationNotice',
    'DocumentCategoryCode': 13432,
    'DocumentTypeCode': 124353
  })
}
