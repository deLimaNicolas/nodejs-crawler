const config = {
  logstashConfig: {
    env: process.env.ENV || 'dev',
    dev: {
      port: 54000,
      host: '54.187.143.168',
      node_name: 'mundiale',
    },
    prd: {},
  },
};

export default config;
