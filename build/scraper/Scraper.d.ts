import TypedEmitter from "typed-emitter";
import { IEventListeners } from "./events";
import { LaunchOptions, BrowserLaunchArgumentOptions, BrowserConnectOptions } from "puppeteer";
import { IQuery, IQueryOptions } from "./query";
export declare type ScraperOptions = LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions;
declare const Scraper_base: new () => TypedEmitter<IEventListeners>;
export declare abstract class Scraper extends Scraper_base {
    options: ScraperOptions;
    /**
     * @constructor
     * @param {LaunchOptions} options
     */
    protected constructor(options: ScraperOptions);
    /**
     * Enable logger
     * @returns void
     * @static
     */
    static enableLogger: () => void;
    /**
     * Disable logger
     * @returns void
     * @static
     */
    static disableLogger: () => void;
    /**
     * Enable logger debug namespace
     * @returns void
     * @static
     */
    static enableLoggerDebug: () => void;
    /**
     * Enable logger info namespace
     * @returns void
     * @static
     */
    static enableLoggerInfo: () => void;
    /**
     * Enable logger warn namespace
     * @returns void
     * @static
     */
    static enableLoggerWarn: () => void;
    /**
     * Enable logger error namespace
     * @returns void
     * @static
     */
    static enableLoggerError: () => void;
    /**
     * Run scraper
     * @param {IQuery | IQuery[]} queries
     * @param {IQueryOptions} [options]
     * @return {Promise<void>}
     */
    abstract run(queries: IQuery | IQuery[], options?: IQueryOptions): Promise<void>;
    /**
     * Close scraper browser instance
     * @returns {Promise<void>}
     */
    abstract close(): Promise<void>;
}
export {};
