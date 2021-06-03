import winston = require('winston');

export function configureWinston(verbose: boolean) {
    winston.configure({
        transports: [
            new (winston.transports.Console)({
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.simple()
                )
            })
        ]
    });
    if (verbose) {
        winston.level = 'debug';
    } else {
        winston.level = 'info';
    }
}