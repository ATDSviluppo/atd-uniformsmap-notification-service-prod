import { Repository } from 'typeorm';
import { TranslateClass } from './Translate';
export declare class TranslateService {
    private readonly repo;
    constructor(repo: Repository<TranslateClass>);
    findAll(): Promise<TranslateClass[]>;
    findOne(id: number): Promise<TranslateClass>;
    findByType(type: number): Promise<TranslateClass[]>;
    create(data: Partial<TranslateClass>): Promise<TranslateClass>;
    update(id: number, data: Partial<TranslateClass>): Promise<TranslateClass>;
    remove(id: number): Promise<void>;
    findByNotificationType(idNotificationType: number): Promise<TranslateClass[]>;
}
