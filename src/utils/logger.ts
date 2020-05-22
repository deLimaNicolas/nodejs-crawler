import winston from 'winston';
const { Logstash } = require('winston-logstash');
import config from '../utils/config';

winston.add(Logstash, config.logstashConfig.dev);

export default winston;

