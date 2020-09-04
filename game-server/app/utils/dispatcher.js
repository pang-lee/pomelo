const crc = require('crc')

module.exports.dispatch = function(uid, connectors) {
    const index = Math.abs(crc.crc32(uid)) % connectors.length
    return connectors[index]
};