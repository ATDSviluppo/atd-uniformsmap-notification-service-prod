import { NotificationToSendService } from '../entities/NotificationToSend/NotificationToSend.service';
import { NotificationToSendClass } from '../entities/NotificationToSend/NotificationToSend';
export declare class NotificationToSendController {
    private readonly service;
    constructor(service: NotificationToSendService);
    findAll(): Promise<NotificationToSendClass[]>;
    findOne(id: string): Promise<NotificationToSendClass>;
}
