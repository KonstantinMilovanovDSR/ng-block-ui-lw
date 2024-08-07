import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlockUIService } from 'ng-block-ui';
import { BlockUIHttpSettings } from './block-ui-http-settings.service';
import * as i0 from "@angular/core";
export declare class BlockUIInterceptor implements HttpInterceptor {
    private blockUIService;
    private blockUIHttpSettings;
    private activeHttpRequests;
    constructor(blockUIService: BlockUIService, blockUIHttpSettings: BlockUIHttpSettings);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    shouldBlock(request: HttpRequest<any>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUIInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BlockUIInterceptor>;
}
