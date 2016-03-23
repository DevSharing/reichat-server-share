/// <reference path="../typings/tsd.d.ts" />
import events = require('events');
export declare enum EDataMode {
    None = 0,
    FS = 1,
    Redis = 2,
}
export interface IServerConfig {
    title?: string;
    canvasWidth?: number;
    canvasHeight?: number;
    layerCount?: number;
    maxPaintLogCount?: number;
    maxChatLogCount?: number;
    dataDir?: string;
    dataFilePrefix?: string;
    redisHost?: string;
    redisPort?: number;
    redisPassword?: string;
    redisKeyPrefix?: string;
    clientDir?: string;
    forwardedHeaderType?: string;
    clientVersion?: string;
}
export interface IDistServerConfig {
    title: string;
    canvasWidth: number;
    canvasHeight: number;
    layerCount: number;
    version: IDistVersion;
}
export interface IDistVersion {
    server: string;
    client: string;
}
export interface IDistServer {
    id: string;
}
export interface IDistClient {
    uuid: string;
    name: string;
    server: IDistServer;
}
export declare function createServer(config?: IServerConfig): Server;
export declare class Server extends events.EventEmitter {
    config: IServerConfig;
    id: string;
    dataMode: EDataMode;
    private io;
    private httpServer;
    private redisClient;
    private redisSubscriber;
    private resource;
    private map;
    private interval;
    constructor(config?: IServerConfig);
    listen(port: any, hostname?: string, backlog?: number, callback?: Function): Server;
    distributalbeConfig: IDistServerConfig;
    distributableClients: IDistClient[];
    private clientToDistributable(client);
    private initLayers();
    private syncLayers(done);
    private loadLayer(layer, done);
    private initFileSystem();
    private initRedisClients();
    private subscribeRedis();
    private publishRedis(name, data?);
    private redisMessageListener(type, json);
    private updateClientsByServer(server, clients);
    private httpServerRequestListener(req, res);
    private ioConnectionListener(socket);
    private canvasToPng();
    private sendPaint(client, paint);
    private sendStroke(client, stroke);
    private sendPointer(client, pointer);
    private clearCanvas(client);
    private sendChat(client, chat);
    private sendSystemMessage(message, server?);
}
