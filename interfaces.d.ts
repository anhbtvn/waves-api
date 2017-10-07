export type TPrecision = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type TBuffer = Uint8Array | number[];

export type TTransactionType = 'issue' | 'transfer' | 'reissue' | 'burn' | 'exchange' | 'lease' | 'cancelLeasing' | 'createAlias';


export interface IHash<T> {
    [key: string]: T;
}

export interface IAssetObject {
    readonly id: string;
    readonly name: string;
    readonly precision: TPrecision;
    description?: string;
}

export interface IKeyPair {
    readonly privateKey: string;
    readonly publicKey: string;
}

export interface IKeyPairBytes {
    readonly privateKey: Uint8Array;
    readonly publicKey: Uint8Array;
}

export interface IWavesBasicConfig {
    minimumSeedLength: number;
    requestOffset: number;
    requestLimit: number;
}

export interface IWavesConfig extends IWavesBasicConfig {
    networkByte: number;
    nodeAddress: string;
    matcherAddress: string;
}


// API interfaces

export interface IAPIListOptions {
    offset?: number;
    limit?: number;
}

export interface IAPIBalanceOptions extends IAPIListOptions {
    assets?: string[];
}

export interface IAPITransactionsOptions extends IAPIListOptions {
    type?: TTransactionType;
    sender?: string;
    recipient?: string;
}


// Missing interfaces
declare global {
    interface Window {
        msCrypto?: any;
        Promise: PromiseConstructor;
    }
}


// Replacement for --allowJs
declare module '*.js' {
    const content: {
        [key: string]: any;
    };
    export = content;
}
