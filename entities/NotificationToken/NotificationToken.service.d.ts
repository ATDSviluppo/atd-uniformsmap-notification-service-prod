import { Repository } from 'typeorm';
import { NotificationToken } from './NotificationToken';
export declare class NotificationTokenService {
    private NotificationTokenRepository;
    constructor(NotificationTokenRepository: Repository<NotificationToken>);
    findAll(): Promise<NotificationToken[]>;
    findOne(id: number): Promise<NotificationToken>;
    findByEmployee(idEmployee: number): Promise<NotificationToken[]>;
    create(notificationToken: Partial<NotificationToken>): Promise<NotificationToken>;
}
