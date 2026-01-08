import { Repository } from 'typeorm';
import { EmployeeNotificationClass } from './Employeenotification';
export declare class EmployeeNotificationService {
    private repo;
    constructor(repo: Repository<EmployeeNotificationClass>);
    findAll(): Promise<EmployeeNotificationClass[]>;
    findOne(id: number): Promise<EmployeeNotificationClass>;
    create(data: Partial<EmployeeNotificationClass>): Promise<EmployeeNotificationClass>;
    update(id: number, data: Partial<EmployeeNotificationClass>): Promise<EmployeeNotificationClass>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
