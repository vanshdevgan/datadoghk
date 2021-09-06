const { createLogger, format, transports } = require('winston');

const httpTransportOptions = {
  host: 'http-intake.logs.datadoghq.com',
  path: '/v1/input/fbbfa3d89b8c08c20dc55ade12515156?ddsource=nodejs&service=<APPLICATION_NAME>',
  ssl: true
};

const winstonlogger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.Http(httpTransportOptions),
  ],
});

module.exports = winstonlogger;

