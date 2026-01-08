import { Repository } from 'typeorm';
import { NotificationRec } from './NotificationRec';
export declare class NotificationRecService {
    private readonly notificationRecRepository;
    constructor(notificationRecRepository: Repository<NotificationRec>);
    create(body: any): Promise<NotificationRec>;
    findAll(): Promise<NotificationRec[]>;
    findOne(id: number): Promise<NotificationRec | null>;
    update(id: number, body: any): Promise<NotificationRec>;
    remove(id: number): Promise<void>;
}
