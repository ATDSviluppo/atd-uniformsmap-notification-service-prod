"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhxEmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const PhxEmployee_1 = require("./PhxEmployee");
let PhxEmployeeService = class PhxEmployeeService {
    constructor(employeeRepo) {
        this.employeeRepo = employeeRepo;
    }
    async findAll() {
        return this.employeeRepo.find();
    }
    async findByFilters(filters) {
        const where = {};
        for (const key in filters) {
            const value = filters[key];
            if (value !== undefined && value !== null && key in this.employeeRepo.metadata.propertiesMap) {
                where[key] = isNaN(Number(value)) ? value : Number(value);
            }
            else {
                throw new Error(`filter ${key} does not exist`);
            }
        }
        return this.employeeRepo.find({ where });
    }
};
exports.PhxEmployeeService = PhxEmployeeService;
exports.PhxEmployeeService = PhxEmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(PhxEmployee_1.PhxEmployee, 'sg')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhxEmployeeService);
//# sourceMappingURL=PhxEmployee.service.js.map