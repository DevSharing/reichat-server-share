/// <reference path="../typings/tsd.d.ts" />
import http = require('http');
export declare function stripQueryString(uri: string): string;
export declare function resolveFilepath(dir: string, location: string): string;
export declare function responseError(res: http.ServerResponse, code: number): void;
export declare function responseJSON(res: http.ServerResponse, body: any): void;
export declare function setContentTypeHeaderByFilepath(res: http.ServerResponse, filepath: string): void;
