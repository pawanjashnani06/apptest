'use strict'

module.exports = {
  getBankDetails: getBankDetails,
  getBankDetailsLatest: getBankDetailsLatest,
  getBranches: getBranches,
  getFNBBranches: getFNBBranches,
  getBankDefinedBeneficiaries: getBankDefinedBeneficiaries,
  getNotificationTypesLatest: getNotificationTypesLatest,
  getServiceProviders: getServiceProviders,
  getBLTServiceProviderProducts: getBLTServiceProviderProducts,
  getCLCServiceProviderProducts: getCLCServiceProviderProducts,
  getGDNServiceProviderProducts: getGDNServiceProviderProducts,
  getMTNServiceProviderProducts: getMTNServiceProviderProducts,
  getNEDServiceProviderProducts: getNEDServiceProviderProducts,
  getTLKServiceProviderProducts: getTLKServiceProviderProducts,
  getVDCServiceProviderProducts: getVDCServiceProviderProducts,
  getVGNServiceProviderProducts: getVGNServiceProviderProducts,
  get8TAServiceProviderProducts: get8TAServiceProviderProducts,
  getFrequency: getFrequency,
  getDrawResults: getDrawResults,
  getLottoJackpot: getLottoJackpot,
  getLottoMetadata: getLottoMetadata,
  getStopPaymentReasons: getStopPaymentReasons,
  getDisputeDebitOrderReasons: getDisputeDebitOrderReasons
}

function getBankDetails (req, res, next) {
  res.json({
    'data': [
      {
        'bankCode': 'NBL211113',
        'bankName': 'Nedbank Limited',
        'universalCode': '211113',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'New Town',
            'branchCode': '213157'
          }
        ]
      },
      {
        'bankCode': 'IBL211171',
        'bankName': 'Investec bank Limited',
        'universalCode': '211171',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Old City',
            'branchCode': '223178'
          }
        ]
      },
      {
        'bankCode': 'SB217192',
        'bankName': 'Standard Bank',
        'universalCode': '217192',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Baker Street',
            'branchCode': '211101'
          }
        ]
      },
      {
        'bankCode': 'AB213421',
        'bankName': 'African Bank',
        'universalCode': '213421',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Malibu Town',
            'branchCode': '211845'
          }
        ]
      },
      {
        'bankCode': 'FB219876',
        'bankName': 'First National Bank',
        'universalCode': '219876',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Old Gallery',
            'branchCode': '219891'
          }
        ]
      },
      {
        'bankCode': 'BB210130',
        'bankName': 'Bidvest Bank',
        'universalCode': '210130',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Green Park',
            'branchCode': '211122'
          }
        ]
      },
      {
        'bankCode': 'TB214488',
        'bankName': 'Teba Bank',
        'universalCode': '214488',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'New Town',
            'branchCode': '214400'
          }
        ]
      },
      {
        'bankCode': 'NL891301',
        'bankName': 'National Bank Limited',
        'universalCode': '891301',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Aztec',
            'branchCode': '891399'
          }
        ]
      },
      {
        'bankCode': 'NR661032',
        'bankName': 'National Reserve Bank',
        'universalCode': '661032',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Downtown',
            'branchCode': '661991'
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

function getBankDetailsLatest (req, res, next) {
  res.json({
    'data': [
      {
        'bankCode': '003',
        'bankName': 'NEDBANK',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'NEDBANK MENLYN MAINE',
            'branchCode': '169745'
          },
          {
            'branchName': 'NEDBANK STRAND CBD',
            'branchCode': '164005'
          },
          {
            'branchName': 'NEDBANK ARCON PARK',
            'branchCode': '173037'
          },
          {
            'branchName': '100 MAIN STREET  JOHANNESBURG',
            'branchCode': '197905'
          },
          {
            'branchName': '320 WEST STR CSC KZN',
            'branchCode': '101233'
          },
          {
            'branchName': '458 SMITH STREET DURBAN CSC',
            'branchCode': '101324'
          },
          {
            'branchName': '6TH AVENUE WALMER',
            'branchCode': '121517'
          },
          {
            'branchName': 'ADMIN & SASWITCH',
            'branchCode': '187405'
          },
          {
            'branchName': 'AIRLINE TICKET PROCESSING',
            'branchCode': '199505'
          },
          {
            'branchName': 'ALBERTON',
            'branchCode': '182242'
          },
          {
            'branchName': 'ALBERTON',
            'branchCode': '190242'
          },
          {
            'branchName': 'ALBERTON BOULAVARD',
            'branchCode': '172442'
          },
          {
            'branchName': 'ALBERTON CSC',
            'branchCode': '101307'
          },
          {
            'branchName': 'ALEXANDRA CSC',
            'branchCode': '101283'
          },
          {
            'branchName': 'ALIWAL NORTH',
            'branchCode': '101190'
          },
          {
            'branchName': 'ALPHA PBS CIS LINK',
            'branchCode': '176005'
          },
          {
            'branchName': 'AMANZIMTOTI',
            'branchCode': '130627'
          },
          {
            'branchName': 'AMEX',
            'branchCode': '190105'
          },
          {
            'branchName': 'AMEX OTHER',
            'branchCode': '184242'
          },
          {
            'branchName': 'ARCADIA',
            'branchCode': '163345'
          },
          {
            'branchName': 'ARF BRANCH NETWORKS',
            'branchCode': '101189'
          },
          {
            'branchName': 'ARGYLE ROAD',
            'branchCode': '131426'
          },
          {
            'branchName': 'ATHLONE',
            'branchCode': '115909'
          },
          {
            'branchName': 'ATM SETTLEMENT ACCOUNTS',
            'branchCode': '100931'
          },
          {
            'branchName': 'ATTERIDGEVILLE',
            'branchCode': '104209'
          },
          {
            'branchName': 'B.S.- CAPE TOWN',
            'branchCode': '105909'
          },
          {
            'branchName': 'BARDENE',
            'branchCode': '175841'
          },
          {
            'branchName': 'BB LEGAL COMMERCIAL',
            'branchCode': '185605'
          },
          {
            'branchName': 'BB SPECIALIST SUPPORT',
            'branchCode': '129605'
          },
          {
            'branchName': 'BEACON BAY',
            'branchCode': '101421'
          },
          {
            'branchName': 'BEDFORDVIEW',
            'branchCode': '192505'
          },
          {
            'branchName': 'BELA BELA',
            'branchCode': '138305'
          },
          {
            'branchName': 'BELHAR',
            'branchCode': '120405'
          },
          {
            'branchName': 'BELLVILLE CBD',
            'branchCode': '108110'
          },
          {
            'branchName': 'BELLVILLE EAST',
            'branchCode': '103210'
          },
          {
            'branchName': 'BENONI CSC',
            'branchCode': '101274'
          },
          {
            'branchName': 'BETHLEHEM',
            'branchCode': '110133'
          },
          {
            'branchName': 'BETHLEHEM G4S',
            'branchCode': '101034'
          },
          {
            'branchName': 'BIRCH ACRES MALL',
            'branchCode': '186405'
          },
          {
            'branchName': 'BIZANA',
            'branchCode': '172009'
          },
          {
            'branchName': 'BLAAUW VILLAGE PRETORIA',
            'branchCode': '101240'
          },
          {
            'branchName': 'BLOEM CASH CENTRE SBV',
            'branchCode': '124134'
          },
          {
            'branchName': 'BLOEMFONTEIN CAMPUS',
            'branchCode': '101027'
          },
          {
            'branchName': 'BOARDWALK RICHARDS BAY',
            'branchCode': '101322'
          },
          {
            'branchName': 'BOE PRIVATE BANK CAPE TOWN',
            'branchCode': '103608'
          },
          {
            'branchName': 'BOE PRIVATE BANK JOHANNESBURG',
            'branchCode': '103609'
          },
          {
            'branchName': 'BOE PRIVATE BANK KZN',
            'branchCode': '103606'
          },
          {
            'branchName': 'BOE PRIVATE BANK PRETORIA',
            'branchCode': '103607'
          },
          {
            'branchName': 'BOE SOUTHERN CAPE',
            'branchCode': '103937'
          },
          {
            'branchName': 'BOKSBURG CBD CSC',
            'branchCode': '101269'
          },
          {
            'branchName': 'BOKSBURG G4S',
            'branchCode': '101041'
          },
          {
            'branchName': 'BOOYSENS',
            'branchCode': '198005'
          },
          {
            'branchName': 'BOXER  TAUNG MALL',
            'branchCode': '101174'
          },
          {
            'branchName': 'BOXER ALEXANDRA',
            'branchCode': '101115'
          },
          {
            'branchName': 'BOXER BENONI',
            'branchCode': '112705'
          },
          {
            'branchName': 'BOXER BIZANA',
            'branchCode': '199605'
          },
          {
            'branchName': 'BOXER BLOEMFONTEIN',
            'branchCode': '101345'
          },
          {
            'branchName': 'BOXER BOITUMELO',
            'branchCode': '101364'
          },
          {
            'branchName': 'BOXER BOKSBURG',
            'branchCode': '100956'
          },
          {
            'branchName': 'BOXER BOTSHABELO',
            'branchCode': '100939'
          },
          {
            'branchName': 'BOXER BRITS',
            'branchCode': '143846'
          },
          {
            'branchName': 'BOXER BURGERSFORT',
            'branchCode': '101351'
          },
          {
            'branchName': 'BOXER BUSHBUCK RIDGE',
            'branchCode': '107609'
          },
          {
            'branchName': 'BOXER CALA',
            'branchCode': '113909'
          },
          {
            'branchName': 'BOXER CENTANI',
            'branchCode': '101600'
          },
          {
            'branchName': 'BOXER COFIMVABA BUILD',
            'branchCode': '148045'
          },
          {
            'branchName': 'BOXER COMMERCIAL ROAD',
            'branchCode': '174442'
          },
          {
            'branchName': 'BOXER DAVEYTON',
            'branchCode': '149105'
          },
          {
            'branchName': 'BOXER DIEPSLOOT',
            'branchCode': '101306'
          },
          {
            'branchName': 'BOXER DUNCAN VILLAGE',
            'branchCode': '148145'
          },
          {
            'branchName': 'BOXER DUNDEE',
            'branchCode': '177705'
          },
          {
            'branchName': 'BOXER EAST LONDON',
            'branchCode': '100924'
          },
          {
            'branchName': 'BOXER ELLIOTDALE',
            'branchCode': '178505'
          },
          {
            'branchName': 'BOXER EMPANGENI MARKET',
            'branchCode': '135041'
          },
          {
            'branchName': 'BOXER EMPANGENI RAIL',
            'branchCode': '133126'
          },
          {
            'branchName': 'BOXER ENGCOBO',
            'branchCode': '139348'
          },
          {
            'branchName': 'BOXER ESHOWE',
            'branchCode': '194305'
          },
          {
            'branchName': 'BOXER ESTCOURT',
            'branchCode': '127227'
          },
          {
            'branchName': 'BOXER FLAGSTAFF',
            'branchCode': '100980'
          },
          {
            'branchName': 'BOXER FOLWENI',
            'branchCode': '101382'
          },
          {
            'branchName': 'BOXER GAMALAKHE',
            'branchCode': '101373'
          },
          {
            'branchName': 'BOXER GIYANI',
            'branchCode': '163545'
          },
          {
            'branchName': 'BOXER GRAAFF REINET',
            'branchCode': '100949'
          },
          {
            'branchName': 'BOXER GREYTOWN',
            'branchCode': '101310'
          },
          {
            'branchName': 'BOXER GREYTOWN',
            'branchCode': '114914'
          },
          {
            'branchName': 'BOXER GROBLERSDAL',
            'branchCode': '129826'
          },
          {
            'branchName': 'BOXER HAMMERSDAL',
            'branchCode': '113005'
          },
          {
            'branchName': 'BOXER HAZYVIEW',
            'branchCode': '167445'
          },
          {
            'branchName': 'BOXER HEBRON',
            'branchCode': '127617'
          },
          {
            'branchName': 'BOXER HLUHLUWE',
            'branchCode': '108012'
          },
          {
            'branchName': 'BOXER INZINGOLWENI',
            'branchCode': '101338'
          },
          {
            'branchName': 'BOXER ISIPINGO TAXI',
            'branchCode': '179241'
          },
          {
            'branchName': 'BOXER IXOPO',
            'branchCode': '194142'
          },
          {
            'branchName': 'BOXER JOZINI',
            'branchCode': '100955'
          },
          {
            'branchName': 'BOXER KAMA II',
            'branchCode': '126926'
          },
          {
            'branchName': 'BOXER KAMAQHEKEZA',
            'branchCode': '151842'
          },
          {
            'branchName': 'BOXER KING WILLIAMS TOWN',
            'branchCode': '116934'
          },
          {
            'branchName': 'BOXER KOKSTAD',
            'branchCode': '102642'
          },
          {
            'branchName': 'BOXER KWA THEMA',
            'branchCode': '100925'
          },
          {
            'branchName': 'BOXER KWATHEMA',
            'branchCode': '100952'
          },
          {
            'branchName': 'BOXER LEPHALALE',
            'branchCode': '100950'
          },
          {
            'branchName': 'BOXER LUSIKISIKI',
            'branchCode': '188110'
          },
          {
            'branchName': 'BOXER MACLEAR',
            'branchCode': '147945'
          },
          {
            'branchName': 'BOXER MADANTSANE',
            'branchCode': '101298'
          },
          {
            'branchName': 'BOXER MAFIKENG',
            'branchCode': '176242'
          },
          {
            'branchName': 'BOXER MALELANE',
            'branchCode': '106714'
          },
          {
            'branchName': 'BOXER MANGUZI',
            'branchCode': '126717'
          },
          {
            'branchName': 'BOXER MARIKANA',
            'branchCode': '100985'
          },
          {
            'branchName': 'BOXER MATATIELE',
            'branchCode': '177541'
          },
          {
            'branchName': 'BOXER MELMOTH',
            'branchCode': '196805'
          },
          {
            'branchName': 'BOXER MIDDLEBURG',
            'branchCode': '101013'
          },
          {
            'branchName': 'BOXER MKHUZE',
            'branchCode': '100933'
          },
          {
            'branchName': 'BOXER MOTHERWELL',
            'branchCode': '101335'
          },
          {
            'branchName': 'BOXER MOUNT FLETCHER',
            'branchCode': '199005'
          },
          {
            'branchName': 'BOXER MPULUZI',
            'branchCode': '101334'
          },
          {
            'branchName': 'BOXER MQANDULI',
            'branchCode': '194605'
          },
          {
            'branchName': 'BOXER MTHATHA 1',
            'branchCode': '196442'
          },
          {
            'branchName': 'BOXER MTHATHA 2',
            'branchCode': '101281'
          },
          {
            'branchName': 'BOXER MTUBATUBA NORTH',
            'branchCode': '101340'
          },
          {
            'branchName': 'BOXER MTUBATUBA SOUTH',
            'branchCode': '180705'
          },
          {
            'branchName': 'BOXER NDWEDWE',
            'branchCode': '100970'
          },
          {
            'branchName': 'BOXER NELSPRUIT',
            'branchCode': '183405'
          },
          {
            'branchName': 'BOXER NGQELENI',
            'branchCode': '101302'
          },
          {
            'branchName': 'BOXER NJOLI SQUARE',
            'branchCode': '100954'
          },
          {
            'branchName': 'BOXER NKANDLA',
            'branchCode': '108710'
          },
          {
            'branchName': 'BOXER NONGOMA',
            'branchCode': '191705'
          },
          {
            'branchName': 'BOXER NOORD STREET',
            'branchCode': '141205'
          },
          {
            'branchName': 'BOXER NQUTU',
            'branchCode': '112605'
          },
          {
            'branchName': 'BOXER NTABANKULU',
            'branchCode': '101045'
          },
          {
            'branchName': 'BOXER PIET RETIEF',
            'branchCode': '100975'
          },
          {
            'branchName': 'BOXER PIETERMARITZBURG',
            'branchCode': '156205'
          },
          {
            'branchName': 'BOXER PIETERMARITZBURG 2',
            'branchCode': '118334'
          },
          {
            'branchName': 'BOXER PINETOWN',
            'branchCode': '196305'
          },
          {
            'branchName': 'BOXER PORT EDWARD',
            'branchCode': '101379'
          },
          {
            'branchName': 'BOXER PORT ST JOHNS',
            'branchCode': '153105'
          },
          {
            'branchName': 'BOXER QUEENSTOWN',
            'branchCode': '101105'
          },
          {
            'branchName': 'BOXER QUMBU',
            'branchCode': '190905'
          },
          {
            'branchName': 'BOXER RICHARDS BAY',
            'branchCode': '163026'
          },
          {
            'branchName': 'BOXER RICHMOND',
            'branchCode': '130426'
          },
          {
            'branchName': 'BOXER RUSTENBURG 1',
            'branchCode': '170905'
          },
          {
            'branchName': 'BOXER RUSTENBURG 2',
            'branchCode': '100982'
          },
          {
            'branchName': 'BOXER SASELAMANI',
            'branchCode': '101305'
          },
          {
            'branchName': 'BOXER SCHOEMANSDAL',
            'branchCode': '180605'
          },
          {
            'branchName': 'BOXER SHARPVILLE',
            'branchCode': '100951'
          },
          {
            'branchName': 'BOXER STANGER',
            'branchCode': '144834'
          },
          {
            'branchName': 'BOXER STERKSPRUIT',
            'branchCode': '183341'
          },
          {
            'branchName': 'BOXER TAUNG',
            'branchCode': '118010'
          },
          {
            'branchName': 'BOXER THULAMAHASHE',
            'branchCode': '162245'
          },
          {
            'branchName': 'BOXER TSOLO',
            'branchCode': '125316'
          },
          {
            'branchName': 'BOXER TZANEEN',
            'branchCode': '182305'
          },
          {
            'branchName': 'BOXER ULUNDI',
            'branchCode': '197805'
          },
          {
            'branchName': 'BOXER UMZIMKULU',
            'branchCode': '114405'
          },
          {
            'branchName': 'BOXER UMZINTO',
            'branchCode': '101372'
          },
          {
            'branchName': 'BOXER VEREENIGING',
            'branchCode': '149017'
          },
          {
            'branchName': 'BOXER VEREENIGING',
            'branchCode': '179017'
          },
          {
            'branchName': 'BOXER VRYBURG',
            'branchCode': '179305'
          },
          {
            'branchName': 'BOXER VRYHEID',
            'branchCode': '146605'
          },
          {
            'branchName': 'BOXER WELKOM',
            'branchCode': '117834'
          },
          {
            'branchName': 'BOXER WEST STREET',
            'branchCode': '101222'
          },
          {
            'branchName': 'BOXER WILLOWVALE',
            'branchCode': '101203'
          },
          {
            'branchName': 'BR ADMIN GAUTENG',
            'branchCode': '145605'
          },
          {
            'branchName': 'BRAAMFONTEIN',
            'branchCode': '195005'
          },
          {
            'branchName': 'BRACKENFELL',
            'branchCode': '101216'
          },
          {
            'branchName': 'BRACKENFELL G4S',
            'branchCode': '101030'
          },
          {
            'branchName': 'BRAKPAN',
            'branchCode': '193942'
          },
          {
            'branchName': 'BRAKPAN',
            'branchCode': '101272'
          },
          {
            'branchName': 'BRANCH ADMIN CENTRE GAUTENG',
            'branchCode': '155705'
          },
          {
            'branchName': 'BRANCH ADMIN GAUTENG',
            'branchCode': '156405'
          },
          {
            'branchName': 'BRANCH ADMINISTRATION KZN',
            'branchCode': '131926'
          },
          {
            'branchName': 'BRANCH CLOSED',
            'branchCode': '101609'
          },
          {
            'branchName': 'BRAND ROAD',
            'branchCode': '174305'
          },
          {
            'branchName': 'BREE STREET CSC',
            'branchCode': '101186'
          },
          {
            'branchName': 'BRIXTON',
            'branchCode': '189505'
          },
          {
            'branchName': 'BROADACRES DAINFERN',
            'branchCode': '132805'
          },
          {
            'branchName': 'BRONKHORSTSPRUIT',
            'branchCode': '165245'
          },
          {
            'branchName': 'BROOKLYN',
            'branchCode': '163145'
          },
          {
            'branchName': 'BRYANSTON, SANDTON',
            'branchCode': '197105'
          },
          {
            'branchName': 'BUFFELSDOORN KLERKSDORP',
            'branchCode': '173626'
          },
          {
            'branchName': 'BULK PAYROLL SETTLEMENT',
            'branchCode': '101332'
          },
          {
            'branchName': 'BURGERFORT G4S',
            'branchCode': '101039'
          },
          {
            'branchName': 'BURGERSFORT',
            'branchCode': '141505'
          },
          {
            'branchName': 'BUS BANK REG LIMPOPO NW & VAAL',
            'branchCode': '149642'
          },
          {
            'branchName': 'BUSHBUCKRIDGE',
            'branchCode': '131725'
          },
          {
            'branchName': 'BUSINESS BANKING CLEARING',
            'branchCode': '129405'
          },
          {
            'branchName': 'BUSINESS BOLAND',
            'branchCode': '147005'
          },
          {
            'branchName': 'BUSINESS EASTERN CAPE',
            'branchCode': '126317'
          },
          {
            'branchName': 'BUSINESS EASTRAND',
            'branchCode': '128842'
          },
          {
            'branchName': 'BUSINESS FREE STATE',
            'branchCode': '166234'
          },
          {
            'branchName': 'BUSINESS GARDEN ROUTE',
            'branchCode': '162645'
          },
          {
            'branchName': 'BUSINESS KZN INLANDS',
            'branchCode': '116535'
          },
          {
            'branchName': 'BUSINESS MPUMALANGA',
            'branchCode': '146805'
          },
          {
            'branchName': 'BUSINESS NORTHRAND',
            'branchCode': '146905'
          },
          {
            'branchName': 'BUSINESS PRETORIA',
            'branchCode': '149745'
          },
          {
            'branchName': 'BUSINESS SOUTHERN PENINSULA',
            'branchCode': '123209'
          },
          {
            'branchName': 'BUSINESS WINELANDS',
            'branchCode': '149821'
          },
          {
            'branchName': 'BUTTERWORTH',
            'branchCode': '139440'
          },
          {
            'branchName': 'C.TOWN CASH CENTRE',
            'branchCode': '109709'
          },
          {
            'branchName': 'CAMPUS SQUARE',
            'branchCode': '158105'
          },
          {
            'branchName': 'CAPE MUTUAL MORTGAGE',
            'branchCode': '171209'
          },
          {
            'branchName': 'CAPE TOWN',
            'branchCode': '100909'
          },
          {
            'branchName': 'CAPE TOWN G4S',
            'branchCode': '101042'
          },
          {
            'branchName': 'CAPEGATE',
            'branchCode': '104509'
          },
          {
            'branchName': 'CARLETONVILLE',
            'branchCode': '174741'
          },
          {
            'branchName': 'CARLSWALD CENTRE',
            'branchCode': '177942'
          },
          {
            'branchName': 'CARNIVAL MALL',
            'branchCode': '144046'
          },
          {
            'branchName': 'CASCADES PMB',
            'branchCode': '134325'
          },
          {
            'branchName': 'CASH MANAGEMENT PROJECT CAPE',
            'branchCode': '171805'
          },
          {
            'branchName': 'CASH OPERATIONS',
            'branchCode': '183205'
          },
          {
            'branchName': 'CASH SETTLEMENTS',
            'branchCode': '199705'
          },
          {
            'branchName': 'CASTLE WALK',
            'branchCode': '151745'
          },
          {
            'branchName': 'CBON NAMCLEAR',
            'branchCode': '190025'
          },
          {
            'branchName': 'CBPO CORP & PLATIN OUTWARD P',
            'branchCode': '160645'
          },
          {
            'branchName': 'CBPO DRAFTS & BB OUTWARD PAY',
            'branchCode': '190005'
          },
          {
            'branchName': 'CBPO INWARD FOREIGN PAYMENTS',
            'branchCode': '183742'
          },
          {
            'branchName': 'CBPO RETAIL & SBS OUTWARD PA',
            'branchCode': '157905'
          },
          {
            'branchName': 'CDS SWIFT OPERATIONS',
            'branchCode': '180505'
          },
          {
            'branchName': 'CENTANI',
            'branchCode': '127816'
          },
          {
            'branchName': 'CENTRAL CASH',
            'branchCode': '173105'
          },
          {
            'branchName': 'CENTRAL CITY MABOPANE',
            'branchCode': '148526'
          },
          {
            'branchName': 'CENTRAL GAUTENG',
            'branchCode': '128405'
          },
          {
            'branchName': 'CENTRAL HUMAN RESOURCES DIV.',
            'branchCode': '188905'
          },
          {
            'branchName': 'CENTRAL WEST',
            'branchCode': '143526'
          },
          {
            'branchName': 'CENTRALISED COST',
            'branchCode': '115005'
          },
          {
            'branchName': 'CENTURION',
            'branchCode': '162145'
          },
          {
            'branchName': 'CENTURION LIFESTYLE CENTRE',
            'branchCode': '121914'
          },
          {
            'branchName': 'CENTURY CITY',
            'branchCode': '192621'
          },
          {
            'branchName': 'CERES',
            'branchCode': '124324'
          },
          {
            'branchName': 'CHARLESVILLE',
            'branchCode': '110705'
          },
          {
            'branchName': 'CHATS CENTRE',
            'branchCode': '136226'
          },
          {
            'branchName': 'CHATSWORTH',
            'branchCode': '132226'
          },
          {
            'branchName': 'CHRIS HANI CROSSINGS',
            'branchCode': '131605'
          },
          {
            'branchName': 'CITY CENTRE PIETERMARITZBURG',
            'branchCode': '156005'
          },
          {
            'branchName': 'CLAIRWOOD',
            'branchCode': '153526'
          },
          {
            'branchName': 'CLANWILLIAM',
            'branchCode': '153305'
          },
          {
            'branchName': 'CLAREMONT',
            'branchCode': '104609'
          },
          {
            'branchName': 'CLAREMONT, MAIN ROAD',
            'branchCode': '107809'
          },
          {
            'branchName': 'CLD MAN/ADMIN',
            'branchCode': '187505'
          },
          {
            'branchName': 'CLEARWATERS ROODEPOORT',
            'branchCode': '182505'
          },
          {
            'branchName': 'CLEVELAND G4S',
            'branchCode': '101044'
          },
          {
            'branchName': 'CLS 2011 CATERING DEPARTMENT',
            'branchCode': '183805'
          },
          {
            'branchName': 'COASTAL & INLAND BUSINESS UNIT',
            'branchCode': '164826'
          },
          {
            'branchName': 'COASTAL WEST HOMELOANS',
            'branchCode': '168110'
          },
          {
            'branchName': 'COMMERCIAL FINANCIAL PLANNING',
            'branchCode': '125705'
          },
          {
            'branchName': 'COMMERCIAL ROAD PE CSC',
            'branchCode': '101287'
          },
          {
            'branchName': 'CONSTANTIA CAPE TOWN',
            'branchCode': '101109'
          },
          {
            'branchName': 'CONSUMER BANKING 1',
            'branchCode': '117509'
          },
          {
            'branchName': 'CONSUMER BANKING 10',
            'branchCode': '109410'
          },
          {
            'branchName': 'CONSUMER BANKING 2',
            'branchCode': '107005'
          },
          {
            'branchName': 'CONSUMER BANKING 3',
            'branchCode': '166649'
          },
          {
            'branchName': 'CONSUMER BANKING 4',
            'branchCode': '125617'
          },
          {
            'branchName': 'CONSUMER BANKING 5',
            'branchCode': '164952'
          },
          {
            'branchName': 'CONSUMER BANKING 6',
            'branchCode': '127100'
          },
          {
            'branchName': 'CONSUMER BANKING 7',
            'branchCode': '159926'
          },
          {
            'branchName': 'CONSUMER BANKING 8',
            'branchCode': '189605'
          },
          {
            'branchName': 'CONTINGENCY NETWORK',
            'branchCode': '121417'
          },
          {
            'branchName': 'CONTINGENCY SS & A',
            'branchCode': '181641'
          },
          {
            'branchName': 'CORP & INTR CR ADMIN',
            'branchCode': '173205'
          },
          {
            'branchName': 'CORPORATE CLIENT SERVICES CT',
            'branchCode': '145209'
          },
          {
            'branchName': 'CORPORATE CLIENT SERVICES JHB',
            'branchCode': '145405'
          },
          {
            'branchName': 'CORPORATE CLIENT SERVICES PTA',
            'branchCode': '146245'
          },
          {
            'branchName': 'CORPORATE INSURANCE',
            'branchCode': '166005'
          },
          {
            'branchName': 'CORPSAVER CURRENT ACCOUNT',
            'branchCode': '161905'
          },
          {
            'branchName': 'COSMO MALL',
            'branchCode': '100993'
          },
          {
            'branchName': 'CPU PROCESSING DIP',
            'branchCode': '169945'
          },
          {
            'branchName': 'CPUT',
            'branchCode': '101175'
          },
          {
            'branchName': 'CREDIT EASTERN CAPE',
            'branchCode': '169317'
          },
          {
            'branchName': 'CRESTA',
            'branchCode': '191305'
          },
          {
            'branchName': 'CROSS BORDER RETAIL WEST GAUTE',
            'branchCode': '168005'
          },
          {
            'branchName': 'CT MUT OUT OF SCHEME',
            'branchCode': '171609'
          },
          {
            'branchName': 'DARLING',
            'branchCode': '154505'
          },
          {
            'branchName': 'DAVEYTON MALL',
            'branchCode': '185442'
          },
          {
            'branchName': 'DE DOORNS',
            'branchCode': '184805'
          },
          {
            'branchName': 'DEVEREUX AVENUE,VINCENT PARK',
            'branchCode': '189305'
          },
          {
            'branchName': 'DIAMOND EXCHANGE JOHANNESBURG',
            'branchCode': '193205'
          },
          {
            'branchName': 'DIE MEENT PTA CSC',
            'branchCode': '101244'
          },
          {
            'branchName': 'DIEPSLOT',
            'branchCode': '149205'
          },
          {
            'branchName': 'DILIKONG',
            'branchCode': '114205'
          },
          {
            'branchName': 'DIMBAZA',
            'branchCode': '112005'
          },
          {
            'branchName': 'DIP 1 MANAGEMENT',
            'branchCode': '168205'
          },
          {
            'branchName': 'DIP 1 SIGNATURE VERIFICATION',
            'branchCode': '145048'
          },
          {
            'branchName': 'DIP CAPE TOWN',
            'branchCode': '109909'
          },
          {
            'branchName': 'DIP KROONSTAD',
            'branchCode': '124035'
          },
          {
            'branchName': 'DIP KZN',
            'branchCode': '139926'
          },
          {
            'branchName': 'DIP NELSPRUIT',
            'branchCode': '124252'
          },
          {
            'branchName': 'DIP PRETORIA',
            'branchCode': '145309'
          },
          {
            'branchName': 'DIP RUSTENBURG',
            'branchCode': '101116'
          },
          {
            'branchName': 'DOBSONVILLE',
            'branchCode': '137941'
          },
          {
            'branchName': 'DOMESTIC TREASURY',
            'branchCode': '183105'
          },
          {
            'branchName': 'DOUGLASDALE',
            'branchCode': '137805'
          },
          {
            'branchName': 'DUBE',
            'branchCode': '184041'
          },
          {
            'branchName': 'DUNDEE',
            'branchCode': '169205'
          },
          {
            'branchName': 'DURBAN BUSINESS CENTRE',
            'branchCode': '179526'
          },
          {
            'branchName': 'DURBAN CASH CENTRE',
            'branchCode': '139626'
          },
          {
            'branchName': 'DURBAN CENTRAL',
            'branchCode': '144226'
          },
          {
            'branchName': 'DURBAN G4S',
            'branchCode': '101036'
          },
          {
            'branchName': 'DURBANVILLE WESTERN CAPE',
            'branchCode': '103710'
          },
          {
            'branchName': 'EAST LONDON CASH DEPOT',
            'branchCode': '120921'
          },
          {
            'branchName': 'EAST LONDON G4S',
            'branchCode': '101043'
          },
          {
            'branchName': 'EAST LONDON PROCESSING',
            'branchCode': '128721'
          },
          {
            'branchName': 'EAST RAND MALL',
            'branchCode': '113642'
          },
          {
            'branchName': 'EAST RAND MALL',
            'branchCode': '101273'
          },
          {
            'branchName': 'EAST RAND PROCESSING',
            'branchCode': '179942'
          },
          {
            'branchName': 'EASTGATE',
            'branchCode': '192405'
          },
          {
            'branchName': 'EBD EFT',
            'branchCode': '175305'
          },
          {
            'branchName': 'EBD REB ATMS',
            'branchCode': '177605'
          },
          {
            'branchName': 'EBONY PARK',
            'branchCode': '149305'
          },
          {
            'branchName': 'EDENDALE',
            'branchCode': '100944'
          },
          {
            'branchName': 'EDENVALE',
            'branchCode': '191042'
          },
          {
            'branchName': 'EKURHULENI MARKET',
            'branchCode': '101353'
          },
          {
            'branchName': 'ELECTRONIC  PAYMENT',
            'branchCode': '196005'
          },
          {
            'branchName': 'ELIM',
            'branchCode': '101090'
          },
          {
            'branchName': 'ELOFF GALLERIES CSC',
            'branchCode': '101185'
          },
          {
            'branchName': 'ELUKWATINI',
            'branchCode': '101169'
          },
          {
            'branchName': 'EMMBEDDED SUPPORT E. CAPE',
            'branchCode': '101089'
          },
          {
            'branchName': 'EMPANGENI',
            'branchCode': '130330'
          },
          {
            'branchName': 'EMPANGENI CBD',
            'branchCode': '156330'
          },
          {
            'branchName': 'EMPANGENI CSC',
            'branchCode': '101300'
          },
          {
            'branchName': 'EMPLOYEE SHARE TRUST',
            'branchCode': '118105'
          },
          {
            'branchName': 'ERMELO',
            'branchCode': '151644'
          },
          {
            'branchName': 'ESHOWE',
            'branchCode': '155205'
          },
          {
            'branchName': 'ESIKHAWINI',
            'branchCode': '135426'
          },
          {
            'branchName': 'ESTCOURT',
            'branchCode': '134925'
          },
          {
            'branchName': 'EUC MAINTENANCE ACCOUNT',
            'branchCode': '180105'
          },
          {
            'branchName': 'EVATON',
            'branchCode': '119641'
          },
          {
            'branchName': 'FBC NEDBANK HL GAUTENG EAST',
            'branchCode': '125905'
          },
          {
            'branchName': 'FBC NEDBANK HL GAUTENG EAST',
            'branchCode': '139005'
          },
          {
            'branchName': 'FBC NEDBANK HL GAUTENG WEST',
            'branchCode': '126405'
          },
          {
            'branchName': 'FBC NEDBANK HL GAUTENG WEST',
            'branchCode': '139105'
          },
          {
            'branchName': 'FBC NEDBANK HL KZN & E CAPE',
            'branchCode': '124705'
          },
          {
            'branchName': 'FBC NEDBANK HL KZN & E CAPE',
            'branchCode': '138705'
          },
          {
            'branchName': 'FBC NEDBANK HL OLD BUSINESS',
            'branchCode': '138605'
          },
          {
            'branchName': 'FBC NEDBANK HL W CAPE OLD BUS',
            'branchCode': '127305'
          },
          {
            'branchName': 'FBC NEDBANK HLWCAPEOLDBUSINESS',
            'branchCode': '139205'
          },
          {
            'branchName': 'FBC NEDENTERPRISE NEW',
            'branchCode': '168148'
          },
          {
            'branchName': 'FBC PEOPLES MICROLOANS OLD BUS',
            'branchCode': '102305'
          },
          {
            'branchName': 'FCS BURGERSFORT',
            'branchCode': '101363'
          },
          {
            'branchName': 'FCS GEORGE',
            'branchCode': '101366'
          },
          {
            'branchName': 'FCS PORTSHEPSTONE',
            'branchCode': '101348'
          },
          {
            'branchName': 'FCS QUEENSTOWN',
            'branchCode': '106099'
          },
          {
            'branchName': 'FEATHERBROOKE',
            'branchCode': '181334'
          },
          {
            'branchName': 'FINANCE DIVISION',
            'branchCode': '186105'
          },
          {
            'branchName': 'FISH HOEK',
            'branchCode': '121121'
          },
          {
            'branchName': 'FLORA CENTRE FLORIDA',
            'branchCode': '192841'
          },
          {
            'branchName': 'FLORIDA',
            'branchCode': '190541'
          },
          {
            'branchName': 'FORDSBURG JOHANNESBURG',
            'branchCode': '195305'
          },
          {
            'branchName': 'FOREIGN BANKS ( VOSTRO ) ADMIN',
            'branchCode': '198605'
          },
          {
            'branchName': 'FORESHORE CAPE TOWN',
            'branchCode': '108309'
          },
          {
            'branchName': 'FOURWAYS MALL',
            'branchCode': '168405'
          },
          {
            'branchName': 'FOX STREET',
            'branchCode': '190805'
          },
          {
            'branchName': 'FRANSCHHOEK',
            'branchCode': '167005'
          },
          {
            'branchName': 'FX INTERNATIONAL TREASURY',
            'branchCode': '101347'
          },
          {
            'branchName': 'G & D MONTE CASINO',
            'branchCode': '101376'
          },
          {
            'branchName': 'G & D SUN COAST CASINO',
            'branchCode': '100922'
          },
          {
            'branchName': 'G & D TIMES SQUARE',
            'branchCode': '101383'
          },
          {
            'branchName': 'G&D SILVER STAR CASINO (NEW)',
            'branchCode': '163445'
          },
          {
            'branchName': 'GABRIEL ROAD PLUMSTEAD',
            'branchCode': '119409'
          },
          {
            'branchName': 'GAME CITY',
            'branchCode': '128905'
          },
          {
            'branchName': 'GANSBAAI',
            'branchCode': '182005'
          },
          {
            'branchName': 'GARANKUWA',
            'branchCode': '110434'
          },
          {
            'branchName': 'GARDENS CAPE TOWN',
            'branchCode': '101009'
          },
          {
            'branchName': 'GATEWAY CASH CENTRE',
            'branchCode': '151505'
          },
          {
            'branchName': 'GATEWAY UMHLANGA RIDGE',
            'branchCode': '189905'
          },
          {
            'branchName': 'GAUTENG CENTRAL SBS',
            'branchCode': '101133'
          },
          {
            'branchName': 'GAUTENG DIV ACQUISITION',
            'branchCode': '101339'
          },
          {
            'branchName': 'GAUTENG HOME LOANS',
            'branchCode': '154305'
          },
          {
            'branchName': 'GAUTENG NORTH & WEST SBS',
            'branchCode': '101129'
          },
          {
            'branchName': 'GAUTENG PROPERTY ASSESSORS',
            'branchCode': '155805'
          },
          {
            'branchName': 'GAUTENG S&E SBS STRATEGY',
            'branchCode': '101132'
          },
          {
            'branchName': 'GAUTENG WEST INSTALMENT CREDIT',
            'branchCode': '157505'
          },
          {
            'branchName': 'GB SPECIALISED PROCESSING',
            'branchCode': '171042'
          },
          {
            'branchName': 'GBC CAPE TOWN',
            'branchCode': '109509'
          },
          {
            'branchName': 'GBC GAUTENG DOCUMENTARIES',
            'branchCode': '192705'
          },
          {
            'branchName': 'GBS FINANCIAL SYSTEM SUPPORT',
            'branchCode': '149905'
          },
          {
            'branchName': 'GEORGE CSC',
            'branchCode': '101288'
          },
          {
            'branchName': 'GEORGE G4S',
            'branchCode': '101035'
          },
          {
            'branchName': 'GEORGE GARDEN ROUTE MALL',
            'branchCode': '153614'
          },
          {
            'branchName': 'GERMISTON',
            'branchCode': '101275'
          },
          {
            'branchName': 'GERMISTON',
            'branchCode': '191842'
          },
          {
            'branchName': 'GERMISTON GOLDEN WALK',
            'branchCode': '184942'
          },
          {
            'branchName': 'GEZINA',
            'branchCode': '160345'
          },
          {
            'branchName': 'GHANDI SQUARE ELS',
            'branchCode': '101187'
          },
          {
            'branchName': 'GILLWELL MALL',
            'branchCode': '101290'
          },
          {
            'branchName': 'GIYANI',
            'branchCode': '134849'
          },
          {
            'branchName': 'GIYANI CSC',
            'branchCode': '101255'
          },
          {
            'branchName': 'GIYANI CSC',
            'branchCode': '187926'
          },
          {
            'branchName': 'GLEN ACRES',
            'branchCode': '143342'
          },
          {
            'branchName': 'GLOBAL BUSINESS CENTRE',
            'branchCode': '132026'
          },
          {
            'branchName': 'GLOBAL BUSINESS CENTRE PAARL',
            'branchCode': '108205'
          },
          {
            'branchName': 'GO BANKING 123009',
            'branchCode': '123009'
          },
          {
            'branchName': 'GO BANKING 124641',
            'branchCode': '124641'
          },
          {
            'branchName': 'GO BANKING 124810',
            'branchCode': '124810'
          },
          {
            'branchName': 'GO BANKING 124910',
            'branchCode': '124910'
          },
          {
            'branchName': 'GO BANKING 145710',
            'branchCode': '145710'
          },
          {
            'branchName': 'GO BANKING 177410',
            'branchCode': '177410'
          },
          {
            'branchName': 'GO BANKING 181100',
            'branchCode': '181100'
          },
          {
            'branchName': 'GOB EASTERN CAPE',
            'branchCode': '158410'
          },
          {
            'branchName': 'GOB FREE STATE',
            'branchCode': '181110'
          },
          {
            'branchName': 'GOB SALES',
            'branchCode': '123710'
          },
          {
            'branchName': 'GOLDEN ACRE MALL CSC CT',
            'branchCode': '101218'
          },
          {
            'branchName': 'GOODWOOD',
            'branchCode': '104410'
          },
          {
            'branchName': 'GOVAN MBEKI',
            'branchCode': '101291'
          },
          {
            'branchName': 'GOVAN MBEKI BRANCH',
            'branchCode': '121217'
          },
          {
            'branchName': 'GRAAFF - REINET',
            'branchCode': '101005'
          },
          {
            'branchName': 'GRABOUW',
            'branchCode': '154905'
          },
          {
            'branchName': 'GRAHAMSTOWN',
            'branchCode': '122005'
          },
          {
            'branchName': 'GRANDCENTRAL',
            'branchCode': '134225'
          },
          {
            'branchName': 'GREENACRES',
            'branchCode': '126817'
          },
          {
            'branchName': 'GREENACRES THE BRIDGE',
            'branchCode': '121617'
          },
          {
            'branchName': 'GREENHOUSE FSC 1',
            'branchCode': '125805'
          },
          {
            'branchName': 'GREENHOUSE REPURCHASE',
            'branchCode': '117705'
          },
          {
            'branchName': 'GREENHOUSE SERIES 4',
            'branchCode': '144105'
          },
          {
            'branchName': 'GREENSHOP NEDBANK',
            'branchCode': '119005'
          },
          {
            'branchName': 'GREENSTONE MALL',
            'branchCode': '102210'
          },
          {
            'branchName': 'GREENSTONE MALL',
            'branchCode': '101270'
          },
          {
            'branchName': 'GREYTOWN',
            'branchCode': '134431'
          },
          {
            'branchName': 'GROBLERSDAL',
            'branchCode': '167147'
          },
          {
            'branchName': 'GROUP TECHNOLOGY DIVISIONAL',
            'branchCode': '111105'
          },
          {
            'branchName': 'GUGULETHU',
            'branchCode': '168705'
          },
          {
            'branchName': 'H.R.PESONAL BANK E.CAPE',
            'branchCode': '189005'
          },
          {
            'branchName': 'HAMMERSDALE',
            'branchCode': '101198'
          },
          {
            'branchName': 'HARTBEESFONTEIN',
            'branchCode': '171738'
          },
          {
            'branchName': 'HARTBEESPORT DAM',
            'branchCode': '104905'
          },
          {
            'branchName': 'HARTSWATER',
            'branchCode': '166701'
          },
          {
            'branchName': 'HATFIELD BUSINESS CENTRE',
            'branchCode': '122245'
          },
          {
            'branchName': 'HATFIELD PRETORIA',
            'branchCode': '160245'
          },
          {
            'branchName': 'HAYFIELDS',
            'branchCode': '134025'
          },
          {
            'branchName': 'HAZY VIEW',
            'branchCode': '117209'
          },
          {
            'branchName': 'HEIDELBURG/NIGEL ANGELO CENTR',
            'branchCode': '129005'
          },
          {
            'branchName': 'HEIDERAND MALL',
            'branchCode': '111805'
          },
          {
            'branchName': 'HERMANUS',
            'branchCode': '134512'
          },
          {
            'branchName': 'HIGHLANDS NORTH',
            'branchCode': '174205'
          },
          {
            'branchName': 'HIGHVELD MALL',
            'branchCode': '105505'
          },
          {
            'branchName': 'HILLCREST, KZN',
            'branchCode': '133826'
          },
          {
            'branchName': 'HILTON',
            'branchCode': '151925'
          },
          {
            'branchName': 'HINTERLAND DELMAS',
            'branchCode': '137128'
          },
          {
            'branchName': 'HINTERLAND WINTERTON',
            'branchCode': '101378'
          },
          {
            'branchName': 'HOME LOANS DURBAN',
            'branchCode': '145826'
          },
          {
            'branchName': 'HOME LOANS GAUTENG',
            'branchCode': '145505'
          },
          {
            'branchName': 'HOME LOANS WESTERN CAPE',
            'branchCode': '145109'
          },
          {
            'branchName': 'HOUT BAY',
            'branchCode': '167609'
          },
          {
            'branchName': 'HOWICH',
            'branchCode': '165705'
          },
          {
            'branchName': 'HUMANSDORP',
            'branchCode': '188405'
          },
          {
            'branchName': 'IDUTYWA',
            'branchCode': '181805'
          },
          {
            'branchName': 'IKAPA CBD',
            'branchCode': '105812'
          },
          {
            'branchName': 'ILLOVO',
            'branchCode': '197605'
          },
          {
            'branchName': 'IMPERIAL BANK',
            'branchCode': '178142'
          },
          {
            'branchName': 'INDEPENDENT CONTRACTORS',
            'branchCode': '195905'
          },
          {
            'branchName': 'INDUSTRIA',
            'branchCode': '164505'
          },
          {
            'branchName': 'INLAND GARDEN ROUTE',
            'branchCode': '128505'
          },
          {
            'branchName': 'INTERMEDIARY GAUTENG',
            'branchCode': '140205'
          },
          {
            'branchName': 'INTERMEDIARY KZN',
            'branchCode': '114316'
          },
          {
            'branchName': 'INVESTMENT CENTRE',
            'branchCode': '116010'
          },
          {
            'branchName': 'INVESTMENT RECONS',
            'branchCode': '199805'
          },
          {
            'branchName': 'INVESTOR SERVICES',
            'branchCode': '184105'
          },
          {
            'branchName': 'IRENE',
            'branchCode': '148345'
          },
          {
            'branchName': 'ISANDO',
            'branchCode': '196142'
          },
          {
            'branchName': 'ISIPINGO',
            'branchCode': '149405'
          },
          {
            'branchName': 'IXOPO',
            'branchCode': '142234'
          },
          {
            'branchName': 'JABULANI MALL',
            'branchCode': '162545'
          },
          {
            'branchName': 'JABULANI MALL CSC GT',
            'branchCode': '101320'
          },
          {
            'branchName': 'JACARANDA',
            'branchCode': '111005'
          },
          {
            'branchName': 'JANE FURSE',
            'branchCode': '101168'
          },
          {
            'branchName': "JEFFREY'S BAAI",
            'branchCode': '177205'
          },
          {
            'branchName': 'JORISSEN',
            'branchCode': '101237'
          },
          {
            'branchName': 'JOZINI',
            'branchCode': '101000'
          },
          {
            'branchName': 'JUBILEE MALL',
            'branchCode': '186905'
          },
          {
            'branchName': 'KALAHARI MALL',
            'branchCode': '101333'
          },
          {
            'branchName': 'KANYAMAZANE',
            'branchCode': '120117'
          },
          {
            'branchName': 'KAPANONG',
            'branchCode': '119105'
          },
          {
            'branchName': 'KARAGLEN',
            'branchCode': '137342'
          },
          {
            'branchName': 'KATLEHONG',
            'branchCode': '114005'
          },
          {
            'branchName': 'KEMPTON PARK',
            'branchCode': '198742'
          },
          {
            'branchName': 'KEMPTON PARK PLAZA',
            'branchCode': '185342'
          },
          {
            'branchName': 'KEMPTON SQUARE CSC',
            'branchCode': '101271'
          },
          {
            'branchName': 'KENILWORTH',
            'branchCode': '164205'
          },
          {
            'branchName': 'KHAYELITSHA MALL',
            'branchCode': '172305'
          },
          {
            'branchName': 'KILLARNEY',
            'branchCode': '191605'
          },
          {
            'branchName': 'KIMBERLEY',
            'branchCode': '103502'
          },
          {
            'branchName': 'KIMBERLEY G4S',
            'branchCode': '101017'
          },
          {
            'branchName': 'KING WILLIAMSTOWN',
            'branchCode': '125519'
          },
          {
            'branchName': 'KINGS ROAD',
            'branchCode': '140605'
          },
          {
            'branchName': 'KINGS ROAD',
            'branchCode': '133626'
          },
          {
            'branchName': 'KLEINMOND',
            'branchCode': '131505'
          },
          {
            'branchName': 'KLERKSDORP',
            'branchCode': '174138'
          },
          {
            'branchName': 'KLERKSDORP CITY MALL CSC',
            'branchCode': '101265'
          },
          {
            'branchName': 'KLERKSDORP G4S',
            'branchCode': '101016'
          },
          {
            'branchName': 'KNOWLES IN STORE',
            'branchCode': '136826'
          },
          {
            'branchName': 'KNYSNA',
            'branchCode': '108914'
          },
          {
            'branchName': 'KOKSTAD',
            'branchCode': '101323'
          },
          {
            'branchName': 'KORSTEN',
            'branchCode': '123317'
          },
          {
            'branchName': 'KRAAIFONTEIN',
            'branchCode': '112305'
          },
          {
            'branchName': 'KROONSTAD',
            'branchCode': '112436'
          },
          {
            'branchName': 'KRUGERSDOORP',
            'branchCode': '182641'
          },
          {
            'branchName': 'KRUGERSDORP',
            'branchCode': '157605'
          },
          {
            'branchName': 'KRUGERSDORP',
            'branchCode': '198841'
          },
          {
            'branchName': 'KRUGERSDORP CENTRAL',
            'branchCode': '101285'
          },
          {
            'branchName': 'KRUGERSDORP G4S',
            'branchCode': '101024'
          },
          {
            'branchName': 'KUILSRIVIER, CHURCH SQUARE',
            'branchCode': '115310'
          },
          {
            'branchName': 'KWA DUKUZA',
            'branchCode': '132326'
          },
          {
            'branchName': 'KWA MANYANDU',
            'branchCode': '128126'
          },
          {
            'branchName': 'KWA THEMA',
            'branchCode': '187205'
          },
          {
            'branchName': 'KWAGGA',
            'branchCode': '123647'
          },
          {
            'branchName': 'LA LUCIA MALL KZN',
            'branchCode': '135626'
          },
          {
            'branchName': 'LADYBRAND',
            'branchCode': '101374'
          },
          {
            'branchName': 'LADYSMITH',
            'branchCode': '133025'
          },
          {
            'branchName': 'LADYSMITH  PROCESSING',
            'branchCode': '158825'
          },
          {
            'branchName': 'LADYSMITH CSC',
            'branchCode': '101238'
          },
          {
            'branchName': 'LADYSMITH OVAL',
            'branchCode': '150925'
          },
          {
            'branchName': 'LAKESIDE MALL',
            'branchCode': '190342'
          },
          {
            'branchName': 'LANDROS MARE SCHEME',
            'branchCode': '165545'
          },
          {
            'branchName': 'LANGEBERG MALL',
            'branchCode': '147205'
          },
          {
            'branchName': 'LANGENHOVENPARK',
            'branchCode': '101346'
          },
          {
            'branchName': 'LEBOWAKGOMO',
            'branchCode': '118705'
          },
          {
            'branchName': 'LEGAL RECOVERIES',
            'branchCode': '168805'
          },
          {
            'branchName': 'LENDING MANAGEMENT',
            'branchCode': '166145'
          },
          {
            'branchName': 'LEPHALALE',
            'branchCode': '144547'
          },
          {
            'branchName': 'LIMPOPO MALL',
            'branchCode': '166948'
          },
          {
            'branchName': 'LOCH LOGAN',
            'branchCode': '106505'
          },
          {
            'branchName': 'LONEHILL',
            'branchCode': '102809'
          },
          {
            'branchName': 'LONGMARKET STREET',
            'branchCode': '140405'
          },
          {
            'branchName': 'LONGMARKET STREET PMB CSC',
            'branchCode': '101280'
          },
          {
            'branchName': 'LOUIS TRICHARDT G4S',
            'branchCode': '101015'
          },
          {
            'branchName': 'LOUIS TRICHARDT PCCH',
            'branchCode': '100959'
          },
          {
            'branchName': 'LYDENBURG',
            'branchCode': '120205'
          },
          {
            'branchName': 'M  &  F HOME LOANS',
            'branchCode': '171505'
          },
          {
            'branchName': 'MAAKE PLAZA',
            'branchCode': '125210'
          },
          {
            'branchName': 'MAHWELERENG',
            'branchCode': '101166'
          },
          {
            'branchName': 'MAITLAND CSC',
            'branchCode': '101261'
          },
          {
            'branchName': 'MAITLAND STREET BLOEMFONTEIN',
            'branchCode': '110234'
          },
          {
            'branchName': 'MAKHAZA',
            'branchCode': '155405'
          },
          {
            'branchName': 'MALAMULELE',
            'branchCode': '101252'
          },
          {
            'branchName': 'MALELANE',
            'branchCode': '105609'
          },
          {
            'branchName': 'MALL OF THE NORTH',
            'branchCode': '171105'
          },
          {
            'branchName': 'MALL OF THE SOUTH',
            'branchCode': '101337'
          },
          {
            'branchName': 'MALMESBURY',
            'branchCode': '154605'
          },
          {
            'branchName': 'MALVERN',
            'branchCode': '112205'
          },
          {
            'branchName': 'MAMELODI',
            'branchCode': '179442'
          },
          {
            'branchName': 'MAMELODI TSHWANE CSC',
            'branchCode': '101245'
          },
          {
            'branchName': 'MANAGEMENT & LEADERSHIP',
            'branchCode': '131205'
          },
          {
            'branchName': 'MAPONYA MALL',
            'branchCode': '112142'
          },
          {
            'branchName': 'MARBLE HALL G4S',
            'branchCode': '101028'
          },
          {
            'branchName': 'MARBLEHALL CASH CENTRE',
            'branchCode': '152805'
          },
          {
            'branchName': 'MARGATE',
            'branchCode': '180005'
          },
          {
            'branchName': 'MARINE DRIVE SHELLEY BEACH',
            'branchCode': '142528'
          },
          {
            'branchName': 'MARKET STREET',
            'branchCode': '144405'
          },
          {
            'branchName': 'MARKS PARK CSC',
            'branchCode': '101314'
          },
          {
            'branchName': 'MATATIELE',
            'branchCode': '185505'
          },
          {
            'branchName': 'MAYNARDVILLE',
            'branchCode': '117409'
          },
          {
            'branchName': 'MDANTSANE',
            'branchCode': '105005'
          },
          {
            'branchName': 'MENLYN PRETORIA',
            'branchCode': '160545'
          },
          {
            'branchName': 'MEYERSDAL',
            'branchCode': '152042'
          },
          {
            'branchName': 'MEYERTON',
            'branchCode': '101330'
          },
          {
            'branchName': 'MIDDELBURG MALL',
            'branchCode': '169050'
          },
          {
            'branchName': 'MIDLANDS MALL',
            'branchCode': '136125'
          },
          {
            'branchName': 'MIDRAND BUSINESS CENTRE',
            'branchCode': '135142'
          },
          {
            'branchName': 'MIDRAND CSC',
            'branchCode': '101246'
          },
          {
            'branchName': 'MILNERTON',
            'branchCode': '109309'
          },
          {
            'branchName': 'MIMOSA',
            'branchCode': '117134'
          },
          {
            'branchName': 'MITCHELL STREET PRETORIA',
            'branchCode': '165145'
          },
          {
            'branchName': "MITCHELL'S PL PROMENADE MALL",
            'branchCode': '107909'
          },
          {
            'branchName': 'MMABATHO',
            'branchCode': '114710'
          },
          {
            'branchName': 'MOKOPANE',
            'branchCode': '142748'
          },
          {
            'branchName': 'MOKOPANE CSC',
            'branchCode': '101250'
          },
          {
            'branchName': 'MONSTERLUS',
            'branchCode': '141734'
          },
          {
            'branchName': 'MOORREESBURG',
            'branchCode': '155005'
          },
          {
            'branchName': 'MOUNTAIN MILL WORCESTER',
            'branchCode': '141005'
          },
          {
            'branchName': 'MOUTSE MALL DENNILTON',
            'branchCode': '109605'
          },
          {
            'branchName': 'MSA VIRTUAL SALES',
            'branchCode': '181741'
          },
          {
            'branchName': 'MST SALES BAC OFFICE',
            'branchCode': '134749'
          },
          {
            'branchName': 'MST SALES BAC OFFICE KZN',
            'branchCode': '194705'
          },
          {
            'branchName': 'MST SALES BAC OFFICE WC',
            'branchCode': '178905'
          },
          {
            'branchName': 'MT EDGECOMBE',
            'branchCode': '150405'
          },
          {
            'branchName': 'MTHATHA CBD',
            'branchCode': '113105'
          },
          {
            'branchName': 'MTHATHA G4S',
            'branchCode': '101037'
          },
          {
            'branchName': 'MTHATHA PLAZA',
            'branchCode': '105705'
          },
          {
            'branchName': 'MTUBATUBA',
            'branchCode': '135526'
          },
          {
            'branchName': 'MUSGRAVE DURBAN',
            'branchCode': '130126'
          },
          {
            'branchName': 'MUTUAL PARK',
            'branchCode': '115209'
          },
          {
            'branchName': 'MVUSULUDZO MALL THOHOYANDO',
            'branchCode': '101258'
          },
          {
            'branchName': 'N@W MY BONUS',
            'branchCode': '126005'
          },
          {
            'branchName': 'N1 CITY CENTRE',
            'branchCode': '109810'
          },
          {
            'branchName': 'NATAL UNIVERSITY',
            'branchCode': '130905'
          },
          {
            'branchName': 'NBC PIETERMARITZBURG',
            'branchCode': '123825'
          },
          {
            'branchName': 'NBPL CUSTOMER ANALYSIS',
            'branchCode': '165845'
          },
          {
            'branchName': 'NCC: CARD SERVICE',
            'branchCode': '145905'
          },
          {
            'branchName': 'NED EXCHANGE',
            'branchCode': '108621'
          },
          {
            'branchName': 'NED PNP ARBOUR CROSSING',
            'branchCode': '175005'
          },
          {
            'branchName': 'NED PNP PULA',
            'branchCode': '195405'
          },
          {
            'branchName': 'NED PNP SENAOANE',
            'branchCode': '122617'
          },
          {
            'branchName': 'NEDBANK  COGHB',
            'branchCode': '104109'
          },
          {
            'branchName': 'NEDBANK 64 ELOFF STREET',
            'branchCode': '188705'
          },
          {
            'branchName': 'NEDBANK ACORNHOEK',
            'branchCode': '170505'
          },
          {
            'branchName': 'NEDBANK AGANANG',
            'branchCode': '100976'
          },
          {
            'branchName': 'NEDBANK ALEX MALL',
            'branchCode': '101380'
          },
          {
            'branchName': 'NEDBANK ATLANTIS',
            'branchCode': '126621'
          },
          {
            'branchName': 'NEDBANK AVONWOOD',
            'branchCode': '100990'
          },
          {
            'branchName': 'NEDBANK BALFOUR PARK',
            'branchCode': '151105'
          },
          {
            'branchName': 'NEDBANK BALLITO',
            'branchCode': '131026'
          },
          {
            'branchName': 'NEDBANK BARBERTON',
            'branchCode': '101004'
          },
          {
            'branchName': 'NEDBANK BAYWEST MALL',
            'branchCode': '101318'
          },
          {
            'branchName': 'NEDBANK BEAUFORT WEST',
            'branchCode': '101006'
          },
          {
            'branchName': 'NEDBANK BELA BELA',
            'branchCode': '100946'
          },
          {
            'branchName': 'NEDBANK BELLVILLE CSC',
            'branchCode': '101211'
          },
          {
            'branchName': 'NEDBANK BENMORE GARDENS',
            'branchCode': '197305'
          },
          {
            'branchName': 'NEDBANK BETHAL',
            'branchCode': '101085'
          },
          {
            'branchName': 'NEDBANK BLACKHEATH',
            'branchCode': '158205'
          },
          {
            'branchName': 'NEDBANK BLOUBERG MALL BOCHUM',
            'branchCode': '100996'
          },
          {
            'branchName': 'NEDBANK BLUFF DURBAN',
            'branchCode': '130826'
          },
          {
            'branchName': 'NEDBANK BOKSBURG',
            'branchCode': '184342'
          },
          {
            'branchName': 'NEDBANK BOTSHABELO',
            'branchCode': '101111'
          },
          {
            'branchName': 'NEDBANK BOXER HLABISA',
            'branchCode': '101312'
          },
          {
            'branchName': 'NEDBANK BOXER MADADENI',
            'branchCode': '101358'
          },
          {
            'branchName': 'NEDBANK BOXER MITCHELLS PLAIN',
            'branchCode': '101385'
          },
          {
            'branchName': 'NEDBANK BOXER OSIZWENI',
            'branchCode': '101371'
          },
          {
            'branchName': 'NEDBANK BOXER ZEERUST',
            'branchCode': '101386'
          },
          {
            'branchName': 'NEDBANK BREDASDORP',
            'branchCode': '125142'
          },
          {
            'branchName': 'NEDBANK BRIDGE CITY',
            'branchCode': '148905'
          },
          {
            'branchName': 'NEDBANK BRITS',
            'branchCode': '187646'
          },
          {
            'branchName': 'NEDBANK BRITS MALL',
            'branchCode': '100932'
          },
          {
            'branchName': 'NEDBANK BT NGEBS MTHATHA',
            'branchCode': '101331'
          },
          {
            'branchName': 'NEDBANK BURGERSFORT CSC',
            'branchCode': '101256'
          },
          {
            'branchName': 'NEDBANK CALEDON',
            'branchCode': '183509'
          },
          {
            'branchName': 'NEDBANK CAPE TOWN STATION',
            'branchCode': '100989'
          },
          {
            'branchName': 'NEDBANK CAPRICORN',
            'branchCode': '101254'
          },
          {
            'branchName': 'NEDBANK CENTURION CSC',
            'branchCode': '101241'
          },
          {
            'branchName': 'NEDBANK CFD',
            'branchCode': '140105'
          },
          {
            'branchName': 'NEDBANK CHRIS HANI SQUARE',
            'branchCode': '101328'
          },
          {
            'branchName': 'NEDBANK CHURCH STREET CSC',
            'branchCode': '101242'
          },
          {
            'branchName': 'NEDBANK CHURCH STREET PMB',
            'branchCode': '154025'
          },
          {
            'branchName': 'NEDBANK CIRCUS TRIANGLE',
            'branchCode': '101317'
          },
          {
            'branchName': 'NEDBANK CLEARY PARK',
            'branchCode': '101209'
          },
          {
            'branchName': 'NEDBANK CRADLESTONE MALL',
            'branchCode': '101196'
          },
          {
            'branchName': 'NEDBANK DAINFERN SQUARE',
            'branchCode': '101360'
          },
          {
            'branchName': 'NEDBANK DAYIZENZA PLAZA',
            'branchCode': '141445'
          },
          {
            'branchName': 'NEDBANK DENDRON',
            'branchCode': '146748'
          },
          {
            'branchName': 'NEDBANK DEVELOPMENT BANK',
            'branchCode': '147505'
          },
          {
            'branchName': 'NEDBANK DIE HEUWEL',
            'branchCode': '158550'
          },
          {
            'branchName': 'NEDBANK DIEPKLOOF SQUARE',
            'branchCode': '100998'
          },
          {
            'branchName': 'NEDBANK DU NOON',
            'branchCode': '147405'
          },
          {
            'branchName': 'NEDBANK DURBAN NORTH KZN',
            'branchCode': '135226'
          },
          {
            'branchName': 'NEDBANK EAST GAUTENG',
            'branchCode': '116435'
          },
          {
            'branchName': 'NEDBANK EIKESTAD MALL STELLE',
            'branchCode': '101219'
          },
          {
            'branchName': 'NEDBANK EMOYENI MALL',
            'branchCode': '101361'
          },
          {
            'branchName': 'NEDBANK ESIKHALENI',
            'branchCode': '136025'
          },
          {
            'branchName': 'NEDBANK EYETHU ORANGE FARM',
            'branchCode': '100999'
          },
          {
            'branchName': 'NEDBANK FEATHER BROOKE',
            'branchCode': '181342'
          },
          {
            'branchName': 'NEDBANK FLEURDAL',
            'branchCode': '101002'
          },
          {
            'branchName': 'NEDBANK FOREST HILL',
            'branchCode': '101257'
          },
          {
            'branchName': 'NEDBANK GAUTRAIN SANDTON',
            'branchCode': '101384'
          },
          {
            'branchName': 'NEDBANK GBC DURBAN DOCUMENTS',
            'branchCode': '138425'
          },
          {
            'branchName': 'NEDBANK GEORGE',
            'branchCode': '109114'
          },
          {
            'branchName': 'NEDBANK GERMISTON CSC',
            'branchCode': '101276'
          },
          {
            'branchName': 'NEDBANK GHANDI SQUARE',
            'branchCode': '101319'
          },
          {
            'branchName': 'NEDBANK GOLDFIELDS MALL',
            'branchCode': '119526'
          },
          {
            'branchName': 'NEDBANK GREENSIDE',
            'branchCode': '197505'
          },
          {
            'branchName': 'NEDBANK HARDING',
            'branchCode': '187705'
          },
          {
            'branchName': 'NEDBANK HARRISMITH',
            'branchCode': '101107'
          },
          {
            'branchName': 'NEDBANK HEIDELBURG',
            'branchCode': '101108'
          },
          {
            'branchName': 'NEDBANK HEMINGWAYS',
            'branchCode': '122305'
          },
          {
            'branchName': 'NEDBANK HIGHFLATS',
            'branchCode': '102709'
          },
          {
            'branchName': 'NEDBANK HILLBROW',
            'branchCode': '101181'
          },
          {
            'branchName': 'NEDBANK HYDE PARK',
            'branchCode': '197205'
          },
          {
            'branchName': 'NEDBANK INTERMEDIARIES',
            'branchCode': '160849'
          },
          {
            'branchName': 'NEDBANK KAGISO MALL',
            'branchCode': '100988'
          },
          {
            'branchName': 'NEDBANK KATHU',
            'branchCode': '101193'
          },
          {
            'branchName': 'NEDBANK KLIPFONTEIN',
            'branchCode': '158350'
          },
          {
            'branchName': 'NEDBANK KLIPTOWN',
            'branchCode': '154742'
          },
          {
            'branchName': 'NEDBANK KLOOF',
            'branchCode': '159326'
          },
          {
            'branchName': 'NEDBANK KOKSTAD',
            'branchCode': '132526'
          },
          {
            'branchName': 'NEDBANK KURUMAN',
            'branchCode': '100947'
          },
          {
            'branchName': 'NEDBANK KWA GUQA',
            'branchCode': '101225'
          },
          {
            'branchName': 'NEDBANK KWA MANYANDU',
            'branchCode': '128226'
          },
          {
            'branchName': 'NEDBANK KWA MASHU',
            'branchCode': '173742'
          },
          {
            'branchName': 'NEDBANK KZN',
            'branchCode': '147850'
          },
          {
            'branchName': 'NEDBANK LANSDOWNE CORNER',
            'branchCode': '100972'
          },
          {
            'branchName': 'NEDBANK LEPHALALE MALL',
            'branchCode': '101253'
          },
          {
            'branchName': 'NEDBANK LICHTENBURG',
            'branchCode': '100945'
          },
          {
            'branchName': 'NEDBANK LOUIS TRICHARDT',
            'branchCode': '134649'
          },
          {
            'branchName': 'NEDBANK LOUIS TRICHARDT',
            'branchCode': '143249'
          },
          {
            'branchName': 'NEDBANK LUSIKISIKI',
            'branchCode': '141309'
          },
          {
            'branchName': 'NEDBANK LYNNRIDGE MALL',
            'branchCode': '161845'
          },
          {
            'branchName': 'NEDBANK MACLEAN STREET KWT',
            'branchCode': '100991'
          },
          {
            'branchName': 'NEDBANK MAHIKENG',
            'branchCode': '101114'
          },
          {
            'branchName': 'NEDBANK MALL @EMBA',
            'branchCode': '101359'
          },
          {
            'branchName': 'NEDBANK MALL OF AFRICA',
            'branchCode': '101362'
          },
          {
            'branchName': 'NEDBANK MALVERN',
            'branchCode': '193805'
          },
          {
            'branchName': 'NEDBANK MANDINI KZN',
            'branchCode': '106305'
          },
          {
            'branchName': 'NEDBANK MARBLE HALL',
            'branchCode': '101110'
          },
          {
            'branchName': 'NEDBANK MATLOSAN',
            'branchCode': '101308'
          },
          {
            'branchName': 'NEDBANK MBEKWENI',
            'branchCode': '172505'
          },
          {
            'branchName': 'NEDBANK MELROSE ARCH',
            'branchCode': '196605'
          },
          {
            'branchName': 'NEDBANK METLIFE MALL KWT',
            'branchCode': '101292'
          },
          {
            'branchName': 'NEDBANK MIDDLEBURG',
            'branchCode': '158650'
          },
          {
            'branchName': 'NEDBANK MIDDLEBURG COWEN N',
            'branchCode': '101251'
          },
          {
            'branchName': 'NEDBANK MIDRAND',
            'branchCode': '168642'
          },
          {
            'branchName': 'NEDBANK MITCHELL PLAIN TOWN',
            'branchCode': '144905'
          },
          {
            'branchName': 'NEDBANK MITCHELLS PLAIN WEST',
            'branchCode': '100963'
          },
          {
            'branchName': 'NEDBANK MODI MALL',
            'branchCode': '101199'
          },
          {
            'branchName': 'NEDBANK MODJADJI PLAZA',
            'branchCode': '100941'
          },
          {
            'branchName': 'NEDBANK MONTAGUE GARDENS',
            'branchCode': '188309'
          },
          {
            'branchName': 'NEDBANK MONTANA PRETORIA',
            'branchCode': '155345'
          },
          {
            'branchName': 'NEDBANK MONTCLAIRE',
            'branchCode': '137005'
          },
          {
            'branchName': 'NEDBANK MORULENG',
            'branchCode': '101197'
          },
          {
            'branchName': 'NEDBANK MOSSEL BAY',
            'branchCode': '168905'
          },
          {
            'branchName': 'NEDBANK MOTHERWELL',
            'branchCode': '100973'
          },
          {
            'branchName': 'NEDBANK MOUNT FRERE',
            'branchCode': '100940'
          },
          {
            'branchName': 'NEDBANK MTHATHA CITY CENTRE',
            'branchCode': '101293'
          },
          {
            'branchName': 'NEDBANK MUSINA',
            'branchCode': '119742'
          },
          {
            'branchName': 'NEDBANK NBC DRIEHOEK',
            'branchCode': '176842'
          },
          {
            'branchName': 'NEDBANK NELSON MANDELA SQUARE',
            'branchCode': '122405'
          },
          {
            'branchName': 'NEDBANK NELSPRUIT CROSSING',
            'branchCode': '117605'
          },
          {
            'branchName': 'NEDBANK NELSPRUIT PLAZA',
            'branchCode': '101249'
          },
          {
            'branchName': 'NEDBANK NEW BRANCH TRAN IN',
            'branchCode': '101172'
          },
          {
            'branchName': 'NEDBANK NEWTOWN CAMPUS',
            'branchCode': '132630'
          },
          {
            'branchName': 'NEDBANK NGCOBO',
            'branchCode': '100992'
          },
          {
            'branchName': 'NEDBANK NOMZAMO',
            'branchCode': '136526'
          },
          {
            'branchName': 'NEDBANK NONESI MALL  QUEENSTWN',
            'branchCode': '101104'
          },
          {
            'branchName': 'NEDBANK NONGOMA',
            'branchCode': '135926'
          },
          {
            'branchName': 'NEDBANK NONQUBELA',
            'branchCode': '110634'
          },
          {
            'branchName': 'NEDBANK NORTH CAPE MALL',
            'branchCode': '140902'
          },
          {
            'branchName': 'NEDBANK OVERPORT CITY DURBAN',
            'branchCode': '131326'
          },
          {
            'branchName': 'NEDBANK PAARL CSC',
            'branchCode': '101217'
          },
          {
            'branchName': 'NEDBANK PARK CENTRAL',
            'branchCode': '103310'
          },
          {
            'branchName': 'NEDBANK PARYS',
            'branchCode': '101309'
          },
          {
            'branchName': 'NEDBANK PIET RETIEF',
            'branchCode': '101336'
          },
          {
            'branchName': 'NEDBANK PIKETBERG',
            'branchCode': '156905'
          },
          {
            'branchName': 'NEDBANK PINE CITY',
            'branchCode': '153726'
          },
          {
            'branchName': 'NEDBANK PLETTENBERG',
            'branchCode': '109014'
          },
          {
            'branchName': 'NEDBANK POD BLOEMFONTEIN',
            'branchCode': '117334'
          },
          {
            'branchName': 'NEDBANK POLOKWANE BUSINESS C',
            'branchCode': '111905'
          },
          {
            'branchName': 'NEDBANK POLOKWANE CITY CENTER',
            'branchCode': '101248'
          },
          {
            'branchName': 'NEDBANK POLOKWANE MAIN',
            'branchCode': '141148'
          },
          {
            'branchName': 'NEDBANK PONGOLA',
            'branchCode': '102005'
          },
          {
            'branchName': 'NEDBANK POSTMASBURG',
            'branchCode': '101008'
          },
          {
            'branchName': 'NEDBANK PRETORIA STATION CSC',
            'branchCode': '101247'
          },
          {
            'branchName': 'NEDBANK PRIVATE BANK',
            'branchCode': '115405'
          },
          {
            'branchName': 'NEDBANK PRIVATE WEALTH',
            'branchCode': '172805'
          },
          {
            'branchName': 'NEDBANK PROPERTY',
            'branchCode': '182405'
          },
          {
            'branchName': 'NEDBANK PROTEA GLEN',
            'branchCode': '100995'
          },
          {
            'branchName': 'NEDBANK RANDBURG',
            'branchCode': '198405'
          },
          {
            'branchName': 'NEDBANK RANDFONTEIN',
            'branchCode': '198941'
          },
          {
            'branchName': 'NEDBANK RUSTENBURG',
            'branchCode': '160746'
          },
          {
            'branchName': 'NEDBANK SARON',
            'branchCode': '101010'
          },
          {
            'branchName': 'NEDBANK SASOLBURG',
            'branchCode': '176436'
          },
          {
            'branchName': 'NEDBANK SCHOEMAN STREET POLOKW',
            'branchCode': '199405'
          },
          {
            'branchName': 'NEDBANK SCOTTBURGH',
            'branchCode': '163828'
          },
          {
            'branchName': 'NEDBANK SEA POINT',
            'branchCode': '106909'
          },
          {
            'branchName': 'NEDBANK SECUNDA',
            'branchCode': '159444'
          },
          {
            'branchName': 'NEDBANK SESHEGO CIRCLE',
            'branchCode': '101194'
          },
          {
            'branchName': 'NEDBANK SHELLY BEACH',
            'branchCode': '139728'
          },
          {
            'branchName': 'NEDBANK SILVERTON',
            'branchCode': '164445'
          },
          {
            'branchName': 'NEDBANK SMITH STR DURBAN',
            'branchCode': '130526'
          },
          {
            'branchName': 'NEDBANK SOSHANGUVE PICK & PAY',
            'branchCode': '147605'
          },
          {
            'branchName': 'NEDBANK SOUTH AFRICA',
            'branchCode': '198765',
            'acceptsRealtimeAVS': true,
            'acceptsBatchAVS': true
          },
          {
            'branchName': 'NEDBANK SPARE',
            'branchCode': '147105'
          },
          {
            'branchName': 'NEDBANK SS&A @ MOTIONS',
            'branchCode': '101204'
          },
          {
            'branchName': 'NEDBANK SYDENHAM',
            'branchCode': '103409'
          },
          {
            'branchName': 'NEDBANK TABLEVIEW',
            'branchCode': '108809'
          },
          {
            'branchName': 'NEDBANK THABANCHU',
            'branchCode': '101113'
          },
          {
            'branchName': 'NEDBANK TOWN SQUARE',
            'branchCode': '198510'
          },
          {
            'branchName': 'NEDBANK TURFLOOP',
            'branchCode': '101350'
          },
          {
            'branchName': 'NEDBANK UITENHAGE MALL',
            'branchCode': '115809'
          },
          {
            'branchName': 'NEDBANK VENDA PLAZA THOHYANDOU',
            'branchCode': '172142'
          },
          {
            'branchName': 'NEDBANK VEREENIGING',
            'branchCode': '180837'
          },
          {
            'branchName': 'NEDBANK VEREENIGING',
            'branchCode': '172937'
          },
          {
            'branchName': 'NEDBANK VIRTUAL SALES',
            'branchCode': '195605'
          },
          {
            'branchName': 'NEDBANK VRYBURG',
            'branchCode': '100943'
          },
          {
            'branchName': 'NEDBANK WCAPE',
            'branchCode': '114609'
          },
          {
            'branchName': 'NEDBANK WEST GAUTENG HOME LOAN',
            'branchCode': '172737'
          },
          {
            'branchName': 'NEDBANK WESTGATE LOWER LEVEL',
            'branchCode': '186541'
          },
          {
            'branchName': 'NEDBANK WESTONARIA',
            'branchCode': '144345'
          },
          {
            'branchName': 'NEDBANK WHITE RIVER',
            'branchCode': '101003'
          },
          {
            'branchName': 'NEDBANK WOODMEAD',
            'branchCode': '157852'
          },
          {
            'branchName': 'NEDBANK WYNBERG',
            'branchCode': '183605'
          },
          {
            'branchName': 'NEDBANK ZEERUST',
            'branchCode': '101223'
          },
          {
            'branchName': 'NEDBANK ZEVENWACHT',
            'branchCode': '115109'
          },
          {
            'branchName': 'NEDCAP - FIC OPS',
            'branchCode': '157005'
          },
          {
            'branchName': 'NEDCOR BANK SINGAPORE',
            'branchCode': '141305'
          },
          {
            'branchName': 'NEDCOR GUARANTEES',
            'branchCode': '130005'
          },
          {
            'branchName': 'NEDCOR PROPERTY FINANCE',
            'branchCode': '170705'
          },
          {
            'branchName': 'NEDFLEET',
            'branchCode': '189405'
          },
          {
            'branchName': 'NEDPERSONAL',
            'branchCode': '181205'
          },
          {
            'branchName': 'NEEDFLEET',
            'branchCode': '102405'
          },
          {
            'branchName': 'NELSPRUIT',
            'branchCode': '158952'
          },
          {
            'branchName': 'NELSPRUIT G4S',
            'branchCode': '101025'
          },
          {
            'branchName': 'NETBANK GENERAL',
            'branchCode': '152505'
          },
          {
            'branchName': 'NETWORK SERVICES',
            'branchCode': '178205'
          },
          {
            'branchName': 'NEW CASTLE PCCH',
            'branchCode': '100958'
          },
          {
            'branchName': 'NEW GERMANY CSC',
            'branchCode': '101321'
          },
          {
            'branchName': 'NEWCASTLE',
            'branchCode': '133724'
          },
          {
            'branchName': 'NEWCASTLE G4S',
            'branchCode': '101020'
          },
          {
            'branchName': 'NEWCASTLE HARDING STREET',
            'branchCode': '158024'
          },
          {
            'branchName': 'NEWCASTLE SCOTT STREET CSC',
            'branchCode': '101327'
          },
          {
            'branchName': 'NEWTOWN JUNCTION',
            'branchCode': '152442'
          },
          {
            'branchName': 'NEWTOWN JUNCTION',
            'branchCode': '152705'
          },
          {
            'branchName': 'NEWTOWN PARK',
            'branchCode': '121317'
          },
          {
            'branchName': 'NGIB HEAD OFFICE',
            'branchCode': '175905'
          },
          {
            'branchName': 'NGQELENI',
            'branchCode': '105105'
          },
          {
            'branchName': 'NICOLWAY',
            'branchCode': '152205'
          },
          {
            'branchName': 'NIGEL',
            'branchCode': '166305'
          },
          {
            'branchName': 'NJOLI SQUARE',
            'branchCode': '123902'
          },
          {
            'branchName': 'NOORDHOEK',
            'branchCode': '125009'
          },
          {
            'branchName': 'NORTH WEST AREA OFFICE',
            'branchCode': '181505'
          },
          {
            'branchName': 'NORTHGATE',
            'branchCode': '169805'
          },
          {
            'branchName': 'NORTHMEAD BENONI',
            'branchCode': '194842'
          },
          {
            'branchName': 'NORWOOD',
            'branchCode': '191905'
          },
          {
            'branchName': 'NQUTHU PLAZA',
            'branchCode': '100942'
          },
          {
            'branchName': 'NRRB CAPE',
            'branchCode': '150109'
          },
          {
            'branchName': 'NRRB JHB',
            'branchCode': '194205'
          },
          {
            'branchName': 'NRRB KZN',
            'branchCode': '150326'
          },
          {
            'branchName': 'NRRB PRETORIA',
            'branchCode': '152645'
          },
          {
            'branchName': 'NYANGA JUNCTIONS',
            'branchCode': '193142'
          },
          {
            'branchName': 'O R TAMBO AIRPORT',
            'branchCode': '193742'
          },
          {
            'branchName': 'OLD SIEMERT ROAD JHB',
            'branchCode': '150605'
          },
          {
            'branchName': 'OLIEVENHOUTBOSCH',
            'branchCode': '101001'
          },
          {
            'branchName': 'OPERATIONS & PROCESS',
            'branchCode': '101163'
          },
          {
            'branchName': 'OUDTSHOORN',
            'branchCode': '175205'
          },
          {
            'branchName': 'OUTGOING UNPAIDS PROCESSING',
            'branchCode': '199905'
          },
          {
            'branchName': 'OXFORD STREET EAST LONDON',
            'branchCode': '121021'
          },
          {
            'branchName': 'P & P BLOEMFONTEIN',
            'branchCode': '143738'
          },
          {
            'branchName': 'P & P BRACKENFELL',
            'branchCode': '163605'
          },
          {
            'branchName': 'P & P DURBAN NORTH',
            'branchCode': '170834'
          },
          {
            'branchName': 'P N P BEDWORTH PARK',
            'branchCode': '142034'
          },
          {
            'branchName': 'P&P NORTHGATE',
            'branchCode': '118805'
          },
          {
            'branchName': 'P.E. CASH CENTRE',
            'branchCode': '129717'
          },
          {
            'branchName': 'PAARDEN EILAND',
            'branchCode': '109209'
          },
          {
            'branchName': 'PAARL',
            'branchCode': '101910'
          },
          {
            'branchName': 'PAARL LADY GREY',
            'branchCode': '114810'
          },
          {
            'branchName': 'PAARL MALL',
            'branchCode': '154805'
          },
          {
            'branchName': 'PALEDI',
            'branchCode': '138805'
          },
          {
            'branchName': 'PALM GATE KURUMAN',
            'branchCode': '101007'
          },
          {
            'branchName': 'PALM SPRINGS',
            'branchCode': '183942'
          },
          {
            'branchName': 'PARK CENTRAL',
            'branchCode': '101188'
          },
          {
            'branchName': 'PARK STATION',
            'branchCode': '101805'
          },
          {
            'branchName': 'PARKLANDS',
            'branchCode': '120710'
          },
          {
            'branchName': 'PARKTOWN',
            'branchCode': '194405'
          },
          {
            'branchName': 'PAROW',
            'branchCode': '102510'
          },
          {
            'branchName': 'PAROW CSC',
            'branchCode': '101210'
          },
          {
            'branchName': 'PAVILION',
            'branchCode': '138226'
          },
          {
            'branchName': 'PAYROLL ADMINISTRATION GSSC',
            'branchCode': '118905'
          },
          {
            'branchName': 'PAYROLL PROCESSING',
            'branchCode': '184605'
          },
          {
            'branchName': 'PCG BLOEMFONTEIN',
            'branchCode': '137605'
          },
          {
            'branchName': 'PCG JHB SOUTH RAND',
            'branchCode': '115610'
          },
          {
            'branchName': 'PCG KLERKSDORP',
            'branchCode': '146352'
          },
          {
            'branchName': 'PCG LONG MEADOW',
            'branchCode': '199305'
          },
          {
            'branchName': 'PCG NELSPRUIT',
            'branchCode': '142605'
          },
          {
            'branchName': 'PCG POLOKWANE',
            'branchCode': '191205'
          },
          {
            'branchName': 'PCG PRETORIA',
            'branchCode': '165645'
          },
          {
            'branchName': 'PCG RUSTERNBURG',
            'branchCode': '142405'
          },
          {
            'branchName': 'PCG VEREENIGING',
            'branchCode': '148805'
          },
          {
            'branchName': 'PCG WELKOM',
            'branchCode': '118205'
          },
          {
            'branchName': 'PCG WEST RAND',
            'branchCode': '167905'
          },
          {
            'branchName': 'PCG WITBANK',
            'branchCode': '128305'
          },
          {
            'branchName': 'PEOPLES BALFOUR PARK',
            'branchCode': '189808'
          },
          {
            'branchName': 'PEOPLES CAPITAL ONE',
            'branchCode': '174509'
          },
          {
            'branchName': 'PEOPLES COSY CORNER',
            'branchCode': '152925'
          },
          {
            'branchName': 'PEOPLES GEORGE',
            'branchCode': '153630'
          },
          {
            'branchName': 'PEOPLES GREYTOWN',
            'branchCode': '159231'
          },
          {
            'branchName': 'PEOPLES INVESTMENT LOANS',
            'branchCode': '159226'
          },
          {
            'branchName': 'PEOPLES MORTGAGE LENDING',
            'branchCode': '185005'
          },
          {
            'branchName': 'PEOPLES MORTGAGE LENDING CAPE',
            'branchCode': '144605'
          },
          {
            'branchName': 'PEOPLES MORTGAGE LENDING KZN',
            'branchCode': '186605'
          },
          {
            'branchName': 'PEP BANK MICROLOANS',
            'branchCode': '119905'
          },
          {
            'branchName': 'PERSONAL FINANCE PLANNING',
            'branchCode': '164705'
          },
          {
            'branchName': 'PHALABORWA',
            'branchCode': '162452'
          },
          {
            'branchName': 'PHALABORWA OUTLET (BRN CLOSED)',
            'branchCode': '175605'
          },
          {
            'branchName': 'PHILIPPI',
            'branchCode': '107510'
          },
          {
            'branchName': 'PHOENIX',
            'branchCode': '159129'
          },
          {
            'branchName': 'PHUMULANI MALL TEMBISA',
            'branchCode': '157342'
          },
          {
            'branchName': 'PHUTHADITJHABA',
            'branchCode': '138126'
          },
          {
            'branchName': 'PIER 14',
            'branchCode': '122905'
          },
          {
            'branchName': 'PIETERMARITZBURG CASH CENTRE',
            'branchCode': '124425'
          },
          {
            'branchName': 'PIETERMARITZBURG G4S',
            'branchCode': '101019'
          },
          {
            'branchName': 'PIETERMARITZBURG PCCH',
            'branchCode': '127529'
          },
          {
            'branchName': 'PINE WALK',
            'branchCode': '101326'
          },
          {
            'branchName': 'PINELANDS',
            'branchCode': '104709'
          },
          {
            'branchName': 'PINETOWN',
            'branchCode': '133926'
          },
          {
            'branchName': 'PINETOWN BUSINESS CENTRE',
            'branchCode': '131826'
          },
          {
            'branchName': 'PML CENTRALISED GAUTENG',
            'branchCode': '187805'
          },
          {
            'branchName': 'PML CENTRALISED KZN',
            'branchCode': '132426'
          },
          {
            'branchName': 'PML CENTRALISED WC',
            'branchCode': '189205'
          },
          {
            'branchName': 'PNP  BOKSBURG',
            'branchCode': '110534'
          },
          {
            'branchName': 'PNP  OTTERY',
            'branchCode': '163745'
          },
          {
            'branchName': 'PNP ACORNHOEK',
            'branchCode': '177305'
          },
          {
            'branchName': 'PNP ALEXANDRA',
            'branchCode': '101014'
          },
          {
            'branchName': 'PNP ALIWAL NORTH',
            'branchCode': '174637'
          },
          {
            'branchName': 'PNP BARAGWANATH',
            'branchCode': '155105'
          },
          {
            'branchName': 'PNP BEDFORD CENTRE',
            'branchCode': '177002'
          },
          {
            'branchName': 'PNP BENMORE GARDENS',
            'branchCode': '192005'
          },
          {
            'branchName': 'PNP BIRCHLEIGH',
            'branchCode': '132726'
          },
          {
            'branchName': 'PNP BLACKHEATH',
            'branchCode': '192205'
          },
          {
            'branchName': 'PNP BOARDWALK',
            'branchCode': '129525'
          },
          {
            'branchName': 'PNP BONAERO PARK',
            'branchCode': '179005'
          },
          {
            'branchName': 'PNP BRANDWAG',
            'branchCode': '192142'
          },
          {
            'branchName': 'PNP BRENTWOOD',
            'branchCode': '136617'
          },
          {
            'branchName': 'PNP CAMPUS SQUARE',
            'branchCode': '148245'
          },
          {
            'branchName': 'PNP CANAL WALK',
            'branchCode': '173805'
          },
          {
            'branchName': 'PNP CAPEGATE',
            'branchCode': '178841'
          },
          {
            'branchName': 'PNP CARLTON CENTRE',
            'branchCode': '173505'
          },
          {
            'branchName': 'PNP CEDAR ROAD',
            'branchCode': '177146'
          },
          {
            'branchName': 'PNP CENTURION',
            'branchCode': '187126'
          },
          {
            'branchName': 'PNP CHATSWORTH',
            'branchCode': '101207'
          },
          {
            'branchName': 'PNP CLAREMONT',
            'branchCode': '103109'
          },
          {
            'branchName': 'PNP CLEARWATER MALL',
            'branchCode': '182141'
          },
          {
            'branchName': 'PNP CLEARY PARK',
            'branchCode': '133226'
          },
          {
            'branchName': 'PNP COMMERCIAL ROAD',
            'branchCode': '154117'
          },
          {
            'branchName': 'PNP CRESTA',
            'branchCode': '178605'
          },
          {
            'branchName': 'PNP EERSTE RIVER',
            'branchCode': '110310'
          },
          {
            'branchName': 'PNP ELGIN',
            'branchCode': '100967'
          },
          {
            'branchName': 'PNP ELUKWATINI',
            'branchCode': '100974'
          },
          {
            'branchName': 'PNP FAERIE GLEN',
            'branchCode': '113805'
          },
          {
            'branchName': 'PNP FLEURDAL',
            'branchCode': '196205'
          },
          {
            'branchName': 'PNP GALESHEWE',
            'branchCode': '101086'
          },
          {
            'branchName': 'PNP GALLO MANOR',
            'branchCode': '164305'
          },
          {
            'branchName': 'PNP GLEN GARRY',
            'branchCode': '198241'
          },
          {
            'branchName': 'PNP GLEN MARAIS',
            'branchCode': '116205'
          },
          {
            'branchName': 'PNP GREENSTONE',
            'branchCode': '137741'
          },
          {
            'branchName': 'PNP GROBLERSDAL',
            'branchCode': '126117'
          },
          {
            'branchName': 'PNP HAMMANSKRAAL',
            'branchCode': '144705'
          },
          {
            'branchName': 'PNP HAZELDENE',
            'branchCode': '168352'
          },
          {
            'branchName': 'PNP HOEDSPRUIT',
            'branchCode': '101093'
          },
          {
            'branchName': 'PNP HURLINGHAM',
            'branchCode': '154205'
          },
          {
            'branchName': 'PNP HYDE PARK',
            'branchCode': '126217'
          },
          {
            'branchName': 'PNP IRENE',
            'branchCode': '149505'
          },
          {
            'branchName': 'PNP JANE FURSE',
            'branchCode': '105342'
          },
          {
            'branchName': 'PNP KEMPTON GATE',
            'branchCode': '179105'
          },
          {
            'branchName': 'PNP KENSINGTON',
            'branchCode': '167705'
          },
          {
            'branchName': 'PNP KING WILLIAMS TOWN',
            'branchCode': '143026'
          },
          {
            'branchName': 'PNP KINGSCOURT',
            'branchCode': '140836'
          },
          {
            'branchName': 'PNP KLERKSDORP',
            'branchCode': '110835'
          },
          {
            'branchName': 'PNP KWA THEMA',
            'branchCode': '101087'
          },
          {
            'branchName': 'PNP LANGENHOVEN PARK',
            'branchCode': '151205'
          },
          {
            'branchName': 'PNP LESEDI',
            'branchCode': '191405'
          },
          {
            'branchName': 'PNP LETLHABILE',
            'branchCode': '101092'
          },
          {
            'branchName': 'PNP LIBERTY MALL',
            'branchCode': '136929'
          },
          {
            'branchName': 'PNP LINKHILLS',
            'branchCode': '176105'
          },
          {
            'branchName': 'PNP LOCH LOGAN',
            'branchCode': '194505'
          },
          {
            'branchName': 'PNP LONGBEACH',
            'branchCode': '176905'
          },
          {
            'branchName': 'PNP LOUIS BOTHA',
            'branchCode': '100983'
          },
          {
            'branchName': 'PNP LYDENBURG',
            'branchCode': '180205'
          },
          {
            'branchName': 'PNP MABOPANE',
            'branchCode': '160145'
          },
          {
            'branchName': 'PNP MAHUBE CITY',
            'branchCode': '100957'
          },
          {
            'branchName': 'PNP MAPONYA MALL SOWETO',
            'branchCode': '130726'
          },
          {
            'branchName': 'PNP MARBLE HALL',
            'branchCode': '197405'
          },
          {
            'branchName': 'PNP MATOKS',
            'branchCode': '162805'
          },
          {
            'branchName': 'PNP MDANTSANE',
            'branchCode': '107309'
          },
          {
            'branchName': 'PNP MEADOWLANDS',
            'branchCode': '146042'
          },
          {
            'branchName': 'PNP MEYERTON',
            'branchCode': '158742'
          },
          {
            'branchName': 'PNP MONTANA',
            'branchCode': '170105'
          },
          {
            'branchName': 'PNP MTHATHA',
            'branchCode': '100977'
          },
          {
            'branchName': 'PNP MULBARTON',
            'branchCode': '185841'
          },
          {
            'branchName': 'PNP NELSPRUIT CITRUS CRESCENT',
            'branchCode': '168542'
          },
          {
            'branchName': 'PNP NEW BRIGHTON',
            'branchCode': '155505'
          },
          {
            'branchName': 'PNP NEW REDRUTH ALBERTON',
            'branchCode': '106809'
          },
          {
            'branchName': 'PNP NOORDSTAD',
            'branchCode': '114505'
          },
          {
            'branchName': 'PNP NORTHAM',
            'branchCode': '100968'
          },
          {
            'branchName': 'PNP NORWOOD',
            'branchCode': '106605'
          },
          {
            'branchName': 'PNP ORANGE FARM',
            'branchCode': '100978'
          },
          {
            'branchName': 'PNP PAARL',
            'branchCode': '126521'
          },
          {
            'branchName': 'PNP PIET RETIEF',
            'branchCode': '169109'
          },
          {
            'branchName': 'PNP PIETERMARITZBURG',
            'branchCode': '127426'
          },
          {
            'branchName': 'PNP PLATTEKLOOF',
            'branchCode': '151042'
          },
          {
            'branchName': 'PNP POTCHEF STROOM',
            'branchCode': '184441'
          },
          {
            'branchName': 'PNP PRINCESS CROSSING',
            'branchCode': '150005'
          },
          {
            'branchName': 'PNP PROMENADE',
            'branchCode': '129128'
          },
          {
            'branchName': 'PNP PROTEA NORTH',
            'branchCode': '192941'
          },
          {
            'branchName': 'PNP QUEENSTOWN',
            'branchCode': '148410'
          },
          {
            'branchName': 'PNP RIVERSIDE MALL',
            'branchCode': '159805'
          },
          {
            'branchName': 'PNP RIVONIA',
            'branchCode': '152305'
          },
          {
            'branchName': 'PNP ROSEBANK',
            'branchCode': '179745'
          },
          {
            'branchName': 'PNP ROYLDENE KIMBERLEY',
            'branchCode': '178705'
          },
          {
            'branchName': 'PNP RUSTENBURG',
            'branchCode': '113505'
          },
          {
            'branchName': 'PNP SOMERSET MALL',
            'branchCode': '192305'
          },
          {
            'branchName': 'PNP SOUTHGATE',
            'branchCode': '146448'
          },
          {
            'branchName': 'PNP STEELEDALE',
            'branchCode': '156705'
          },
          {
            'branchName': 'PNP STELLENBOSCH',
            'branchCode': '106109'
          },
          {
            'branchName': 'PNP TABLEVIEW',
            'branchCode': '196505'
          },
          {
            'branchName': 'PNP TEMBISA',
            'branchCode': '195705'
          },
          {
            'branchName': 'PNP THE BOULDERS',
            'branchCode': '177805'
          },
          {
            'branchName': 'PNP THE GLEN',
            'branchCode': '189805'
          },
          {
            'branchName': 'PNP THE GROVE',
            'branchCode': '187305'
          },
          {
            'branchName': 'PNP THE MALL CENTURION',
            'branchCode': '182742'
          },
          {
            'branchName': 'PNP THE REEDS',
            'branchCode': '100971'
          },
          {
            'branchName': 'PNP THREE RIVERS',
            'branchCode': '172637'
          },
          {
            'branchName': 'PNP TOKAI',
            'branchCode': '150805'
          },
          {
            'branchName': 'PNP TOP SPOT',
            'branchCode': '127926'
          },
          {
            'branchName': 'PNP TYGER VALLEY',
            'branchCode': '156105'
          },
          {
            'branchName': 'PNP TZANEEN',
            'branchCode': '106412'
          },
          {
            'branchName': 'PNP ULUNDI',
            'branchCode': '100984'
          },
          {
            'branchName': 'PNP UPINGTON',
            'branchCode': '100964'
          },
          {
            'branchName': 'PNP VAAL MALL',
            'branchCode': '128026'
          },
          {
            'branchName': 'PNP VAN RIEBEECK PARK',
            'branchCode': '100966'
          },
          {
            'branchName': 'PNP VINCENT PARK',
            'branchCode': '129205'
          },
          {
            'branchName': 'PNP WATERFALL MALL',
            'branchCode': '142135'
          },
          {
            'branchName': 'PNP WESTGATE',
            'branchCode': '196705'
          },
          {
            'branchName': 'PNP WESTWOOD',
            'branchCode': '199205'
          },
          {
            'branchName': 'PNP WILLIAM MOFFET PE',
            'branchCode': '111505'
          },
          {
            'branchName': 'PNP WITBANK',
            'branchCode': '176538'
          },
          {
            'branchName': 'PNP WONDERBOOM JUNCTION',
            'branchCode': '182837'
          },
          {
            'branchName': 'PNP WONDERPARK',
            'branchCode': '137545'
          },
          {
            'branchName': 'PNP WOODMEAD',
            'branchCode': '142305'
          },
          {
            'branchName': 'PNP WORKSHOP',
            'branchCode': '113305'
          },
          {
            'branchName': 'POD GOERGE',
            'branchCode': '155914'
          },
          {
            'branchName': 'POD POLOKANE',
            'branchCode': '116348'
          },
          {
            'branchName': 'POD PORT ELIZABETH',
            'branchCode': '129917'
          },
          {
            'branchName': 'POLOKWANE G4S',
            'branchCode': '101022'
          },
          {
            'branchName': 'POLOKWANE LANDROS MARE STR',
            'branchCode': '142948'
          },
          {
            'branchName': 'PORT ALFRED',
            'branchCode': '107410'
          },
          {
            'branchName': 'PORT ELIZABETH G4S',
            'branchCode': '101023'
          },
          {
            'branchName': 'PORT ELIZABETH GLOBAL BUS CNT',
            'branchCode': '116717'
          },
          {
            'branchName': 'PORT SHEPSTONE',
            'branchCode': '139828'
          },
          {
            'branchName': 'PORT SHEPSTONE CENTRAL',
            'branchCode': '162328'
          },
          {
            'branchName': 'PORT SHEPSTONE CSC',
            'branchCode': '101325'
          },
          {
            'branchName': 'PORT SHEPSTONE G4S',
            'branchCode': '101026'
          },
          {
            'branchName': 'POTCHEFSTROOM',
            'branchCode': '171338'
          },
          {
            'branchName': 'POTCHEFSTROOM UNIVERSITY',
            'branchCode': '171438'
          },
          {
            'branchName': 'PRELLER SQUARE',
            'branchCode': '162734'
          },
          {
            'branchName': 'PREMFIN',
            'branchCode': '101267'
          },
          {
            'branchName': 'PREMIER MINE PRETORIA',
            'branchCode': '162050'
          },
          {
            'branchName': 'PRETORIA',
            'branchCode': '160445'
          },
          {
            'branchName': 'PRETORIA G4S',
            'branchCode': '101021'
          },
          {
            'branchName': 'PRETORIA NORTH',
            'branchCode': '159745'
          },
          {
            'branchName': 'PRETORIA SHOW GROUND',
            'branchCode': '159545'
          },
          {
            'branchName': 'PRIMROSE',
            'branchCode': '193042'
          },
          {
            'branchName': 'PRINCESS AVENUE BENONI',
            'branchCode': '186242'
          },
          {
            'branchName': 'PRIVATE BANK 135 RIVONIA RD',
            'branchCode': '109007'
          },
          {
            'branchName': 'PRIVATE BANK BROOKLYN',
            'branchCode': '109570'
          },
          {
            'branchName': 'PRIVATE BANK CAPE',
            'branchCode': '109578'
          },
          {
            'branchName': 'PRIVATE BANK CAPE OLD',
            'branchCode': '109987'
          },
          {
            'branchName': 'PRIVATE BANK CAPE TOWN',
            'branchCode': '109009'
          },
          {
            'branchName': 'PRIVATE BANK CBD',
            'branchCode': '109577'
          },
          {
            'branchName': 'PRIVATE BANK CBD & VAAL',
            'branchCode': '109576'
          },
          {
            'branchName': 'PRIVATE BANK CENTURION',
            'branchCode': '109572'
          },
          {
            'branchName': 'PRIVATE BANK CLAREMONT',
            'branchCode': '109560'
          },
          {
            'branchName': 'PRIVATE BANK CLEARWATER',
            'branchCode': '109569'
          },
          {
            'branchName': 'PRIVATE BANK CREDIT',
            'branchCode': '109964'
          },
          {
            'branchName': 'PRIVATE BANK EASTGATE',
            'branchCode': '109564'
          },
          {
            'branchName': 'PRIVATE BANK FREE STATE',
            'branchCode': '109571'
          },
          {
            'branchName': 'PRIVATE BANK HEAD OFFICE',
            'branchCode': '109273'
          },
          {
            'branchName': 'PRIVATE BANK HILLCREST',
            'branchCode': '109561'
          },
          {
            'branchName': 'PRIVATE BANK JHB SOUTH SUBURB',
            'branchCode': '109574'
          },
          {
            'branchName': 'PRIVATE BANK JOZI OLD',
            'branchCode': '109220'
          },
          {
            'branchName': 'PRIVATE BANK JOZI REGION',
            'branchCode': '109575'
          },
          {
            'branchName': 'PRIVATE BANK KWAZULU',
            'branchCode': '109559'
          },
          {
            'branchName': 'PRIVATE BANK KZN OLD',
            'branchCode': '109008'
          },
          {
            'branchName': 'PRIVATE BANK MANDELA SQ',
            'branchCode': '109680'
          },
          {
            'branchName': 'PRIVATE BANK MARKETING',
            'branchCode': '109336'
          },
          {
            'branchName': 'PRIVATE BANK NEDHILL',
            'branchCode': '109011'
          },
          {
            'branchName': 'PRIVATE BANK NORTH',
            'branchCode': '109562'
          },
          {
            'branchName': 'PRIVATE BANK PERSONAL BANK',
            'branchCode': '109030'
          },
          {
            'branchName': 'PRIVATE BANK PMB',
            'branchCode': '109565'
          },
          {
            'branchName': 'PRIVATE BANK PRETORIA',
            'branchCode': '109568'
          },
          {
            'branchName': 'PRIVATE BANK PTA OLD',
            'branchCode': '109221'
          },
          {
            'branchName': 'PRIVATE BANK RIVONIA 1',
            'branchCode': '109402'
          },
          {
            'branchName': 'PRIVATE BANK RIVONIA 2',
            'branchCode': '109403'
          },
          {
            'branchName': 'PRIVATE BANK RIVONIA EXEC',
            'branchCode': '109404'
          },
          {
            'branchName': 'PRIVATE BANK TYGER VALLEY',
            'branchCode': '109675'
          },
          {
            'branchName': 'PRIVATE BANK VAAL',
            'branchCode': '109579'
          },
          {
            'branchName': 'PRIVATE BANK WESTVILLE',
            'branchCode': '109697'
          },
          {
            'branchName': 'PROFESSIONAL BUSINESS',
            'branchCode': '101236'
          },
          {
            'branchName': 'PROJECT MANAGEMENT',
            'branchCode': '163926'
          },
          {
            'branchName': 'PROMENADE M/P CSC WC',
            'branchCode': '101214'
          },
          {
            'branchName': 'PROPERTY & ASSET FINANCE',
            'branchCode': '147305'
          },
          {
            'branchName': 'PROSPECTON',
            'branchCode': '153827'
          },
          {
            'branchName': 'PROTEA GARDENS',
            'branchCode': '156637'
          },
          {
            'branchName': 'PTA BLOED STREET',
            'branchCode': '137421'
          },
          {
            'branchName': 'QUAGGA MALL',
            'branchCode': '101182'
          },
          {
            'branchName': 'QUEENSBURGH KZN',
            'branchCode': '133526'
          },
          {
            'branchName': 'QUEENSTOWN',
            'branchCode': '118420'
          },
          {
            'branchName': 'QUIGNEY',
            'branchCode': '120805'
          },
          {
            'branchName': 'RAND ITT GAUTENG',
            'branchCode': '185905'
          },
          {
            'branchName': 'RANDBURG CBD',
            'branchCode': '180305'
          },
          {
            'branchName': 'RANDBURG CSC',
            'branchCode': '101284'
          },
          {
            'branchName': 'RANDBURG G4S',
            'branchCode': '101038'
          },
          {
            'branchName': 'RANDFONTEIN SQUARE',
            'branchCode': '185241'
          },
          {
            'branchName': 'RANDRIDGE',
            'branchCode': '151405'
          },
          {
            'branchName': 'RECONCILIATION SERVICES',
            'branchCode': '185105'
          },
          {
            'branchName': 'REGENT HOUSE',
            'branchCode': '175705'
          },
          {
            'branchName': 'RELATIONSHIP AREA',
            'branchCode': '173405'
          },
          {
            'branchName': 'RETAIL CREDIT PIP',
            'branchCode': '117905'
          },
          {
            'branchName': 'RETAIL FINANCE DIVISION',
            'branchCode': '101091'
          },
          {
            'branchName': 'RICHARD BAY G4S',
            'branchCode': '101029'
          },
          {
            'branchName': 'RICHARDS BAY',
            'branchCode': '130230'
          },
          {
            'branchName': 'RICHARDS BAY MHATHUZE',
            'branchCode': '157405'
          },
          {
            'branchName': 'RIVERSDALE',
            'branchCode': '153205'
          },
          {
            'branchName': 'RIVERSIDE MALL',
            'branchCode': '173952'
          },
          {
            'branchName': 'RIVERWALK POTCHEFSTROOM',
            'branchCode': '101264'
          },
          {
            'branchName': 'RIVONIA',
            'branchCode': '196905'
          },
          {
            'branchName': 'ROBERTSON',
            'branchCode': '122110'
          },
          {
            'branchName': 'ROCKLANDS',
            'branchCode': '122705'
          },
          {
            'branchName': 'RONDEBOSCH',
            'branchCode': '104809'
          },
          {
            'branchName': 'ROODEPOORT CITY',
            'branchCode': '157705'
          },
          {
            'branchName': 'ROSEBANK',
            'branchCode': '197705'
          },
          {
            'branchName': 'ROSETTENVILLE',
            'branchCode': '191505'
          },
          {
            'branchName': 'ROSSLYN PLAZA',
            'branchCode': '167245'
          },
          {
            'branchName': 'RRB AMANZIMTOTI',
            'branchCode': '101123'
          },
          {
            'branchName': 'RRB BLOEMFONTEIN',
            'branchCode': '101120'
          },
          {
            'branchName': 'RRB CENTURION MIDRAND',
            'branchCode': '101139'
          },
          {
            'branchName': 'RRB CLAREMONT',
            'branchCode': '101297'
          },
          {
            'branchName': 'RRB CPT CDB',
            'branchCode': '101143'
          },
          {
            'branchName': 'RRB CPT CENTRAL SUBURBS',
            'branchCode': '101142'
          },
          {
            'branchName': 'RRB CPT NORTHERN SUBURBS',
            'branchCode': '101117'
          },
          {
            'branchName': 'RRB CPT SOUTHERN SUBURBS',
            'branchCode': '101140'
          },
          {
            'branchName': 'RRB CPT WESTERN SUBURBS',
            'branchCode': '101141'
          },
          {
            'branchName': 'RRB EASTLONDON & MTHATHA',
            'branchCode': '101125'
          },
          {
            'branchName': 'RRB EXECUTIVE BANKING',
            'branchCode': '101128'
          },
          {
            'branchName': 'RRB GREATER PMB AREA HINTERL',
            'branchCode': '101144'
          },
          {
            'branchName': 'RRB GREATER WINELANDS',
            'branchCode': '101119'
          },
          {
            'branchName': 'RRB JOZI CENTRAL EAST',
            'branchCode': '101131'
          },
          {
            'branchName': 'RRB KWAZULU NATAL SBS',
            'branchCode': '101122'
          },
          {
            'branchName': 'RRB MTHATHA',
            'branchCode': '101341'
          },
          {
            'branchName': 'RRB NORTH WEST',
            'branchCode': '101136'
          },
          {
            'branchName': 'RRB PE UITENHAGE SURROUNDS',
            'branchCode': '101126'
          },
          {
            'branchName': 'RRB PRETORIA CBD WEST',
            'branchCode': '101138'
          },
          {
            'branchName': 'RRB PRETORIA EAST',
            'branchCode': '101135'
          },
          {
            'branchName': 'RRB RICHARDS BAY',
            'branchCode': '101205'
          },
          {
            'branchName': 'RRB RIVONIA ARTERIAL',
            'branchCode': '101130'
          },
          {
            'branchName': 'RRB THE GLEN',
            'branchCode': '101134'
          },
          {
            'branchName': 'RRB TSHWANE FAR EAST & NORTH',
            'branchCode': '101137'
          },
          {
            'branchName': 'RRB TYGERBERS WINELANDS',
            'branchCode': '101118'
          },
          {
            'branchName': 'RRB WESKUS SWART LAND GRPAARL',
            'branchCode': '101124'
          },
          {
            'branchName': 'RRB WESTVILLE MAL',
            'branchCode': '101112'
          },
          {
            'branchName': 'RRB WESTVILLE MALL',
            'branchCode': '101121'
          },
          {
            'branchName': 'RUSTENBURG CBD',
            'branchCode': '143946'
          },
          {
            'branchName': 'RUSTENBURG CSC',
            'branchCode': '101262'
          },
          {
            'branchName': 'RUSTENBURG G4S',
            'branchCode': '101018'
          },
          {
            'branchName': 'RUSTENBURG MIDTOWN MALL CSC',
            'branchCode': '101263'
          },
          {
            'branchName': 'SA SCOTTISH',
            'branchCode': '133305'
          },
          {
            'branchName': 'SALT RIVER CAPE',
            'branchCode': '102109'
          },
          {
            'branchName': 'SANDOWN',
            'branchCode': '193305'
          },
          {
            'branchName': 'SANDTON',
            'branchCode': '197005'
          },
          {
            'branchName': 'SAVANNAH',
            'branchCode': '141848'
          },
          {
            'branchName': 'SBS SPECIALIST',
            'branchCode': '174905'
          },
          {
            'branchName': 'SBV BETHLEHEM',
            'branchCode': '101355'
          },
          {
            'branchName': 'SBV BURGERSFORT',
            'branchCode': '101094'
          },
          {
            'branchName': 'SBV EAST RAND',
            'branchCode': '113205'
          },
          {
            'branchName': 'SBV EASTGATE MALL',
            'branchCode': '101179'
          },
          {
            'branchName': 'SBV GEORGE',
            'branchCode': '199105'
          },
          {
            'branchName': 'SBV JOHANNESBURG',
            'branchCode': '179805'
          },
          {
            'branchName': 'SBV KIMBERLEY',
            'branchCode': '140733'
          },
          {
            'branchName': 'SBV LOUIS TRICHARDT CASH CENTR',
            'branchCode': '101011'
          },
          {
            'branchName': 'SBV MAHIKENG',
            'branchCode': '101352'
          },
          {
            'branchName': 'SBV MIDRAND',
            'branchCode': '167305'
          },
          {
            'branchName': 'SBV MTHATHA',
            'branchCode': '101356'
          },
          {
            'branchName': 'SBV NELSPRUIT',
            'branchCode': '123152'
          },
          {
            'branchName': 'SBV NEWCASTLE',
            'branchCode': '101234'
          },
          {
            'branchName': 'SBV POLOKWANE',
            'branchCode': '140048'
          },
          {
            'branchName': 'SBV PORT SHEPSTONE',
            'branchCode': '186037'
          },
          {
            'branchName': 'SBV PRETORIA',
            'branchCode': '163245'
          },
          {
            'branchName': 'SBV RICHARDS BAY',
            'branchCode': '127005'
          },
          {
            'branchName': 'SBV RUSTENBURG',
            'branchCode': '136434'
          },
          {
            'branchName': 'SBV SILVERTON',
            'branchCode': '101357'
          },
          {
            'branchName': 'SBV SMCR BEDFORD CENTRE',
            'branchCode': '101349'
          },
          {
            'branchName': 'SBV VEREENIGING',
            'branchCode': '176337'
          },
          {
            'branchName': 'SBV WELKOM',
            'branchCode': '101354'
          },
          {
            'branchName': 'SCHEME OMG WEST CAPE',
            'branchCode': '186305'
          },
          {
            'branchName': 'SCOTTSVILLE KZN',
            'branchCode': '134125'
          },
          {
            'branchName': 'SCS OMNI',
            'branchCode': '188205'
          },
          {
            'branchName': 'SEBOKENG',
            'branchCode': '135849'
          },
          {
            'branchName': 'SERVCON HOUSING',
            'branchCode': '171905'
          },
          {
            'branchName': 'SIEMERT ROAD JHB',
            'branchCode': '195205'
          },
          {
            'branchName': 'SIGNET TERRACE',
            'branchCode': '123405'
          },
          {
            'branchName': 'SIMMONDS STREET SCHEMES',
            'branchCode': '187042'
          },
          {
            'branchName': 'SIYAKA EFFICIENCIES',
            'branchCode': '167545'
          },
          {
            'branchName': 'SMALL BUSINESS',
            'branchCode': '135705'
          },
          {
            'branchName': 'SOMERSET MALL',
            'branchCode': '114145'
          },
          {
            'branchName': 'SOMERSET WEST',
            'branchCode': '106012'
          },
          {
            'branchName': 'SOMERSET WEST',
            'branchCode': '105605'
          },
          {
            'branchName': 'SONATA LANE MITCHELLS PLAIN',
            'branchCode': '101212'
          },
          {
            'branchName': 'SONATE INSTORE',
            'branchCode': '110910'
          },
          {
            'branchName': 'SOSHANGUVE CROSSING',
            'branchCode': '101266'
          },
          {
            'branchName': 'SOSHANGUVE THORN TREE',
            'branchCode': '166445'
          },
          {
            'branchName': 'SOUTH COAST',
            'branchCode': '154405'
          },
          {
            'branchName': 'SOUTHDALE',
            'branchCode': '198105'
          },
          {
            'branchName': 'SOUTHGATE',
            'branchCode': '153405'
          },
          {
            'branchName': 'SPECIAL PORTFOLIO',
            'branchCode': '146105'
          },
          {
            'branchName': 'SPECIAL PORTFOLIO COMMERCIAL',
            'branchCode': '150705'
          },
          {
            'branchName': 'SPECIALIST UNIT NFEF',
            'branchCode': '108505'
          },
          {
            'branchName': 'SPRINGFIELD',
            'branchCode': '106226'
          },
          {
            'branchName': 'SPRINGS',
            'branchCode': '190742'
          },
          {
            'branchName': 'SPRINGS MALL',
            'branchCode': '193442'
          },
          {
            'branchName': 'SS& A IN PERSONAL SMITH STR',
            'branchCode': '101061'
          },
          {
            'branchName': 'SS&A CSC VANGATE MALL',
            'branchCode': '101153'
          },
          {
            'branchName': 'SS&A IN CSC BLAAUW VILLAGE',
            'branchCode': '101156'
          },
          {
            'branchName': 'SS&A IN CSC CHRIS HANI SQUAR',
            'branchCode': '101176'
          },
          {
            'branchName': 'SS&A IN CSC COMMERCIAL ROAD',
            'branchCode': '101158'
          },
          {
            'branchName': 'SS&A IN CSC DOWN TOWN',
            'branchCode': '101157'
          },
          {
            'branchName': 'SS&A IN CSC DURBAN WEST',
            'branchCode': '101096'
          },
          {
            'branchName': 'SS&A IN CSC EMPANGENI',
            'branchCode': '101097'
          },
          {
            'branchName': 'SS&A IN CSC GREENSTONE MALL',
            'branchCode': '101152'
          },
          {
            'branchName': 'SS&A IN CSC KIMBERLY',
            'branchCode': '101098'
          },
          {
            'branchName': 'SS&A IN CSC MAITLAND STREET',
            'branchCode': '101177'
          },
          {
            'branchName': 'SS&A IN CSC MIDRAND',
            'branchCode': '101095'
          },
          {
            'branchName': 'SS&A IN CSC NELSPRUIT PLAZA',
            'branchCode': '101050'
          },
          {
            'branchName': 'SS&A IN CSC NEWCASTLE SCOTT',
            'branchCode': '101155'
          },
          {
            'branchName': 'SS&A IN CSC PINE WALK',
            'branchCode': '101170'
          },
          {
            'branchName': 'SS&A IN CSC POLOKWANE',
            'branchCode': '101099'
          },
          {
            'branchName': 'SS&A IN CSC PORTSHEPSTONE',
            'branchCode': '101154'
          },
          {
            'branchName': 'SS&A IN CSC PROMENADE',
            'branchCode': '101151'
          },
          {
            'branchName': 'SS&A IN CSC SONATA',
            'branchCode': '101159'
          },
          {
            'branchName': 'SS&A IN CSC ST GEORGES MALL',
            'branchCode': '101162'
          },
          {
            'branchName': 'SS&A IN CSC STANGER MALL',
            'branchCode': '101161'
          },
          {
            'branchName': 'SS&A IN CSC WYNBERG',
            'branchCode': '101160'
          },
          {
            'branchName': 'SS&A IN PERSONAL ALEXANDRA',
            'branchCode': '101073'
          },
          {
            'branchName': 'SS&A IN PERSONAL ANDRIES STR',
            'branchCode': '101049'
          },
          {
            'branchName': 'SS&A IN PERSONAL BELLVILLE',
            'branchCode': '101084'
          },
          {
            'branchName': 'SS&A IN PERSONAL BENONI',
            'branchCode': '101075'
          },
          {
            'branchName': 'SS&A IN PERSONAL BOTSHABELO',
            'branchCode': '101067'
          },
          {
            'branchName': 'SS&A IN PERSONAL BRAMLEY',
            'branchCode': '101078'
          },
          {
            'branchName': 'SS&A IN PERSONAL BREE STREET2',
            'branchCode': '101065'
          },
          {
            'branchName': 'SS&A IN PERSONAL BUFFALO STR',
            'branchCode': '101079'
          },
          {
            'branchName': 'SS&A IN PERSONAL CHURCH STR',
            'branchCode': '101081'
          },
          {
            'branchName': 'SS&A IN PERSONAL COMMISSIONER',
            'branchCode': '101064'
          },
          {
            'branchName': 'SS&A IN PERSONAL ELOFF STR',
            'branchCode': '101060'
          },
          {
            'branchName': 'SS&A IN PERSONAL GHANDI SQR',
            'branchCode': '101063'
          },
          {
            'branchName': 'SS&A IN PERSONAL KATHU',
            'branchCode': '101058'
          },
          {
            'branchName': 'SS&A IN PERSONAL KRUGERSDORP',
            'branchCode': '101066'
          },
          {
            'branchName': 'SS&A IN PERSONAL LADYSMITH',
            'branchCode': '101057'
          },
          {
            'branchName': 'SS&A IN PERSONAL LANDROS MARE',
            'branchCode': '101053'
          },
          {
            'branchName': 'SS&A IN PERSONAL LONGMARKET',
            'branchCode': '101062'
          },
          {
            'branchName': 'SS&A IN PERSONAL MADADENI',
            'branchCode': '101056'
          },
          {
            'branchName': 'SS&A IN PERSONAL MAFEKING',
            'branchCode': '101077'
          },
          {
            'branchName': 'SS&A IN PERSONAL MAIN STREET',
            'branchCode': '101072'
          },
          {
            'branchName': 'SS&A IN PERSONAL MAMELODI',
            'branchCode': '101074'
          },
          {
            'branchName': 'SS&A IN PERSONAL MARKS PARK',
            'branchCode': '101068'
          },
          {
            'branchName': 'SS&A IN PERSONAL NEW GERMANY',
            'branchCode': '101059'
          },
          {
            'branchName': 'SS&A IN PERSONAL NEWTOWN MALL',
            'branchCode': '101071'
          },
          {
            'branchName': 'SS&A IN PERSONAL PARK CENTRAL',
            'branchCode': '101070'
          },
          {
            'branchName': 'SS&A IN PERSONAL RANDBURG',
            'branchCode': '101069'
          },
          {
            'branchName': 'SS&A IN PERSONAL RICHARDS BAY',
            'branchCode': '101054'
          },
          {
            'branchName': 'SS&A IN PERSONAL RUSTENBURG',
            'branchCode': '101047'
          },
          {
            'branchName': 'SS&A IN PERSONAL TERMINUS STR',
            'branchCode': '101080'
          },
          {
            'branchName': 'SS&A IN PERSONAL UITENHAGE',
            'branchCode': '101082'
          },
          {
            'branchName': 'SS&A IN PERSONAL ULUNDI',
            'branchCode': '101055'
          },
          {
            'branchName': 'SS&A IN PERSONAL VANDERBIJLPK',
            'branchCode': '101083'
          },
          {
            'branchName': 'SS&A IN PERSONAL VOORTREKKER',
            'branchCode': '101076'
          },
          {
            'branchName': 'SS&A IN PERSONAL WITBANK',
            'branchCode': '101052'
          },
          {
            'branchName': 'SS&A INPERSONAL KWANOBUHLE',
            'branchCode': '101046'
          },
          {
            'branchName': 'SS&A INPERSONAL PAROW',
            'branchCode': '101048'
          },
          {
            'branchName': 'ST GEORGES MALL',
            'branchCode': '101709'
          },
          {
            'branchName': 'ST GEORGES MALL CSC',
            'branchCode': '101221'
          },
          {
            'branchName': 'STAFF BANKING & NORTH SITE',
            'branchCode': '195505'
          },
          {
            'branchName': 'STANDERTON',
            'branchCode': '151305'
          },
          {
            'branchName': 'STANFORD QUARTER PE',
            'branchCode': '121717'
          },
          {
            'branchName': 'STANGER CSC',
            'branchCode': '101329'
          },
          {
            'branchName': 'STELLENBOSCH',
            'branchCode': '107110'
          },
          {
            'branchName': 'STILL BAY',
            'branchCode': '184705'
          },
          {
            'branchName': 'STRIJDOM PARK',
            'branchCode': '152105'
          },
          {
            'branchName': 'STRUBENS VALLEY',
            'branchCode': '161241'
          },
          {
            'branchName': 'SUNNINGHILL',
            'branchCode': '155605'
          },
          {
            'branchName': 'SUNNYPARK',
            'branchCode': '143405'
          },
          {
            'branchName': 'SUNWARD PARK',
            'branchCode': '190442'
          },
          {
            'branchName': 'SWELLENDAM',
            'branchCode': '132105'
          },
          {
            'branchName': 'TAJ CENTRE',
            'branchCode': '137225'
          },
          {
            'branchName': 'TAXATION',
            'branchCode': '165305'
          },
          {
            'branchName': 'TELECOMMUNICATIONS',
            'branchCode': '175105'
          },
          {
            'branchName': 'TEMBISA PLAZA',
            'branchCode': '101311'
          },
          {
            'branchName': 'TERMINUS STREET',
            'branchCode': '125421'
          },
          {
            'branchName': 'TERMINUS STREET CSC',
            'branchCode': '101286'
          },
          {
            'branchName': 'TESTING ENVIRONMENT',
            'branchCode': '146530'
          },
          {
            'branchName': 'TESTING OPERATIONS',
            'branchCode': '170205'
          },
          {
            'branchName': 'THABAZIMBI',
            'branchCode': '101224'
          },
          {
            'branchName': 'THABO SEHUME ANDRIES STREET',
            'branchCode': '101239'
          },
          {
            'branchName': 'THE AVENUES',
            'branchCode': '174042'
          },
          {
            'branchName': 'THE BRIDGE BELLVILEE',
            'branchCode': '103610'
          },
          {
            'branchName': 'THE CARLTON',
            'branchCode': '190605'
          },
          {
            'branchName': 'THE GLEN',
            'branchCode': '138537'
          },
          {
            'branchName': 'THE GROVE',
            'branchCode': '115734'
          },
          {
            'branchName': 'THE MALL OF AFRICA',
            'branchCode': '101365'
          },
          {
            'branchName': 'THE REDS',
            'branchCode': '112805'
          },
          {
            'branchName': 'THIRD PARTY PAYMENTS',
            'branchCode': '156505'
          },
          {
            'branchName': 'THOHOYANDOU CBD',
            'branchCode': '166849'
          },
          {
            'branchName': 'THREE RIVERS',
            'branchCode': '178337'
          },
          {
            'branchName': 'TIP VIRTUAL SALES',
            'branchCode': '195805'
          },
          {
            'branchName': 'TIP VIRTUAL SALES INV',
            'branchCode': '107709'
          },
          {
            'branchName': 'TOKAI BLUE ROUTE MALL',
            'branchCode': '104309'
          },
          {
            'branchName': 'TONGA',
            'branchCode': '101167'
          },
          {
            'branchName': 'TONGAAT',
            'branchCode': '179605'
          },
          {
            'branchName': 'TRADE COMMODITY FINANCE',
            'branchCode': '116105'
          },
          {
            'branchName': 'TRADE FINANCE LOGOSTICS',
            'branchCode': '178005'
          },
          {
            'branchName': 'TRADE ROUTE MALL',
            'branchCode': '194037'
          },
          {
            'branchName': 'TREASURY DOMESTIC MARKET OPERA',
            'branchCode': '176605'
          },
          {
            'branchName': 'TSAKANE',
            'branchCode': '143605'
          },
          {
            'branchName': 'TSHWANE CENTRAL',
            'branchCode': '164645'
          },
          {
            'branchName': 'TSKAKANE CSC',
            'branchCode': '101268'
          },
          {
            'branchName': 'TUBATSE CROSSING',
            'branchCode': '100997'
          },
          {
            'branchName': 'TYGER VALLEY, BELVILLE',
            'branchCode': '103910'
          },
          {
            'branchName': 'TYGERBERG WINELANDS',
            'branchCode': '118602'
          },
          {
            'branchName': 'TZANEEN',
            'branchCode': '141949'
          },
          {
            'branchName': 'TZANEEN CROSSING',
            'branchCode': '142849'
          },
          {
            'branchName': 'TZANEEN CSC',
            'branchCode': '101259'
          },
          {
            'branchName': 'TZANEEN G4S',
            'branchCode': '101040'
          },
          {
            'branchName': 'TZANEEN PCCH',
            'branchCode': '100960'
          },
          {
            'branchName': 'UITENHAGE',
            'branchCode': '127716'
          },
          {
            'branchName': 'UITENHAGE CSC',
            'branchCode': '101289'
          },
          {
            'branchName': 'ULUNDI',
            'branchCode': '101279'
          },
          {
            'branchName': 'UMHLANGA ROCKS KZN',
            'branchCode': '135329'
          },
          {
            'branchName': 'UMLAZI',
            'branchCode': '182905'
          },
          {
            'branchName': 'UMTATA PCCH',
            'branchCode': '141642'
          },
          {
            'branchName': 'UMZIMKHULU',
            'branchCode': '100994'
          },
          {
            'branchName': 'UNIVERSITY CAPE TOWN',
            'branchCode': '124530'
          },
          {
            'branchName': 'UNIVERSITY OF JOHANNESBURG',
            'branchCode': '153005'
          },
          {
            'branchName': 'UNIVERSITY OF PRETORIA',
            'branchCode': '119345'
          },
          {
            'branchName': 'UNIVERSITY OF STELLENBOSCH',
            'branchCode': '119210'
          },
          {
            'branchName': 'UPINGTON',
            'branchCode': '157205'
          },
          {
            'branchName': 'V&A WATERFRONT',
            'branchCode': '118509'
          },
          {
            'branchName': 'VAAL MALL',
            'branchCode': '189137'
          },
          {
            'branchName': 'VAAL WALK MALL CSC',
            'branchCode': '101278'
          },
          {
            'branchName': 'VANDERBIJLPARK',
            'branchCode': '174837'
          },
          {
            'branchName': 'VANDERBIJLPARK G4S',
            'branchCode': '101033'
          },
          {
            'branchName': 'VANGATE CITY',
            'branchCode': '133405'
          },
          {
            'branchName': 'VANGATE MALL CSC',
            'branchCode': '101213'
          },
          {
            'branchName': 'VERULUM',
            'branchCode': '178405'
          },
          {
            'branchName': 'VICTORIA STREET',
            'branchCode': '148626'
          },
          {
            'branchName': 'VIKING PARK EPPING',
            'branchCode': '173310'
          },
          {
            'branchName': 'VINCENT PARK',
            'branchCode': '120621'
          },
          {
            'branchName': 'VISA/MASTER ISSUING',
            'branchCode': '122805'
          },
          {
            'branchName': 'VISA/MASTER OPERATION',
            'branchCode': '194905'
          },
          {
            'branchName': 'VISTA',
            'branchCode': '169548'
          },
          {
            'branchName': 'VM ACQUIRING PRODUCT',
            'branchCode': '166505'
          },
          {
            'branchName': 'VM PROCUREMENT CARD PRODUCT',
            'branchCode': '150205'
          },
          {
            'branchName': 'VOSLOORUS',
            'branchCode': '103005'
          },
          {
            'branchName': 'VREDENBURG',
            'branchCode': '159505'
          },
          {
            'branchName': 'VREDENDAL',
            'branchCode': '159605'
          },
          {
            'branchName': 'VRYHEID',
            'branchCode': '131126'
          },
          {
            'branchName': 'WADEVILLE',
            'branchCode': '193642'
          },
          {
            'branchName': 'WALMER PARK',
            'branchCode': '113717'
          },
          {
            'branchName': 'WATERFALL MALL RUSTENBURG',
            'branchCode': '108410'
          },
          {
            'branchName': 'WATERFRONT BLOEMFONTEIN',
            'branchCode': '120305'
          },
          {
            'branchName': 'WATERFRONT HUMEWOOD',
            'branchCode': '119817'
          },
          {
            'branchName': 'WELKOM',
            'branchCode': '113435'
          },
          {
            'branchName': 'WELKOM G4S',
            'branchCode': '101032'
          },
          {
            'branchName': 'WELKOM HINTERLAND',
            'branchCode': '101343'
          },
          {
            'branchName': 'WELLINGTON CBD',
            'branchCode': '102905'
          },
          {
            'branchName': 'WESKUS MALL',
            'branchCode': '189705'
          },
          {
            'branchName': 'WESTERN GAUTENG',
            'branchCode': '128605'
          },
          {
            'branchName': 'WESTGATE',
            'branchCode': '198341'
          },
          {
            'branchName': 'WESTONARIA',
            'branchCode': '181905'
          },
          {
            'branchName': 'WESTVILLE MALL',
            'branchCode': '138026'
          },
          {
            'branchName': 'WILSONIA',
            'branchCode': '120505'
          },
          {
            'branchName': 'WINDERMERE',
            'branchCode': '132905'
          },
          {
            'branchName': 'WITBANK',
            'branchCode': '165950'
          },
          {
            'branchName': 'WITBANK CSC',
            'branchCode': '101260'
          },
          {
            'branchName': 'WITBANK G4S',
            'branchCode': '101031'
          },
          {
            'branchName': 'WITBANK GROUP SCHEME',
            'branchCode': '184505'
          },
          {
            'branchName': 'WITS UNIVERSITY BRAAMFONTEIN',
            'branchCode': '195105'
          },
          {
            'branchName': 'WONDERPARK',
            'branchCode': '101299'
          },
          {
            'branchName': 'WOODLANDS',
            'branchCode': '136305'
          },
          {
            'branchName': 'WORCESTER',
            'branchCode': '101507'
          },
          {
            'branchName': 'WYNBERG',
            'branchCode': '101215'
          },
          {
            'branchName': 'YEOVILLE JOHANNESBURG',
            'branchCode': '191105'
          },
          {
            'branchName': 'ZANDSPRUIT',
            'branchCode': '156805'
          },
          {
            'branchName': 'ZAR CLEARING SERICES',
            'branchCode': '186805'
          },
          {
            'branchName': 'ZEBEDIELA',
            'branchCode': '112905'
          },
          {
            'branchName': 'ZIYABUYA',
            'branchCode': '143105'
          },
          {
            'branchName': 'ZOMERLUST PAARL',
            'branchCode': '138905'
          }
        ]
      },
      {
        'bankCode': '009',
        'bankName': 'ABSA BANK',
        'universalCode': '632005',
        'rTC': true,
        'acceptsRealtimeAVS': true,
        'acceptsBatchAVS': true
      },
      {
        'bankCode': '020',
        'bankName': 'CAPITEC BANK',
        'universalCode': '470010',
        'rTC': true,
        'acceptsRealtimeAVS': true,
        'acceptsBatchAVS': true
      },
      {
        'bankCode': '008',
        'bankName': 'FNB SOUTH AFRICA',
        'universalCode': '250655',
        'rTC': true,
        'acceptsRealtimeAVS': true,
        'acceptsBatchAVS': true
      },
      {
        'bankCode': '001',
        'bankName': 'STANDARD BANK SOUTH AFRICA',
        'universalCode': '051001',
        'rTC': true,
        'acceptsRealtimeAVS': true,
        'acceptsBatchAVS': true
      },
      {
        'bankCode': '016',
        'bankName': 'AFRICAN BANK',
        'universalCode': '430000',
        'rTC': true,
        'acceptsRealtimeAVS': true,
        'acceptsBatchAVS': true
      },
      {
        'bankCode': '041',
        'bankName': 'ALBARAKA BANK',
        'universalCode': '800000',
        'rTC': false
      },
      {
        'bankCode': '038',
        'bankName': 'BIDVEST BANK',
        'universalCode': '462005',
        'rTC': true,
        'acceptsRealtimeAVS': false,
        'acceptsBatchAVS': true
      },
      {
        'bankCode': '048',
        'bankName': 'BNP PARIBAS',
        'universalCode': '688000',
        'rTC': false
      },
      {
        'bankCode': '035',
        'bankName': 'CITIBANK N. A.',
        'universalCode': '350005',
        'rTC': false
      },
      {
        'bankCode': '045',
        'bankName': 'FinBond Mutual Bank',
        'universalCode': '589000',
        'rTC': true
      },
      {
        'bankCode': '008',
        'bankName': 'FIRST NATIONAL BANK',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'FNB LESOTHO',
            'branchCode': '280061'
          },
          {
            'branchName': 'FNB NAMIBIA',
            'branchCode': '282672'
          },
          {
            'branchName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'acceptsRealtimeAVS': true,
            'acceptsBatchAVS': true
          },
          {
            'branchName': 'FNB SWAZILAND',
            'branchCode': '287364'
          }
        ]
      },
      {
        'bankCode': '039',
        'bankName': 'GRINDROD BANK',
        'universalCode': '584000',
        'rTC': false
      },
      {
        'bankCode': '026',
        'bankName': 'HABIB OVERSEAS BANK LIMITED',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'CAPE TOWN',
            'branchCode': '700066'
          },
          {
            'branchName': 'DURBAN',
            'branchCode': '700026'
          },
          {
            'branchName': 'JOHANNESBURG',
            'branchCode': '700005'
          },
          {
            'branchName': 'JOHANNESBURG',
            'branchCode': '701505'
          },
          {
            'branchName': 'LAUDIUM',
            'branchCode': '700045'
          },
          {
            'branchName': 'LENASIA',
            'branchCode': '700037'
          }
        ]
      },
      {
        'bankCode': '023',
        'bankName': 'HBZ BANK LIMITED',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'BOKSBURG',
            'branchCode': '570100'
          },
          {
            'branchName': 'FORDSBURG',
            'branchCode': '570105'
          },
          {
            'branchName': 'GREY STREET,DURBAN',
            'branchCode': '570126'
          },
          {
            'branchName': 'LAUDIUM,PRETORIA',
            'branchCode': '570145'
          },
          {
            'branchName': 'LENASIA',
            'branchCode': '570137'
          },
          {
            'branchName': 'PIETERMARITZBURG',
            'branchCode': '570326'
          },
          {
            'branchName': 'VEREENIGING',
            'branchCode': '570101'
          },
          {
            'branchName': 'WESTVILLE',
            'branchCode': '570226'
          }
        ]
      },
      {
        'bankCode': '040',
        'bankName': 'HSBC BANK PLC',
        'universalCode': '587000',
        'rTC': false
      },
      {
        'bankCode': '024',
        'bankName': 'INVESTEC BANK LIMITED',
        'universalCode': '580105',
        'rTC': true,
        'acceptsRealtimeAVS': false,
        'acceptsBatchAVS': true
      },
      {
        'bankCode': '031',
        'bankName': 'ITHALA(ABSA)-',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'ALBERT STREET - DBN',
            'branchCode': '755026'
          },
          {
            'branchName': 'BULWER',
            'branchCode': '753725'
          },
          {
            'branchName': 'CENTRAL CARD BRANCH',
            'branchCode': '757026'
          },
          {
            'branchName': 'CORPORATE BRANCH',
            'branchCode': '757826'
          },
          {
            'branchName': 'DEVELOPMENT C S C',
            'branchCode': '759126'
          },
          {
            'branchName': 'EMPANGENI',
            'branchCode': '751030'
          },
          {
            'branchName': 'ESHOWE',
            'branchCode': '752630'
          },
          {
            'branchName': 'ESTCOURT',
            'branchCode': '753825'
          },
          {
            'branchName': 'HARDING',
            'branchCode': '754826'
          },
          {
            'branchName': 'HOWICK',
            'branchCode': '753425'
          },
          {
            'branchName': 'INGWAVUMA',
            'branchCode': '751924'
          },
          {
            'branchName': 'INKANDLA',
            'branchCode': '754024'
          },
          {
            'branchName': 'ITHALA BERGVILLE',
            'branchCode': '756926'
          },
          {
            'branchName': 'ITHALA DALTON',
            'branchCode': '756226'
          },
          {
            'branchName': 'ITHALA GARDINER STREET',
            'branchCode': '754126'
          },
          {
            'branchName': 'ITHALA GREYTOWN',
            'branchCode': '756526'
          },
          {
            'branchName': 'ITHALA HLUHLUWE',
            'branchCode': '756726'
          },
          {
            'branchName': 'ITHALA PHLANI VALLEY',
            'branchCode': '756826'
          },
          {
            'branchName': 'ITHALA PINEWALK',
            'branchCode': '756626'
          },
          {
            'branchName': 'ITHALA THE GALLARIA MALL',
            'branchCode': '754226'
          },
          {
            'branchName': 'ITHALA ZWELETHU',
            'branchCode': '755626'
          },
          {
            'branchName': 'IXOPO',
            'branchCode': '754626'
          },
          {
            'branchName': 'IZINGOLWENI',
            'branchCode': '755728'
          },
          {
            'branchName': 'JOZINI',
            'branchCode': '751824'
          },
          {
            'branchName': 'KOKSTAD AGENCY',
            'branchCode': '758226'
          },
          {
            'branchName': 'KWA MASHU',
            'branchCode': '756126'
          },
          {
            'branchName': 'LADYSMITH',
            'branchCode': '753025'
          },
          {
            'branchName': 'LONGMARKET STREET (PMBG)',
            'branchCode': '756325'
          },
          {
            'branchName': 'MADADENI',
            'branchCode': '753524'
          },
          {
            'branchName': 'MANDINI',
            'branchCode': '751129'
          },
          {
            'branchName': 'MANGUSI',
            'branchCode': '751424'
          },
          {
            'branchName': 'MATATIELE AGENCY',
            'branchCode': '758126'
          },
          {
            'branchName': 'MAXWELL STREET - EMPANGENI',
            'branchCode': '752530'
          },
          {
            'branchName': 'MBAZWANA',
            'branchCode': '752124'
          },
          {
            'branchName': 'MEGA CITY',
            'branchCode': '756426'
          },
          {
            'branchName': 'MKUZE',
            'branchCode': '752324'
          },
          {
            'branchName': 'MOORTON AGENCY',
            'branchCode': '758026'
          },
          {
            'branchName': 'MTUBATUBA',
            'branchCode': '751230'
          },
          {
            'branchName': 'NDUMO',
            'branchCode': '752024'
          },
          {
            'branchName': 'NEW GERMANY',
            'branchCode': '755226'
          },
          {
            'branchName': 'NEWCASTLE',
            'branchCode': '753124'
          },
          {
            'branchName': 'NONGOMA',
            'branchCode': '751630'
          },
          {
            'branchName': 'NQUTU',
            'branchCode': '753624'
          },
          {
            'branchName': 'PINE TOWN',
            'branchCode': '755126'
          },
          {
            'branchName': 'PINETOWN OPERATIONS CENTRE',
            'branchCode': '757999'
          },
          {
            'branchName': 'PONGOLA',
            'branchCode': '752724'
          },
          {
            'branchName': 'PORT SHEPSTONE',
            'branchCode': '755828'
          },
          {
            'branchName': 'RICHARDS BAY',
            'branchCode': '752430'
          },
          {
            'branchName': 'SELGRO- PIETERMARITZBURG',
            'branchCode': '755425'
          },
          {
            'branchName': 'STANGER',
            'branchCode': '751529'
          },
          {
            'branchName': 'TONGAAT',
            'branchCode': '751729'
          },
          {
            'branchName': 'TUGELA FERRY',
            'branchCode': '753924'
          },
          {
            'branchName': 'ULUNDI',
            'branchCode': '751330'
          },
          {
            'branchName': 'UMGENI ROAD',
            'branchCode': '756026'
          },
          {
            'branchName': 'UMLAZI',
            'branchCode': '755526'
          },
          {
            'branchName': 'UMZIMTO',
            'branchCode': '754726'
          },
          {
            'branchName': 'VRYHEID',
            'branchCode': '753324'
          }
        ]
      },
      {
        'bankCode': '044',
        'bankName': 'JP MORGAN CHASE',
        'universalCode': '432000',
        'rTC': false
      },
      {
        'bankCode': '018',
        'bankName': 'MERCANTILE BANK',
        'universalCode': '450105',
        'rTC': false,
        'acceptsRealtimeAVS': false,
        'acceptsBatchAVS': true
      },
      {
        'bankCode': '005',
        'bankName': 'NEDBANK - PEOPLES MORTGAGE LTD',
        'universalCode': '760005',
        'rTC': false
      },
      {
        'bankCode': '004',
        'bankName': 'NEDBANK (BOND ACCOUNTS)',
        'universalCode': '170305',
        'rTC': false
      },
      {
        'bankCode': '032',
        'bankName': 'NEDBANK INCORP. FBC',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'FBC FIDELITY BANK PENSIONS',
            'branchCode': '780117'
          },
          {
            'branchName': 'PORT ELIZABETH',
            'branchCode': '780017'
          }
        ]
      },
      {
        'bankCode': '007',
        'bankName': 'NEDBANK LESOTHO LIMITED',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'BUTHA - BUTHA',
            'branchCode': '390561'
          },
          {
            'branchName': 'HLOTSE',
            'branchCode': '390761'
          },
          {
            'branchName': 'MAPUTSOE',
            'branchCode': '390261'
          },
          {
            'branchName': 'MASERU',
            'branchCode': '390161'
          },
          {
            'branchName': 'MASERU MALL',
            'branchCode': '390961'
          },
          {
            'branchName': "MOHALE'S HOEK",
            'branchCode': '390361'
          },
          {
            'branchName': 'NEDBANK BEREA',
            'branchCode': '390061'
          },
          {
            'branchName': 'NEDBANK MAFETENG',
            'branchCode': '390461'
          },
          {
            'branchName': 'PIONEER MALL',
            'branchCode': '390861'
          },
          {
            'branchName': 'ROMA',
            'branchCode': '390661'
          }
        ]
      },
      {
        'bankCode': '017',
        'bankName': 'NEDBANK LTD INCORP. BOE BANK',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'ALBERTINIA',
            'branchCode': '440113'
          },
          {
            'branchName': 'BELLVILLE',
            'branchCode': '440510'
          },
          {
            'branchName': 'BENONI',
            'branchCode': '440142'
          },
          {
            'branchName': 'BLOEMFONTEIN',
            'branchCode': '440134'
          },
          {
            'branchName': 'BRACKENFELL',
            'branchCode': '440810'
          },
          {
            'branchName': 'BREDASDORP',
            'branchCode': '440112'
          },
          {
            'branchName': 'BREDASTRAAT PAARL',
            'branchCode': '440910'
          },
          {
            'branchName': 'BUSINESS DIV OF BOE BANK',
            'branchCode': '440305'
          },
          {
            'branchName': 'CALEDON',
            'branchCode': '440212'
          },
          {
            'branchName': 'CERES',
            'branchCode': '440107'
          },
          {
            'branchName': 'CLANWILLIAM',
            'branchCode': '440106'
          },
          {
            'branchName': 'CRADOCK',
            'branchCode': '440118'
          },
          {
            'branchName': 'DE AAR',
            'branchCode': '440208'
          },
          {
            'branchName': 'DE DOORNS',
            'branchCode': '440207'
          },
          {
            'branchName': 'DURBAN',
            'branchCode': '440126'
          },
          {
            'branchName': 'ERMELO',
            'branchCode': '440144'
          },
          {
            'branchName': 'FRANSCHHOEK',
            'branchCode': '440310'
          },
          {
            'branchName': 'GEORGE',
            'branchCode': '440114'
          },
          {
            'branchName': 'GRABOUW',
            'branchCode': '440312'
          },
          {
            'branchName': 'HEIDELBERG,WES KAAP',
            'branchCode': '440313'
          },
          {
            'branchName': 'HELDERBERG (VOORHEEN STRAND)',
            'branchCode': '440712'
          },
          {
            'branchName': 'HELDERBERG KOMMERSIELE SENTRUM',
            'branchCode': '441012'
          },
          {
            'branchName': 'HERMANUS',
            'branchCode': '440412'
          },
          {
            'branchName': 'HOPEFIELD',
            'branchCode': '440211'
          },
          {
            'branchName': 'HUMANSDORP',
            'branchCode': '440115'
          },
          {
            'branchName': 'JEFFREYSBAAI',
            'branchCode': '440215'
          },
          {
            'branchName': 'JOHANNESBURG',
            'branchCode': '440105'
          },
          {
            'branchName': 'KAAP KOMMERSIEEL',
            'branchCode': '441010'
          },
          {
            'branchName': 'KAAPSTAD',
            'branchCode': '440309'
          },
          {
            'branchName': 'KAART UITREIKING/CARD ISSUING',
            'branchCode': '449510'
          },
          {
            'branchName': 'KAART VERKRYGING/CARD ACQUIRIN',
            'branchCode': '449410'
          },
          {
            'branchName': 'KIMBERLEY',
            'branchCode': '440102'
          },
          {
            'branchName': 'KIRKWOOD',
            'branchCode': '440117'
          },
          {
            'branchName': 'KLEINMOND',
            'branchCode': '440512'
          },
          {
            'branchName': 'KNYSNA',
            'branchCode': '440414'
          },
          {
            'branchName': 'KRAAIFONTEIN',
            'branchCode': '440710'
          },
          {
            'branchName': 'KROONSTAD',
            'branchCode': '440136'
          },
          {
            'branchName': 'KUILSRIVIER',
            'branchCode': '440410'
          },
          {
            'branchName': 'LADISMITH (WES KAAP)',
            'branchCode': '440413'
          },
          {
            'branchName': 'MALMESBURY',
            'branchCode': '440307'
          },
          {
            'branchName': 'MIDDELBURG MPUMALANGA',
            'branchCode': '440150'
          },
          {
            'branchName': 'MONTAGU',
            'branchCode': '440513'
          },
          {
            'branchName': 'MOORREESBURG',
            'branchCode': '440311'
          },
          {
            'branchName': 'MOSSELBAAI',
            'branchCode': '440214'
          },
          {
            'branchName': 'NELSPRUIT',
            'branchCode': '440152'
          },
          {
            'branchName': 'NEWCASTLE',
            'branchCode': '440124'
          },
          {
            'branchName': 'OOS-LONDON',
            'branchCode': '440121'
          },
          {
            'branchName': 'OUDTSHOORN',
            'branchCode': '440314'
          },
          {
            'branchName': 'PAARL',
            'branchCode': '440210'
          },
          {
            'branchName': 'PAARL KOMMERSIEEL',
            'branchCode': '441210'
          },
          {
            'branchName': 'PAROW',
            'branchCode': '440610'
          },
          {
            'branchName': 'PEP BANK',
            'branchCode': '445010'
          },
          {
            'branchName': 'PICK N PAY FINANCIAL SERVICES',
            'branchCode': '440409'
          },
          {
            'branchName': 'PICK N PAY SAVER ASSOCIATION',
            'branchCode': '440209'
          },
          {
            'branchName': 'PIET RETIEF',
            'branchCode': '440244'
          },
          {
            'branchName': 'PIETERMARITZBURG',
            'branchCode': '440125'
          },
          {
            'branchName': 'PIKETBERG',
            'branchCode': '440411'
          },
          {
            'branchName': 'PINETOWN',
            'branchCode': '440226'
          },
          {
            'branchName': 'PKS MIKRO 1',
            'branchCode': '441110'
          },
          {
            'branchName': 'POLOKWANE ( PREV. PIETERSBURG)',
            'branchCode': '440148'
          },
          {
            'branchName': 'PONGOLA',
            'branchCode': '440224'
          },
          {
            'branchName': 'PORT ELIZABETH',
            'branchCode': '440217'
          },
          {
            'branchName': 'PORTERVILLE',
            'branchCode': '440407'
          },
          {
            'branchName': 'PRETORIA',
            'branchCode': '440145'
          },
          {
            'branchName': 'PRETORIA KOMMERSIEEL',
            'branchCode': '440345'
          },
          {
            'branchName': 'PRIVATE BANK GAUTENG REGION',
            'branchCode': '446205'
          },
          {
            'branchName': 'PRIVATE BANK KZN NATAL REGION',
            'branchCode': '446326'
          },
          {
            'branchName': 'PRIVATE BANK SOUTHERN &',
            'branchCode': '446014'
          },
          {
            'branchName': 'PRIVATE BANK WESTERN CAPE',
            'branchCode': '446110'
          },
          {
            'branchName': 'PROSESSERINGS SENTRUM DURBAN',
            'branchCode': '440326'
          },
          {
            'branchName': 'PROSESSERINGS SENTRUM KAAPSTAD',
            'branchCode': '440109'
          },
          {
            'branchName': 'RICHARDSBAAI',
            'branchCode': '440130'
          },
          {
            'branchName': 'RIVERSDAL',
            'branchCode': '440613'
          },
          {
            'branchName': 'RIVIERSONDEREND',
            'branchCode': '440612'
          },
          {
            'branchName': 'ROBERTSON',
            'branchCode': '440713'
          },
          {
            'branchName': 'RUSTENBURG',
            'branchCode': '440146'
          },
          {
            'branchName': 'SECUNDA',
            'branchCode': '440344'
          },
          {
            'branchName': 'SHOPRITE CHECKERS CLUB 2000',
            'branchCode': '441310'
          },
          {
            'branchName': 'SILVERTON',
            'branchCode': '440245'
          },
          {
            'branchName': 'SOMERSET-OOS',
            'branchCode': '440218'
          },
          {
            'branchName': 'SOMERSET-WES',
            'branchCode': '440912'
          },
          {
            'branchName': 'STANDERTON',
            'branchCode': '440143'
          },
          {
            'branchName': 'STELLENBOSCH',
            'branchCode': '440110'
          },
          {
            'branchName': 'STILBAAI',
            'branchCode': '440913'
          },
          {
            'branchName': 'SWELLENDAM',
            'branchCode': '440813'
          },
          {
            'branchName': 'TARKASTAD',
            'branchCode': '440120'
          },
          {
            'branchName': 'TULBAGH',
            'branchCode': '440507'
          },
          {
            'branchName': 'UITENHAGE',
            'branchCode': '440116'
          },
          {
            'branchName': 'UPINGTON',
            'branchCode': '440104'
          },
          {
            'branchName': 'VILLIERSDORP',
            'branchCode': '440812'
          },
          {
            'branchName': 'VREDENBURG',
            'branchCode': '440511'
          },
          {
            'branchName': 'VREDENDAL',
            'branchCode': '440206'
          },
          {
            'branchName': 'WELKOM',
            'branchCode': '440135'
          },
          {
            'branchName': 'WITBANK',
            'branchCode': '440250'
          },
          {
            'branchName': 'WORCESTER',
            'branchCode': '440707'
          }
        ]
      },
      {
        'bankCode': '013',
        'bankName': 'NEDBANK LTD INCORP. PEP BANK',
        'universalCode': '400001',
        'rTC': false
      },
      {
        'bankCode': '036',
        'bankName': 'NEDBANK NAMIBIA',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'BUSSINESS CENTRE',
            'branchCode': '461617'
          },
          {
            'branchName': 'EENHANA',
            'branchCode': '461075'
          },
          {
            'branchName': 'FINANCE',
            'branchCode': '461614'
          },
          {
            'branchName': 'GROOTFONTEIN',
            'branchCode': '461077'
          },
          {
            'branchName': 'GROUP RISK',
            'branchCode': '461600'
          },
          {
            'branchName': 'HIDAS AGENCY',
            'branchCode': '461696'
          },
          {
            'branchName': 'HUMAN RESOURCES',
            'branchCode': '461040'
          },
          {
            'branchName': 'INDEPENDENCE',
            'branchCode': '461038'
          },
          {
            'branchName': 'INTERNATIONAL',
            'branchCode': '461616'
          },
          {
            'branchName': 'KATATURA',
            'branchCode': '461001'
          },
          {
            'branchName': 'KATIMA MULILO',
            'branchCode': '461076'
          },
          {
            'branchName': 'KEETMANSHOOP',
            'branchCode': '461611'
          },
          {
            'branchName': 'KUISEBMOND',
            'branchCode': '461073'
          },
          {
            'branchName': 'LUDERITZ',
            'branchCode': '461610'
          },
          {
            'branchName': 'MAERUA MALL',
            'branchCode': '461041'
          },
          {
            'branchName': 'MAIN BRANCH',
            'branchCode': '461609'
          },
          {
            'branchName': 'NORTHERN INDUSTRIAL',
            'branchCode': '461002'
          },
          {
            'branchName': 'OKAHANDJA',
            'branchCode': '461035'
          },
          {
            'branchName': 'ONDANGWA',
            'branchCode': '461125'
          },
          {
            'branchName': 'OSHAKATI',
            'branchCode': '461694'
          },
          {
            'branchName': 'OSHANA',
            'branchCode': '461034'
          },
          {
            'branchName': 'OSHIKANGO',
            'branchCode': '461126'
          },
          {
            'branchName': 'OTJIWARONGO',
            'branchCode': '461071'
          },
          {
            'branchName': 'PRIVATE BANKING',
            'branchCode': '461089'
          },
          {
            'branchName': 'PROCESSING',
            'branchCode': '461613'
          },
          {
            'branchName': 'PROSPERITA',
            'branchCode': '461036'
          },
          {
            'branchName': 'REHOBOTH',
            'branchCode': '461027'
          },
          {
            'branchName': 'RUNDU',
            'branchCode': '461078'
          },
          {
            'branchName': 'SWAKOPMUND',
            'branchCode': '461052'
          },
          {
            'branchName': 'THE GROVE',
            'branchCode': '461030'
          },
          {
            'branchName': 'TREASURY',
            'branchCode': '461615'
          },
          {
            'branchName': 'TSUMEB',
            'branchCode': '461028'
          },
          {
            'branchName': 'UUTAPI',
            'branchCode': '461079'
          },
          {
            'branchName': 'WALVISBAY',
            'branchCode': '461072'
          },
          {
            'branchName': 'WERNHILL AGENCY',
            'branchCode': '461054'
          },
          {
            'branchName': 'WESTLANE',
            'branchCode': '461029'
          },
          {
            'branchName': 'WINDHOEK SOUTH',
            'branchCode': '461629'
          }
        ]
      },
      {
        'bankCode': '006',
        'bankName': 'NEDBANK SWAZILAND LIMITED',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'MANZINI',
            'branchCode': '360264'
          },
          {
            'branchName': 'MATSAPA',
            'branchCode': '360364'
          },
          {
            'branchName': 'MBABANE',
            'branchCode': '360164'
          },
          {
            'branchName': 'NEDBANK BIG BEND',
            'branchCode': '360964'
          },
          {
            'branchName': 'NEDBANK GABLES',
            'branchCode': '360464'
          },
          {
            'branchName': 'NEDBANK GWAMILE',
            'branchCode': '360764'
          },
          {
            'branchName': 'NEDBANK KM111 INTERNATIONAL',
            'branchCode': '360065'
          },
          {
            'branchName': 'NEDBANK MANKAYANE',
            'branchCode': '360564'
          },
          {
            'branchName': 'NEDBANK NHLANGANGO',
            'branchCode': '360864'
          },
          {
            'branchName': 'NEDBANK RIVERSTONE',
            'branchCode': '360064'
          },
          {
            'branchName': 'NEDBANK SIMUNYE',
            'branchCode': '360664'
          },
          {
            'branchName': 'RIVERSTONE',
            'branchCode': '360070'
          },
          {
            'branchName': 'TSHANENI',
            'branchCode': '360001'
          }
        ]
      },
      {
        'bankCode': '028',
        'bankName': 'PEOPLES BANK LTD INC NBS',
        'universalCode': '720026',
        'rTC': false
      },
      {
        'bankCode': '014',
        'bankName': 'S.A. BANK OF ATHENS',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'ALBERTON',
            'branchCode': '410342'
          },
          {
            'branchName': 'ALLENS NEK',
            'branchCode': '410140'
          },
          {
            'branchName': 'BEDFORD CENTRE',
            'branchCode': '410305'
          },
          {
            'branchName': 'BENONI',
            'branchCode': '410142'
          },
          {
            'branchName': 'CAPE TOWN',
            'branchCode': '410109'
          },
          {
            'branchName': 'CENTRALISED SERVICES H/OFFICE',
            'branchCode': '410506'
          },
          {
            'branchName': 'CORPORATE BANKING',
            'branchCode': '410106'
          },
          {
            'branchName': 'DURBAN',
            'branchCode': '410126'
          },
          {
            'branchName': 'EAST RAND MALL',
            'branchCode': '410442'
          },
          {
            'branchName': 'ELECTRONIC BRANCH-CELLMONEY',
            'branchCode': '410500'
          },
          {
            'branchName': 'FLORIDA',
            'branchCode': '410141'
          },
          {
            'branchName': 'GERMISTON',
            'branchCode': '410242'
          },
          {
            'branchName': 'GLEN MARAIS',
            'branchCode': '410542'
          },
          {
            'branchName': 'GOODWOOD',
            'branchCode': '410110'
          },
          {
            'branchName': 'JOHANNESBURG',
            'branchCode': '410105'
          },
          {
            'branchName': 'JOHANNESBURG BAC',
            'branchCode': '410001'
          },
          {
            'branchName': 'P E BUSINESS SUITE',
            'branchCode': '410120'
          },
          {
            'branchName': 'PRETORIA',
            'branchCode': '410145'
          },
          {
            'branchName': 'RANDPARK RIDGE',
            'branchCode': '410205'
          },
          {
            'branchName': 'ROSEBANK,JOHANNESBURG',
            'branchCode': '410405'
          },
          {
            'branchName': 'SABA ELECTRONIC BANKING',
            'branchCode': '410501'
          },
          {
            'branchName': 'SUNNYSIDE',
            'branchCode': '410245'
          },
          {
            'branchName': 'SURE BANK',
            'branchCode': '410600'
          },
          {
            'branchName': 'THUNDERFLEX 39',
            'branchCode': '410777'
          },
          {
            'branchName': 'TYME',
            'branchCode': '410901'
          },
          {
            'branchName': 'WIZZIT',
            'branchCode': '410700'
          }
        ]
      },
      {
        'bankCode': '999',
        'bankName': 'S.A. RESERVE BANK',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'MONEY AND CAPITAL MARKET DEPT.',
            'branchCode': '900105'
          },
          {
            'branchName': 'PRETORIA',
            'branchCode': '900145'
          },
          {
            'branchName': 'STAATSBESTEDINGS(SKATKISORDERS',
            'branchCode': '910145'
          }
        ]
      },
      {
        'bankCode': '019',
        'bankName': 'SA POST OFFICE',
        'universalCode': '460005',
        'rTC': false
      },
      {
        'bankCode': '058',
        'bankName': 'SASFIN BANK',
        'universalCode': '683000',
        'rTC': true
      },
      {
        'bankCode': '002',
        'bankName': 'STANDARD BANK LESOTHO',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'BUTHA-BUTHE',
            'branchCode': '061167'
          },
          {
            'branchName': 'CITY',
            'branchCode': '060667'
          },
          {
            'branchName': 'LERIBE',
            'branchCode': '060867'
          },
          {
            'branchName': 'MAFETENG',
            'branchCode': '060967'
          },
          {
            'branchName': 'MAPUTSOE',
            'branchCode': '061067'
          },
          {
            'branchName': 'MOHALES HOEK',
            'branchCode': '060767'
          }
        ]
      },
      {
        'bankCode': '001',
        'bankName': 'STANDARD BANK OF SOUTH AFRICA',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'STANDARD BANK NAMIBIA',
            'branchCode': '087373'
          },
          {
            'branchName': 'STANDARD BANK SOUTH AFRICA',
            'branchCode': '051001',
            'acceptsRealtimeAVS': true,
            'acceptsBatchAVS': true
          }
        ]
      },
      {
        'bankCode': '034',
        'bankName': 'STANDARD BANK SWAZILAND',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': 'ALLISTER MILLER BRANCH',
            'branchCode': '660664'
          },
          {
            'branchName': 'BIG BEND',
            'branchCode': '660464'
          },
          {
            'branchName': 'MANZINI',
            'branchCode': '663264'
          },
          {
            'branchName': 'MANZINI MAIN BRANCH',
            'branchCode': '660564'
          },
          {
            'branchName': 'MATSAPHA',
            'branchCode': '661364'
          },
          {
            'branchName': 'MATSAPHA CORPORATE BRANCH',
            'branchCode': '663464'
          },
          {
            'branchName': 'MBABANE',
            'branchCode': '663164'
          },
          {
            'branchName': 'NHLANGANO',
            'branchCode': '660964'
          },
          {
            'branchName': 'PIGGS PEAK',
            'branchCode': '661164'
          },
          {
            'branchName': 'SIMUNYE',
            'branchCode': '661264'
          },
          {
            'branchName': 'SWAZILAND OPC',
            'branchCode': '663964'
          },
          {
            'branchName': 'TSHANENI',
            'branchCode': '660864'
          }
        ]
      },
      {
        'bankCode': '029',
        'bankName': 'STANDARD CHARTERED BANK',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'STANDARD CHARTERED BANK',
            'branchCode': '730020'
          },
          {
            'branchName': 'STANDARD CHARTERED HOME LOAN',
            'branchCode': '730027'
          },
          {
            'branchName': 'STANDARD CHARTERED PERS LOAN',
            'branchCode': '730030'
          }
        ]
      },
      {
        'bankCode': '042',
        'bankName': 'STATE BANK OF INDIA',
        'universalCode': '801000',
        'rTC': false
      },
      {
        'bankCode': '015',
        'bankName': 'UBANK LIMITED',
        'universalCode': '431010',
        'rTC': true
      },
      {
        'bankCode': '033',
        'bankName': 'UNIBANK LIMITED',
        'universalCode': '790005',
        'rTC': false
      },
      {
        'bankCode': '043',
        'bankName': 'VBS MUTUAL BANK',
        'universalCode': '588000',
        'rTC': true
      },
      {
        'bankCode': '046',
        'bankName': 'VBS OLYMPUS',
        'universalCode': '585001',
        'rTC': false
      },
      {
        'bankCode': '021',
        'bankName': 'WINDHOEK BANK',
        'rTC': false,
        'branchCodes': [
          {
            'branchName': '//AIGAMS',
            'branchCode': '486272'
          },
          {
            'branchName': 'ACB,CARDS & ELECTR BANK SERV',
            'branchCode': '483772'
          },
          {
            'branchName': 'AIRPORT ( WHK )',
            'branchCode': '485372'
          },
          {
            'branchName': 'AMINUS',
            'branchCode': '485571'
          },
          {
            'branchName': 'ARANOS',
            'branchCode': '485471'
          },
          {
            'branchName': 'CAPRICORN BRANCH',
            'branchCode': '486372'
          },
          {
            'branchName': 'CASH CENTRE',
            'branchCode': '482872'
          },
          {
            'branchName': 'CENTRAL-ADMIN BRANCH ( WHK )',
            'branchCode': '482372'
          },
          {
            'branchName': 'CORPORATE ( WHK )',
            'branchCode': '484072'
          },
          {
            'branchName': 'DIGITAL BRANCH',
            'branchCode': '483773'
          },
          {
            'branchName': 'EENHANA',
            'branchCode': '483973'
          },
          {
            'branchName': 'ELECTRONIC BANKING SERVICES',
            'branchCode': '485272'
          },
          {
            'branchName': 'ESME FINANCE ( WHK )',
            'branchCode': '484872'
          },
          {
            'branchName': 'FUNDING ( WHK )',
            'branchCode': '484672'
          },
          {
            'branchName': 'GLOBAL CUSTODY',
            'branchCode': '486472'
          },
          {
            'branchName': 'GOBABIS',
            'branchCode': '481172'
          },
          {
            'branchName': 'GROOTFONTEIN',
            'branchCode': '482473'
          },
          {
            'branchName': 'HEAD OFFICE DEPARTMENTS',
            'branchCode': '484372'
          },
          {
            'branchName': 'HEAD OFFICE FINANCE',
            'branchCode': '483672'
          },
          {
            'branchName': 'IBS ( WHK )',
            'branchCode': '483272'
          },
          {
            'branchName': 'KARASBURG',
            'branchCode': '481271'
          },
          {
            'branchName': 'KATIMA- MULILO',
            'branchCode': '482273'
          },
          {
            'branchName': 'KATUTURA ( WHK )',
            'branchCode': '482972'
          },
          {
            'branchName': 'KEETMANSHOOP',
            'branchCode': '481371'
          },
          {
            'branchName': 'KHOMASDAL',
            'branchCode': '486172'
          },
          {
            'branchName': 'KUDU (WINDHOEK)',
            'branchCode': '482172'
          },
          {
            'branchName': 'LEGAL BRANCH ( WHK )',
            'branchCode': '484572'
          },
          {
            'branchName': 'LUDERITZ',
            'branchCode': '485971'
          },
          {
            'branchName': 'MAERUA MALL AND AUSPANNPLATZ',
            'branchCode': '483872'
          },
          {
            'branchName': 'MARIENTAL',
            'branchCode': '481471'
          },
          {
            'branchName': 'MICRO FINANCE AND SME',
            'branchCode': '483472'
          },
          {
            'branchName': 'NKURENKURU',
            'branchCode': '485773'
          },
          {
            'branchName': 'NOORDOEWER',
            'branchCode': '485171'
          },
          {
            'branchName': 'OKAHANDJA',
            'branchCode': '482773'
          },
          {
            'branchName': 'OKAHAO',
            'branchCode': '484174'
          },
          {
            'branchName': 'OKAKARARA',
            'branchCode': '484773'
          },
          {
            'branchName': 'OKAUKUEJO',
            'branchCode': '486073'
          },
          {
            'branchName': 'OLD MUTUAL BRANCH',
            'branchCode': '484772'
          },
          {
            'branchName': 'OMARURU',
            'branchCode': '485873'
          },
          {
            'branchName': 'OMUTHIYA',
            'branchCode': '486571'
          },
          {
            'branchName': 'ONDANGWA',
            'branchCode': '483373'
          },
          {
            'branchName': 'ONGWEDIVA',
            'branchCode': '485673'
          },
          {
            'branchName': 'OPUWO',
            'branchCode': '484273'
          },
          {
            'branchName': 'ORANJEMUND',
            'branchCode': '481571'
          },
          {
            'branchName': 'OSHAKATI',
            'branchCode': '482673'
          },
          {
            'branchName': 'OSHAKATI - NORTH',
            'branchCode': '484973'
          },
          {
            'branchName': 'OSHIFO SERVICE CENTRE',
            'branchCode': '486672'
          },
          {
            'branchName': 'OSHIKANGO',
            'branchCode': '486473'
          },
          {
            'branchName': 'OTAPI',
            'branchCode': '484173'
          },
          {
            'branchName': 'OTJIWARONGO',
            'branchCode': '481573'
          },
          {
            'branchName': 'OUTJO',
            'branchCode': '481673'
          },
          {
            'branchName': 'PRIVATE BANK',
            'branchCode': '484172'
          },
          {
            'branchName': 'PROPERTY FINANCE ( WHK )',
            'branchCode': '484472'
          },
          {
            'branchName': 'REHOBOTH',
            'branchCode': '486572'
          },
          {
            'branchName': 'RUNDU',
            'branchCode': '483173'
          },
          {
            'branchName': 'SWAKOPMUND',
            'branchCode': '481772'
          },
          {
            'branchName': 'THE GROVE BRANCH',
            'branchCode': '483871'
          },
          {
            'branchName': 'TREASURY ( WHK )',
            'branchCode': '483572'
          },
          {
            'branchName': 'TSUMEB',
            'branchCode': '483073'
          },
          {
            'branchName': 'VEHICLE & ASSET',
            'branchCode': '482072'
          },
          {
            'branchName': 'WALVIS BAAI',
            'branchCode': '481872'
          },
          {
            'branchName': 'WINDHOEK',
            'branchCode': '481972'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 43,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getBranches (req, res, next) {
  res.json({
    'data': {
      'branchName': 'Model Town',
      'branchCode': 'GB211120'
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

function getFNBBranches (req, res, next) {
  res.json({
    'data': [
      {
        'branchName': 'FNB LESOTHO',
        'branchCode': '280061'
      },
      {
        'branchName': 'FNB NAMIBIA',
        'branchCode': '282672'
      },
      {
        'branchName': 'FNB SOUTH AFRICA',
        'branchCode': '250655',
        'acceptsRealtimeAVS': true,
        'acceptsBatchAVS': true
      },
      {
        'branchName': 'FNB SWAZILAND',
        'branchCode': '287364'
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 4,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getBankDefinedBeneficiaries (req, res, next) {
  res.json(
    {
      'data': [
        {
          'bDFID': '792010293471',
          'bDFName': 'Mark Twain',
          'sortCode': 1
        },
        {
          'bDFID': '792010293472',
          'bDFName': 'Steve Muller',
          'sortCode': 2
        },
        {
          'bDFID': '920326934730',
          'bDFName': 'Park Steven',
          'sortCode': 3
        },
        {
          'bDFID': '972890363232',
          'bDFName': 'Barb Oliver',
          'sortCode': 4
        },
        {
          'bDFID': '132010290213',
          'bDFName': 'Jack Balmer',
          'sortCode': 5
        },
        {
          'bDFID': '819379173209',
          'bDFName': 'Charlie Harper',
          'sortCode': 6
        },
        {
          'bDFID': '671010317829',
          'bDFName': 'Steve Gibson',
          'sortCode': 7
        },
        {
          'bDFID': '662010386973',
          'bDFName': 'Mathew Marvel',
          'sortCode': 8
        },
        {
          'bDFID': '912011386970',
          'bDFName': 'John Dow',
          'sortCode': 9
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
    }
  )
}

function getNotificationTypesLatest (req, res, next) {
  res.json({
    'data': [
      {
        'notificationType': 'SMS'
      },
      {
        'notificationType': 'EMAIL'
      },
      {
        'notificationType': 'FAX'
      },
      {
        'notificationType': 'SecureInbox'
      }
    ]
  })
}

function getServiceProviders (req, res, next) {
  res.json({
    'data': [
      {
        'serviceProviderCode': 'BLT',
        'serviceProviderName': 'BLUE LABEL'
      },
      {
        'serviceProviderCode': 'CLC',
        'serviceProviderName': 'Cell C'
      },
      {
        'serviceProviderCode': 'GDN',
        'serviceProviderName': 'ITHUBA'
      },
      {
        'serviceProviderCode': 'MTN',
        'serviceProviderName': 'MTN'
      },
      {
        'serviceProviderCode': 'NED',
        'serviceProviderName': 'NEDBANK'
      },
      {
        'serviceProviderCode': 'TLK',
        'serviceProviderName': 'Telkom Prepaidfone'
      },
      {
        'serviceProviderCode': 'VDC',
        'serviceProviderName': 'Vodacom'
      },
      {
        'serviceProviderCode': 'VGN',
        'serviceProviderName': 'Virgin'
      },
      {
        'serviceProviderCode': '8TA',
        'serviceProviderName': 'Telkom Mobile'
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 9,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getBLTServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PEL',
        'productDescription': 'Prepaid Electricity',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': ' '
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getCLCServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PAI',
        'productDescription': 'Prepaid Airtime',
        'minAmount': 5,
        'maxAmount': 1000,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 10,
            'bundleList': 'R',
            'bundleValue': 10
          },
          {
            'amountValue': 29,
            'bundleList': 'R',
            'bundleValue': 29
          },
          {
            'amountValue': 50,
            'bundleList': 'R',
            'bundleValue': 50
          },
          {
            'amountValue': 100,
            'bundleList': 'R',
            'bundleValue': 100
          },
          {
            'amountValue': 200,
            'bundleList': 'R',
            'bundleValue': 200
          }
        ]
      },
      {
        'productCode': 'PCB',
        'productDescription': 'All in One',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 49,
            'bundleList': 'SMS',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 49,
            'bundleList': 'DAY',
            'bundleValue': 30
          },
          {
            'amountValue': 49,
            'bundleList': 'MIN',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 89,
            'bundleList': 'SMS',
            'bundleValue': 200
          },
          {
            'amountValue': 89,
            'bundleList': 'DAY',
            'bundleValue': 30
          },
          {
            'amountValue': 89,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 89,
            'bundleList': 'MIN',
            'bundleValue': 200
          },
          {
            'amountValue': 89,
            'bundleList': 'MB',
            'bundleValue': 200
          },
          {
            'amountValue': 199,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 199,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 199,
            'bundleList': 'DAY',
            'bundleValue': 60
          },
          {
            'amountValue': 199,
            'bundleList': 'MIN',
            'bundleValue': 500
          },
          {
            'amountValue': 199,
            'bundleList': 'SMS',
            'bundleValue': 500
          }
        ]
      },
      {
        'productCode': 'PDA',
        'productDescription': 'Prepaid Data Bundle',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 12,
            'bundleList': 'MB',
            'bundleValue': 30
          },
          {
            'amountValue': 20,
            'bundleList': 'MB',
            'bundleValue': 60
          },
          {
            'amountValue': 29,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'MB',
            'bundleValue': 200
          },
          {
            'amountValue': 99,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 149,
            'bundleList': 'GB',
            'bundleValue': 1
          },
          {
            'amountValue': 249,
            'bundleList': 'GB',
            'bundleValue': 2
          },
          {
            'amountValue': 299,
            'bundleList': 'GB',
            'bundleValue': 3
          },
          {
            'amountValue': 399,
            'bundleList': 'GB',
            'bundleValue': 5
          },
          {
            'amountValue': 599,
            'bundleList': 'GB',
            'bundleValue': 10
          },
          {
            'amountValue': 999,
            'bundleList': 'GB',
            'bundleValue': 20
          }
        ]
      },
      {
        'productCode': 'PDN',
        'productDescription': 'Prepaid Daily Bundle',
        'minAmount': 3,
        'maxAmount': 20,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 4,
            'bundleList': 'MB',
            'bundleValue': 20
          },
          {
            'amountValue': 6,
            'bundleList': 'MB',
            'bundleValue': 250
          },
          {
            'amountValue': 8.5,
            'bundleList': 'MB',
            'bundleValue': 50
          },
          {
            'amountValue': 14,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 15,
            'bundleList': 'GB',
            'bundleValue': 1
          }
        ]
      },
      {
        'productCode': 'PSM',
        'productDescription': 'Prepaid SMS Bundle',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 15,
            'bundleList': 'SMS',
            'bundleValue': 50
          },
          {
            'amountValue': 30,
            'bundleList': 'SMS',
            'bundleValue': 100
          },
          {
            'amountValue': 45,
            'bundleList': 'SMS',
            'bundleValue': 200
          },
          {
            'amountValue': 65,
            'bundleList': 'SMS',
            'bundleValue': 300
          },
          {
            'amountValue': 105,
            'bundleList': 'SMS',
            'bundleValue': 500
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 5,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getGDNServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PAI',
        'productDescription': 'Prepaid Airtime',
        'minAmount': 5,
        'maxAmount': 1000,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 10,
            'bundleList': 'R',
            'bundleValue': 10
          },
          {
            'amountValue': 29,
            'bundleList': 'R',
            'bundleValue': 29
          },
          {
            'amountValue': 50,
            'bundleList': 'R',
            'bundleValue': 50
          },
          {
            'amountValue': 100,
            'bundleList': 'R',
            'bundleValue': 100
          },
          {
            'amountValue': 200,
            'bundleList': 'R',
            'bundleValue': 200
          }
        ]
      },
      {
        'productCode': 'PCB',
        'productDescription': 'All in One',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 49,
            'bundleList': 'SMS',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 49,
            'bundleList': 'DAY',
            'bundleValue': 30
          },
          {
            'amountValue': 49,
            'bundleList': 'MIN',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 89,
            'bundleList': 'SMS',
            'bundleValue': 200
          },
          {
            'amountValue': 89,
            'bundleList': 'DAY',
            'bundleValue': 30
          },
          {
            'amountValue': 89,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 89,
            'bundleList': 'MIN',
            'bundleValue': 200
          },
          {
            'amountValue': 89,
            'bundleList': 'MB',
            'bundleValue': 200
          },
          {
            'amountValue': 199,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 199,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 199,
            'bundleList': 'DAY',
            'bundleValue': 60
          },
          {
            'amountValue': 199,
            'bundleList': 'MIN',
            'bundleValue': 500
          },
          {
            'amountValue': 199,
            'bundleList': 'SMS',
            'bundleValue': 500
          }
        ]
      },
      {
        'productCode': 'PDA',
        'productDescription': 'Prepaid Data Bundle',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 12,
            'bundleList': 'MB',
            'bundleValue': 30
          },
          {
            'amountValue': 20,
            'bundleList': 'MB',
            'bundleValue': 60
          },
          {
            'amountValue': 29,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'MB',
            'bundleValue': 200
          },
          {
            'amountValue': 99,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 149,
            'bundleList': 'GB',
            'bundleValue': 1
          },
          {
            'amountValue': 249,
            'bundleList': 'GB',
            'bundleValue': 2
          },
          {
            'amountValue': 299,
            'bundleList': 'GB',
            'bundleValue': 3
          },
          {
            'amountValue': 399,
            'bundleList': 'GB',
            'bundleValue': 5
          },
          {
            'amountValue': 599,
            'bundleList': 'GB',
            'bundleValue': 10
          },
          {
            'amountValue': 999,
            'bundleList': 'GB',
            'bundleValue': 20
          }
        ]
      },
      {
        'productCode': 'PDN',
        'productDescription': 'Prepaid Daily Bundle',
        'minAmount': 3,
        'maxAmount': 20,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 4,
            'bundleList': 'MB',
            'bundleValue': 20
          },
          {
            'amountValue': 6,
            'bundleList': 'MB',
            'bundleValue': 250
          },
          {
            'amountValue': 8.5,
            'bundleList': 'MB',
            'bundleValue': 50
          },
          {
            'amountValue': 14,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 15,
            'bundleList': 'GB',
            'bundleValue': 1
          }
        ]
      },
      {
        'productCode': 'PSM',
        'productDescription': 'Prepaid SMS Bundle',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 15,
            'bundleList': 'SMS',
            'bundleValue': 50
          },
          {
            'amountValue': 30,
            'bundleList': 'SMS',
            'bundleValue': 100
          },
          {
            'amountValue': 45,
            'bundleList': 'SMS',
            'bundleValue': 200
          },
          {
            'amountValue': 65,
            'bundleList': 'SMS',
            'bundleValue': 300
          },
          {
            'amountValue': 105,
            'bundleList': 'SMS',
            'bundleValue': 500
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 5,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getMTNServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PAI',
        'productDescription': 'Prepaid Airtime',
        'minAmount': 5,
        'maxAmount': 1000,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 10,
            'bundleList': 'R',
            'bundleValue': 10
          },
          {
            'amountValue': 29,
            'bundleList': 'R',
            'bundleValue': 29
          },
          {
            'amountValue': 50,
            'bundleList': 'R',
            'bundleValue': 50
          },
          {
            'amountValue': 100,
            'bundleList': 'R',
            'bundleValue': 100
          },
          {
            'amountValue': 200,
            'bundleList': 'R',
            'bundleValue': 200
          }
        ]
      },
      {
        'productCode': 'PCB',
        'productDescription': 'All in One',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 49,
            'bundleList': 'SMS',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 49,
            'bundleList': 'DAY',
            'bundleValue': 30
          },
          {
            'amountValue': 49,
            'bundleList': 'MIN',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 89,
            'bundleList': 'SMS',
            'bundleValue': 200
          },
          {
            'amountValue': 89,
            'bundleList': 'DAY',
            'bundleValue': 30
          },
          {
            'amountValue': 89,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 89,
            'bundleList': 'MIN',
            'bundleValue': 200
          },
          {
            'amountValue': 89,
            'bundleList': 'MB',
            'bundleValue': 200
          },
          {
            'amountValue': 199,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 199,
            'bundleList': 'WIN',
            'bundleValue': 120
          },
          {
            'amountValue': 199,
            'bundleList': 'DAY',
            'bundleValue': 60
          },
          {
            'amountValue': 199,
            'bundleList': 'MIN',
            'bundleValue': 500
          },
          {
            'amountValue': 199,
            'bundleList': 'SMS',
            'bundleValue': 500
          }
        ]
      },
      {
        'productCode': 'PDA',
        'productDescription': 'Prepaid Data Bundle',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 12,
            'bundleList': 'MB',
            'bundleValue': 30
          },
          {
            'amountValue': 20,
            'bundleList': 'MB',
            'bundleValue': 60
          },
          {
            'amountValue': 29,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 49,
            'bundleList': 'MB',
            'bundleValue': 200
          },
          {
            'amountValue': 99,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 149,
            'bundleList': 'GB',
            'bundleValue': 1
          },
          {
            'amountValue': 249,
            'bundleList': 'GB',
            'bundleValue': 2
          },
          {
            'amountValue': 299,
            'bundleList': 'GB',
            'bundleValue': 3
          },
          {
            'amountValue': 399,
            'bundleList': 'GB',
            'bundleValue': 5
          },
          {
            'amountValue': 599,
            'bundleList': 'GB',
            'bundleValue': 10
          },
          {
            'amountValue': 999,
            'bundleList': 'GB',
            'bundleValue': 20
          }
        ]
      },
      {
        'productCode': 'PDN',
        'productDescription': 'Prepaid Daily Bundle',
        'minAmount': 3,
        'maxAmount': 20,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 4,
            'bundleList': 'MB',
            'bundleValue': 20
          },
          {
            'amountValue': 6,
            'bundleList': 'MB',
            'bundleValue': 250
          },
          {
            'amountValue': 8.5,
            'bundleList': 'MB',
            'bundleValue': 50
          },
          {
            'amountValue': 14,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 15,
            'bundleList': 'GB',
            'bundleValue': 1
          }
        ]
      },
      {
        'productCode': 'PSM',
        'productDescription': 'Prepaid SMS Bundle',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'DIAL 141>LISTEN>PRESS 1>(ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 15,
            'bundleList': 'SMS',
            'bundleValue': 50
          },
          {
            'amountValue': 30,
            'bundleList': 'SMS',
            'bundleValue': 100
          },
          {
            'amountValue': 45,
            'bundleList': 'SMS',
            'bundleValue': 200
          },
          {
            'amountValue': 65,
            'bundleList': 'SMS',
            'bundleValue': 300
          },
          {
            'amountValue': 105,
            'bundleList': 'SMS',
            'bundleValue': 500
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 5,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getNEDServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PMS',
        'productDescription': 'Money Send',
        'minAmount': 20,
        'maxAmount': 2500,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': ' '
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getTLKServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PAI',
        'productDescription': 'Prepaid Airtime',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'DIAL *#55 >LISTEN>PRESS OPTION TO RECHARGE> (ENTER PIN)> PRESS #',
        'productDetails': [
          {
            'amountValue': 40,
            'bundleList': 'R',
            'bundleValue': 40
          },
          {
            'amountValue': 50,
            'bundleList': 'R',
            'bundleValue': 50
          },
          {
            'amountValue': 100,
            'bundleList': 'R',
            'bundleValue': 100
          },
          {
            'amountValue': 200,
            'bundleList': 'R',
            'bundleValue': 200
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getVDCServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PAI',
        'productDescription': 'Prepaid Airtime',
        'minAmount': 5,
        'maxAmount': 1000,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'PRESS *100*01*> (ENTER PIN)>> PRESS # > PRESS DIAL',
        'productDetails': [
          {
            'amountValue': 5,
            'bundleList': 'R',
            'bundleValue': 5
          },
          {
            'amountValue': 29,
            'bundleList': 'R',
            'bundleValue': 29
          },
          {
            'amountValue': 50,
            'bundleList': 'R',
            'bundleValue': 50
          },
          {
            'amountValue': 100,
            'bundleList': 'R',
            'bundleValue': 100
          },
          {
            'amountValue': 200,
            'bundleList': 'R',
            'bundleValue': 200
          }
        ]
      },
      {
        'productCode': 'PBB',
        'productDescription': 'Big Bonus Voucher',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': false,
        'voucherTopupInstructions': 'PRESS *100*01*> (ENTER PIN)>> PRESS # > PRESS DIAL',
        'productDetails': [
          {
            'amountValue': 899,
            'bundleList': 'R/M',
            'bundleValue': 75
          }
        ]
      },
      {
        'productCode': 'PBS',
        'productDescription': 'Prepaid BIS',
        'minAmount': 59,
        'maxAmount': 708,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'PRESS *100*01*> (ENTER PIN)>> PRESS # > PRESS DIAL',
        'productDetails': [
          {
            'amountValue': 59,
            'bundleList': 'BIS',
            'bundleValue': 30
          },
          {
            'amountValue': 177,
            'bundleList': 'BIS',
            'bundleValue': 90
          },
          {
            'amountValue': 354,
            'bundleList': 'BIS',
            'bundleValue': 180
          },
          {
            'amountValue': 708,
            'bundleList': 'BIS',
            'bundleValue': 360
          }
        ]
      },
      {
        'productCode': 'PDA',
        'productDescription': 'Prepaid Data Bundle',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'PRESS *100*01*> (ENTER PIN)>> PRESS # > PRESS DIAL',
        'productDetails': [
          {
            'amountValue': 12,
            'bundleList': 'MB',
            'bundleValue': 30
          },
          {
            'amountValue': 29,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 59,
            'bundleList': 'MB',
            'bundleValue': 250
          },
          {
            'amountValue': 99,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 149,
            'bundleList': 'GB',
            'bundleValue': 1
          },
          {
            'amountValue': 249,
            'bundleList': 'GB',
            'bundleValue': 2
          },
          {
            'amountValue': 299,
            'bundleList': 'GB',
            'bundleValue': 3
          },
          {
            'amountValue': 399,
            'bundleList': 'GB',
            'bundleValue': 5
          },
          {
            'amountValue': 599,
            'bundleList': 'GB',
            'bundleValue': 10
          },
          {
            'amountValue': 999,
            'bundleList': 'GB',
            'bundleValue': 20
          }
        ]
      },
      {
        'productCode': 'PDB',
        'productDescription': 'Power DATA Bundle',
        'minAmount': 5,
        'maxAmount': 5,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'PRESS *100*01*> (ENTER PIN)>> PRESS # > PRESS DIAL',
        'productDetails': [
          {
            'amountValue': 4,
            'bundleList': 'MB',
            'bundleValue': 50
          }
        ]
      },
      {
        'productCode': 'PDW',
        'productDescription': 'WI-FI Data Bundle',
        'minAmount': 19,
        'maxAmount': 99,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'PRESS *100*01*> (ENTER PIN)>> PRESS # > PRESS DIAL',
        'productDetails': [
          {
            'amountValue': 19,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 29,
            'bundleList': 'MB',
            'bundleValue': 250
          },
          {
            'amountValue': 39,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 99,
            'bundleList': 'MB',
            'bundleValue': 2048
          }
        ]
      },
      {
        'productCode': 'PSM',
        'productDescription': 'Prepaid SMS Bundle',
        'minAmount': 0,
        'maxAmount': 0,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'PRESS *100*01*> (ENTER PIN)>> PRESS # > PRESS DIAL',
        'productDetails': [
          {
            'amountValue': 10,
            'bundleList': 'SMS',
            'bundleValue': 20
          },
          {
            'amountValue': 25,
            'bundleList': 'SMS',
            'bundleValue': 50
          },
          {
            'amountValue': 33,
            'bundleList': 'SMS',
            'bundleValue': 100
          },
          {
            'amountValue': 45,
            'bundleList': 'SMS',
            'bundleValue': 200
          },
          {
            'amountValue': 67.5,
            'bundleList': 'SMS',
            'bundleValue': 300
          },
          {
            'amountValue': 112.5,
            'bundleList': 'SMS',
            'bundleValue': 500
          },
          {
            'amountValue': 225,
            'bundleList': 'SMS',
            'bundleValue': 1000
          },
          {
            'amountValue': 337.5,
            'bundleList': 'SMS',
            'bundleValue': 1500
          },
          {
            'amountValue': 450,
            'bundleList': 'SMS',
            'bundleValue': 2000
          }
        ]
      },
      {
        'productCode': 'PVB',
        'productDescription': 'Power Voice Bundle',
        'minAmount': 2,
        'maxAmount': 5,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': 'PRESS *100*01*> (ENTER PIN)>> PRESS # > PRESS DIAL',
        'productDetails': [
          {
            'amountValue': 2,
            'bundleList': 'MIN',
            'bundleValue': 10
          },
          {
            'amountValue': 5,
            'bundleList': 'MIN',
            'bundleValue': 60
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 8,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getVGNServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PAI',
        'productDescription': 'Prepaid Airtime',
        'minAmount': 5,
        'maxAmount': 1000,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': 'PRESS *102*>(ENTER PIN)> # >DIAL',
        'productDetails': [
          {
            'amountValue': 5,
            'bundleList': 'R',
            'bundleValue': 5
          },
          {
            'amountValue': 10,
            'bundleList': 'R',
            'bundleValue': 10
          },
          {
            'amountValue': 20,
            'bundleList': 'R',
            'bundleValue': 20
          },
          {
            'amountValue': 30,
            'bundleList': 'R',
            'bundleValue': 30
          },
          {
            'amountValue': 50,
            'bundleList': 'R',
            'bundleValue': 50
          },
          {
            'amountValue': 100,
            'bundleList': 'R',
            'bundleValue': 100
          },
          {
            'amountValue': 250,
            'bundleList': 'R',
            'bundleValue': 250
          },
          {
            'amountValue': 500,
            'bundleList': 'R',
            'bundleValue': 500
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function get8TAServiceProviderProducts (req, res, next) {
  res.json({
    'data': [
      {
        'productCode': 'PAI',
        'productDescription': 'Prepaid Airtime',
        'minAmount': 5,
        'maxAmount': 1000,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': ' ',
        'productDetails': [
          {
            'amountValue': 10,
            'bundleList': 'R',
            'bundleValue': 10
          },
          {
            'amountValue': 20,
            'bundleList': 'R',
            'bundleValue': 20
          },
          {
            'amountValue': 29,
            'bundleList': 'R',
            'bundleValue': 29
          },
          {
            'amountValue': 30,
            'bundleList': 'R',
            'bundleValue': 30
          },
          {
            'amountValue': 50,
            'bundleList': 'R',
            'bundleValue': 50
          },
          {
            'amountValue': 100,
            'bundleList': 'R',
            'bundleValue': 100
          },
          {
            'amountValue': 200,
            'bundleList': 'R',
            'bundleValue': 200
          },
          {
            'amountValue': 250,
            'bundleList': 'R',
            'bundleValue': 250
          },
          {
            'amountValue': 1000,
            'bundleList': 'R',
            'bundleValue': 1000
          }
        ]
      },
      {
        'productCode': 'PDA',
        'productDescription': 'Prepaid Data Bundle',
        'minAmount': 5,
        'maxAmount': 1000,
        'allowPurchaseNow': true,
        'allowFutureDated': true,
        'allowRecurring': true,
        'voucherTopupInstructions': ' ',
        'productDetails': [
          {
            'amountValue': 7.25,
            'bundleList': 'MB',
            'bundleValue': 25
          },
          {
            'amountValue': 14.5,
            'bundleList': 'MB',
            'bundleValue': 50
          },
          {
            'amountValue': 29,
            'bundleList': 'MB',
            'bundleValue': 100
          },
          {
            'amountValue': 39,
            'bundleList': 'MB',
            'bundleValue': 250
          },
          {
            'amountValue': 69,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 99,
            'bundleList': 'GB',
            'bundleValue': 1
          },
          {
            'amountValue': 139,
            'bundleList': 'GB',
            'bundleValue': 2
          },
          {
            'amountValue': 199,
            'bundleList': 'GB',
            'bundleValue': 3
          },
          {
            'amountValue': 299,
            'bundleList': 'GB',
            'bundleValue': 5
          },
          {
            'amountValue': 499,
            'bundleList': 'GB',
            'bundleValue': 10
          },
          {
            'amountValue': 899,
            'bundleList': 'GB',
            'bundleValue': 20
          }
        ]
      },
      {
        'productCode': 'PFB',
        'productDescription': 'FreeMe DATA Bundle',
        'minAmount': 5,
        'maxAmount': 1000,
        'allowPurchaseNow': true,
        'allowFutureDated': false,
        'allowRecurring': false,
        'voucherTopupInstructions': ' ',
        'productDetails': [
          {
            'amountValue': 69,
            'bundleList': 'MB',
            'bundleValue': 500
          },
          {
            'amountValue': 99,
            'bundleList': 'GB',
            'bundleValue': 1
          },
          {
            'amountValue': 149,
            'bundleList': 'GB',
            'bundleValue': 2
          },
          {
            'amountValue': 199,
            'bundleList': 'GB',
            'bundleValue': 3
          },
          {
            'amountValue': 299,
            'bundleList': 'GB',
            'bundleValue': 5
          },
          {
            'amountValue': 399,
            'bundleList': 'GB',
            'bundleValue': 10
          },
          {
            'amountValue': 599,
            'bundleList': 'GB',
            'bundleValue': 20
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 3,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function getFrequency (req, res, next) {
  res.json({
    'data': {
      'reoccurrenceFrequency': 'WEEKLY',
      'reoccFreqLimPeriod': 1,
      'recValidWeekList': [
        {
          'recDayName': 'MONDAY',
          'recDayNum': '1',
          'recDayType': 'B'
        }
      ],
      'recValidMonthItems': [
        {
          'recValDays': '04'
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

function getDrawResults (req, res, next) {
  res.json({
    'data': {
      'drawName': 'SuperLotto',
      'drawDate': '2017-07-13',
      'nextDrawDate': '2017-07-13',
      'drawNumber': 345127809256,
      'ballDetails': [
        {
          'sequenceNumber': '567',
          'ballNumber': 1
        }
      ],
      'winnerDetails': [
        {
          'divisionNumber': 12,
          'payoutAmount': 1000,
          'numberOfWinners': 10
        }
      ],
      'rolloverAmount': 10,
      'rolloverNumber': 10,
      'totalPrizePoolAmount': 100000,
      'totalSalesAmount': 1000,
      'estimatedJackpotAmount': 10000,
      'guaranteedJackpotAmount': 1000,
      'drawMachineName': 'LottoBowl',
      'ballSetNumber': '777',
      'powerBallDrawMachineName': 'LottoPower',
      'powerballSetNumber': '999',
      'provincialWinners': {}
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

function getLottoJackpot (req, res, next) {
  res.json({
    'data': [
      {
        'game': 'PowerBall',
        'nextDrawDate': '2017-07-13',
        'drawNumber': 777,
        'jackpotAmount': 1000000
      }
    ],
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

function getLottoMetadata (req, res, next) {
  res.json({
    'data': {
      'gameType': 2,
      'gameTypeName': 'PowerBall',
      'startTime': '2017-07-13',
      'cutOffTimes': [
        {
          'dayNumber': 7,
          'dayName': 'Sunday',
          'time': '17:00'
        }
      ],
      'drawDays': [
        {
          'drawDayNumber': 7,
          'drawDayName': 'Sunday'
        }
      ],
      'postponed': true,
      'boardPrice': 1000,
      'lottoPlusPrice': 10,
      'maxNumberOfBoardsAllowed': 100,
      'maxNumberOfDrawsAllowed': 10,
      'minimumNumberOfBoardsAllowed': 10,
      'minimumNumberOfDrawsAllowed': 2
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

function getStopPaymentReasons (req, res, next) {
  res.json({
    'data': [
      {
        'channelTechType': 'StopPayment',
        'code': '1133213',
        'description': 'Stop payment'
      }
    ],
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

function getDisputeDebitOrderReasons (req, res, next) {
  res.json({
    'data': [
      {
        'channelTechType': 'debitOrderReasons',
        'code': '1332333',
        'description': 'Dispute debit order reasons'
      }
    ],
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
