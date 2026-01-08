import { NotificationClass } from '../NotificationClass/NotificationClass';
import { EmployeeNotificationClass } from '../EmployeeNotification/Employeenotification';
import { TranslateClass } from '../Translate/Translate';
export declare class NotificationTypeClass {
    idNotificationType: number;
    idTipoDisp: number;
    note1: string;
    note2: string;
    location: string;
    type: string;
    idDispSg: number;
    idNotificationClass: number;
    timeout: number;
    startTime: number;
    endTime: number;
    notificationClass: NotificationClass;
    employeeNotifications: EmployeeNotificationClass[];
    translations: TranslateClass[];
}
