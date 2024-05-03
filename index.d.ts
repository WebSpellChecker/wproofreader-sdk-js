declare module '@webspellchecker/wproofreader-sdk-js'

declare interface WProofreaderSDK {
    init(options: object): Promise<unknown>;
    configure(options: object): Promise<void>;
}

declare namespace WEBSPELLCHECKER {
    function destroyAll(): void;
    function getInstances(): Array<unknown>;
    function init(options: object, callbackSuccess: (instance: unknown) => void, callbackError: (error: string) => void): unknown;
    function startAutoSearch(): void;
    function stopAutoSearch(): void;
}
