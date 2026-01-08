import { Repository } from 'typeorm';
import { NotificationClass } from './NotificationClass';
export declare class NotificationClassService {
    private readonly repo;
    constructor(repo: Repository<NotificationClass>);
    findAll(): Promise<NotificationClass[]>;
    findOne(id: number): Promise<NotificationClass>;
    create(data: Partial<NotificationClass>): Promise<NotificationClass>;
    update(id: number, data: Partial<NotificationClass>): Promise<NotificationClass>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
