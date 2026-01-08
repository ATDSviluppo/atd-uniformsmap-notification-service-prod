import { NotificationTypeClass } from '../NotificationType/NotificationType';
export declare class NotificationClass {
    idNotificationClass: number;
    code: string;
    description: string;
    note: string | null;
    notificationTypes: NotificationTypeClass[];
}
