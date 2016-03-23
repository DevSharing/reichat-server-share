/// <reference path="../typings/tsd.d.ts" />
'use strict';
var path = require('path');
function stripQueryString(uri) {
    return uri.split('?')[0];
}
exports.stripQueryString = stripQueryString;
function resolveFilepath(dir, location) {
    if (location.slice(-1) === '/') {
        location += 'index.html';
    }
    return path.join(dir, location);
}
exports.resolveFilepath = resolveFilepath;
function responseError(res, code) {
    res.writeHead(code, {
        'Content-Type': 'text/plain'
    });
    res.end();
}
exports.responseError = responseError;
function responseJSON(res, body) {
    res.end(JSON.stringify(body));
}
exports.responseJSON = responseJSON;
function setContentTypeHeaderByFilepath(res, filepath) {
    switch (path.extname(filepath)) {
        case '.html':
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            break;
        case '.js':
            res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
            break;
        case '.css':
            res.setHeader('Content-Type', 'text/css; charset=utf-8');
            break;
        case '.ico':
            res.setHeader('Content-Type', 'image/vnd.microsoft.icon');
            break;
        case '.cur':
            res.setHeader('Content-Type', 'image/vnd.microsoft.icon');
            break;
        case '.svg':
            res.setHeader('Content-Type', 'image/svg+xml');
            break;
        case '.png':
            res.setHeader('Content-Type', 'image/png');
            break;
        case '.txt':
            res.setHeader('Content-Type', 'text/plain');
            break;
    }
}
exports.setContentTypeHeaderByFilepath = setContentTypeHeaderByFilepath;
