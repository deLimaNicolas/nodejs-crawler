export default {
    logstashConfig: {
        env: process.env.ENV || 'dev',
        dev: {
            port: 54000,
            host: '54.187.143.168',
        },
        prd: {}
    }
};
