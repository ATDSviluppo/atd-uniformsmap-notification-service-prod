import { EmployeeNotificationClass } from '../EmployeeNotification/Employeenotification';
export declare class NotificationToSendClass {
    idNotificationToSend: number;
    idEmployeeNotification: number;
    eventId: string;
    logId: string;
    whenlog: string;
    sent: boolean;
    employeeNotification: EmployeeNotificationClass;
}
