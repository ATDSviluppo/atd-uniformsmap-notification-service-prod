import { NotificationClassService } from '../entities/NotificationClass/NotificationClass.service';
import { NotificationClass } from '../entities/NotificationClass/NotificationClass';
export declare class NotificationClassController {
    private readonly service;
    constructor(service: NotificationClassService);
    findAll(): Promise<NotificationClass[]>;
    findOne(id: string): Promise<NotificationClass>;
    create(body: Partial<NotificationClass>): Promise<NotificationClass>;
    update(id: string, body: Partial<NotificationClass>): Promise<NotificationClass>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
