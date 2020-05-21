import winston from 'winston';
import { LogstashTransport } from 'winston-logstash-ts';
import config from './config';

winston.add(LogstashTransport, config.logstashConfig);

export default winston;
