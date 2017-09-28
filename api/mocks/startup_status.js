'use strict'

module.exports = {
  getStartupStatus: getStartupStatus
}

function getStartupStatus (req, res) {
  res.json(new StartupStatus())
}

function StartupStatus () {
  this.mobileApiUrl = 'https://api-q.nedsecure.co.za/nedbank/'
  this.clientId = '1234'
  this.mobileApiToken = ''
  this.termsAndConditionsVersion = 1
  this.showTermsConditions = true
  this.showEnrolment = true
}
