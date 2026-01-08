import { PhxEmployeeService } from '../entities/Stargate/PhxEmployee/PhxEmployee.service';
export declare class PhxEmployeeController {
    private readonly employeeService;
    constructor(employeeService: PhxEmployeeService);
    getAll(): Promise<import("../entities/Stargate/PhxEmployee/PhxEmployee").PhxEmployee[]>;
    getFiltered(filters: Record<string, string>): Promise<import("../entities/Stargate/PhxEmployee/PhxEmployee").PhxEmployee[]>;
}
