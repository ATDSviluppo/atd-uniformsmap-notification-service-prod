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
exports.PhxEmployeeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const PhxEmployee_service_1 = require("../entities/Stargate/PhxEmployee/PhxEmployee.service");
let PhxEmployeeController = class PhxEmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    async getAll() {
        return this.employeeService.findAll();
    }
    async getFiltered(filters) {
        return this.employeeService.findByFilters(filters);
    }
};
exports.PhxEmployeeController = PhxEmployeeController;
__decorate([
    (0, common_1.Get)("/employees"),
    (0, swagger_1.ApiOperation)({
        summary: 'Restituisce tutti i dipendenti',
        description: 'Ritorna la lista completa dei record presenti nella tabella phx_employees',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista dei dipendenti',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhxEmployeeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("employee"),
    (0, swagger_1.ApiOperation)({
        summary: 'Restituisce i dipendenti filtrati',
        description: 'Permette di filtrare i dipendenti passando chiave-valore come query parameters',
    }),
    (0, swagger_1.ApiQuery)({ name: 'idDitta', required: false, description: 'ID della ditta', example: 10 }),
    (0, swagger_1.ApiQuery)({ name: 'idEmployee', required: false, description: 'Codice del dipendente', example: '1234' }),
    (0, swagger_1.ApiQuery)({ name: 'card', required: false, description: 'Carta del dipendente', example: '123456' }),
    (0, swagger_1.ApiQuery)({ name: 'description', required: false, description: 'Descrizione del dipendente', example: 'Thomas turbato' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista dei dipendenti filtrata',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhxEmployeeController.prototype, "getFiltered", null);
exports.PhxEmployeeController = PhxEmployeeController = __decorate([
    (0, swagger_1.ApiTags)('Employees'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [PhxEmployee_service_1.PhxEmployeeService])
], PhxEmployeeController);
//# sourceMappingURL=phxController.controller.js.map