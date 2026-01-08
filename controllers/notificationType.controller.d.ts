import { NotificationTypeService } from '../entities/NotificationType/NotificationType.service';
import { NotificationTypeClass } from '../entities/NotificationType/NotificationType';
export declare class NotificationTypeController {
    private readonly service;
    constructor(service: NotificationTypeService);
    findAll(): Promise<NotificationTypeClass[]>;
    findOne(id: string): Promise<NotificationTypeClass>;
    create(body: Partial<NotificationTypeClass>): Promise<NotificationTypeClass>;
    update(id: string, body: Partial<NotificationTypeClass>): Promise<NotificationTypeClass>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
