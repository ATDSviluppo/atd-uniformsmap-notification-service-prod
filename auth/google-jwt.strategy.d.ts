import { Strategy } from 'passport-custom';
import { Request } from 'express';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    constructor();
    validate(request: Request): Promise<any>;
}
export {};
