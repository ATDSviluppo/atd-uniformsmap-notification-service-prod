import { Repository } from 'typeorm';
import { NotificationToSendClass } from './NotificationToSend';
export declare class NotificationToSendService {
    private readonly repo;
    constructor(repo: Repository<NotificationToSendClass>);
    findAll(): Promise<NotificationToSendClass[]>;
    findOne(id: number): Promise<NotificationToSendClass>;
    findToSend(): Promise<NotificationToSendClass[]>;
    create(data: Partial<NotificationToSendClass>): Promise<NotificationToSendClass>;
    update(id: number, data: Partial<NotificationToSendClass>): Promise<NotificationToSendClass>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
    getLastNotification(emp: number, eventId?: string, logId?: string): Promise<NotificationToSendClass>;
    cleanTable(dateLimit: Date): Promise<void>;
}
