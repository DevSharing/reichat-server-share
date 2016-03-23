/// <reference path="../typings/tsd.d.ts" />
'use strict';
(function (EForwardedHeaderType) {
    EForwardedHeaderType[EForwardedHeaderType["XFF"] = 0] = "XFF";
})(exports.EForwardedHeaderType || (exports.EForwardedHeaderType = {}));
var EForwardedHeaderType = exports.EForwardedHeaderType;
function getRemoteAddr(socket, forwardedHeaderType) {
    if (forwardedHeaderType === 0 /* XFF */) {
        return socket.client.request.headers['x-forwarded-for'] || socket.client.conn.remoteAddress;
    }
    else {
        return socket.client.conn.remoteAddress;
    }
}
exports.getRemoteAddr = getRemoteAddr;
