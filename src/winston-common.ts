import winston = require('winston');
import _ = require('lodash');
import util = require('util');

function formatter(args) {
    var msg = args.level + ' - ' + args.message + (_.isEmpty(args.meta) ? '' : (' - ' + util.inspect(args.meta)));
    return msg;
}

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