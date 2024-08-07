import { BlockUIInstanceService } from './block-ui-instance.service';
import { NgBlockUI } from '../models/block-ui.model';
import * as i0 from "@angular/core";
export declare class BlockUIService {
    private blockUIInstance;
    globalDispatch: NgBlockUI;
    constructor(blockUIInstance: BlockUIInstanceService);
    /**
    * Starts blocking for given BlockUI instance or instances
    */
    start(target: string | string[], message?: any): void;
    /**
    * Stops blocking for given BlockUI instance or instances
    */
    stop(target: string | string[]): void;
    /**
    * Reset blocking for given BlockUI instance or instances
    */
    reset(target: string | string[]): void;
    /**
    * Reset blocking for all BlockUI instances
    */
    resetGlobal(): void;
    /**
    * Updates message for given BlockUI instance or instances
    */
    update(target: string | string[], message: any): void;
    /**
    * Unsubscribes for given BlockUI instance or instances
    */
    unsubscribe(target: string | string[]): void;
    /**
    * Checks if BlockUI is actively blocking
    */
    isActive(target?: string | string[]): boolean;
    private dispatch;
    private toArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUIService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BlockUIService>;
}
