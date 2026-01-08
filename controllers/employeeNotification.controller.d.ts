import { EmployeeNotificationService } from '../entities/EmployeeNotification/EmployeeNotification.service';
declare class EmployeeNotificationDto {
    id?: number;
    employeeId: number;
    notificationTypeId: number;
}
export declare class EmployeeNotificationController {
    private service;
    constructor(service: EmployeeNotificationService);
    findAll(): Promise<import("../entities/EmployeeNotification/Employeenotification").EmployeeNotificationClass[]>;
    findOne(id: string): Promise<import("../entities/EmployeeNotification/Employeenotification").EmployeeNotificationClass>;
    create(body: EmployeeNotificationDto): Promise<import("../entities/EmployeeNotification/Employeenotification").EmployeeNotificationClass>;
    update(id: string, body: EmployeeNotificationDto): Promise<import("../entities/EmployeeNotification/Employeenotification").EmployeeNotificationClass>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
export {};
