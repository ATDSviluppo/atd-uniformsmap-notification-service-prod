import { Timestamp } from 'typeorm';
import { NotificationTypeClass } from '../NotificationType/NotificationType';
import { NotificationToSendClass } from '../NotificationToSend/NotificationToSend';
export declare class EmployeeNotificationClass {
    idEmployeeNotification: number;
    employeeId: number;
    idNotificationType: number;
    whenlog: Timestamp;
    sn_attivo: string;
    notificationType: NotificationTypeClass;
    notificationToSends: NotificationToSendClass[];
}
