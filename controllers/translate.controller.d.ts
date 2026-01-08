import { TranslateService } from '../entities/Translate/Translate.service';
import { TranslateClass } from '../entities/Translate/Translate';
export declare class TranslateController {
    private readonly service;
    constructor(service: TranslateService);
    findAll(): Promise<TranslateClass[]>;
    findOne(id: number): Promise<TranslateClass>;
    create(data: Partial<TranslateClass>): Promise<TranslateClass>;
    update(id: number, data: Partial<TranslateClass>): Promise<TranslateClass>;
    remove(id: number): Promise<void>;
    findByNotificationType(id: number): Promise<TranslateClass[]>;
}
