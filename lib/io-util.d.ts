/// <reference path="../typings/tsd.d.ts" />
export declare enum EForwardedHeaderType {
    XFF = 0,
}
export declare function getRemoteAddr(socket: SocketIO.Socket, forwardedHeaderType?: EForwardedHeaderType): string;
