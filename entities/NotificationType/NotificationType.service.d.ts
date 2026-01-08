import { Repository } from 'typeorm';
import { NotificationTypeClass } from './NotificationType';
export declare class NotificationTypeService {
    private readonly repo;
    constructor(repo: Repository<NotificationTypeClass>);
    findAll(): Promise<NotificationTypeClass[]>;
    findOne(id: number): Promise<NotificationTypeClass>;
    create(data: Partial<NotificationTypeClass>): Promise<NotificationTypeClass>;
    update(id: number, data: Partial<NotificationTypeClass>): Promise<NotificationTypeClass>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
    findForEvent(note1: string, note2: string, location: string): Promise<NotificationTypeClass[]>;
    findForLogs(type: string): Promise<NotificationTypeClass[]>;
}
