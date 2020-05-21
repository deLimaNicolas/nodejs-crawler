import winston from 'winston';
import { LogstashTransport } from 'winston-logstash-ts';

winston.add(LogstashTransport, {
    port: 54000,
    node_name: 'nicolas',
    host: '54.187.143.168'
});

export default winston;
