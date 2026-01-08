import { Repository } from 'typeorm';
import { PhxEmployee } from './PhxEmployee';
export declare class PhxEmployeeService {
    private readonly employeeRepo;
    constructor(employeeRepo: Repository<PhxEmployee>);
    findAll(): Promise<PhxEmployee[]>;
    findByFilters(filters: Record<string, string>): Promise<PhxEmployee[]>;
}
