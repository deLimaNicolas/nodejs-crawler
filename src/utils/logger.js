//this module is having issues with ts version
var winston = require('winston')
require('winston-logstash')
const config = require('../../config')

winston.add(winston.transports.Logstash, config.logstashConfig.dev)
module.exports = winston
