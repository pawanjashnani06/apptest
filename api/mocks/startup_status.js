'use strict'

module.exports = {
  getStartupStatus: getStartupStatus
}

function getStartupStatus (req, res) {
  res.json(new StartupStatus())
}

function StartupStatus () {
  this.mobileApiUrl = 'http://api.godigitalbank.com/api/services/v1/'
  this.clientId = '1234'
  this.mobileApiToken = ''
  this.termsAndConditionsVersion = 1
  this.showTermsConditions = true
  this.showEnrolment = true
}
