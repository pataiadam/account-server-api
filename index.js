'use strict';
var Promise = require("bluebird");
var request = Promise.promisify(require("request"));
/**
 * A module for interacting with Account-Server APIs
 */

class AccountServerApis {
    constructor(options) {
        if(!options.appId){
            throw new Error('Missing appId from options')
        }
        if(!options.accountServerURL){
            throw new Error('Missing accountServerURL from options')
        }
        if (options.accountServerURL.endsWith("/")) {
            options.accountServerURL = options.accountServerURL.substr(0, options.accountServerURL.length - 1);
        }
        this.options = options;
    }

    auth(body) {
        var self = this;
        var endpoint = '/auth';
        return new Promise(function(resolve, reject) {
            body.appId = self.options.appId;
            var options = {
                method: 'POST',
                url: self.options.accountServerURL+endpoint,
                headers: {
                    'Content-Type': 'application/json'
                },
                json: body
            };
            request(options).then(r => resolve(r.body)).catch(reject);
        });
    }
}


/**
 * Exports account-server-api.
 */
module.exports = AccountServerApis;