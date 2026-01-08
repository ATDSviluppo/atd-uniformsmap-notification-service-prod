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
exports.EmployeeNotificationController = void 0;
const common_1 = require("@nestjs/common");
const EmployeeNotification_service_1 = require("../entities/EmployeeNotification/EmployeeNotification.service");
const swagger_1 = require("@nestjs/swagger");
class EmployeeNotificationDto {
}
let EmployeeNotificationController = class EmployeeNotificationController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
    create(body) {
        return this.service.create(body);
    }
    update(id, body) {
        return this.service.update(+id, body);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.EmployeeNotificationController = EmployeeNotificationController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni tutte le notifiche dei dipendenti' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista notifiche restituita correttamente', type: [EmployeeNotificationDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeNotificationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni una notifica specifica per ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della notifica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notifica trovata', type: EmployeeNotificationDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Notifica non trovata' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeNotificationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crea una nuova notifica dipendente' }),
    (0, swagger_1.ApiBody)({ type: EmployeeNotificationDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Notifica creata con successo', type: EmployeeNotificationDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmployeeNotificationDto]),
    __metadata("design:returntype", void 0)
], EmployeeNotificationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Aggiorna una notifica esistente' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della notifica da aggiornare' }),
    (0, swagger_1.ApiBody)({ type: EmployeeNotificationDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notifica aggiornata', type: EmployeeNotificationDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Notifica non trovata' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, EmployeeNotificationDto]),
    __metadata("design:returntype", void 0)
], EmployeeNotificationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina una notifica' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della notifica da eliminare' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notifica eliminata correttamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Notifica non trovata' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeNotificationController.prototype, "remove", null);
exports.EmployeeNotificationController = EmployeeNotificationController = __decorate([
    (0, swagger_1.ApiTags)('employee-notification'),
    (0, common_1.Controller)('employee-notification'),
    __metadata("design:paramtypes", [EmployeeNotification_service_1.EmployeeNotificationService])
], EmployeeNotificationController);
//# sourceMappingURL=employeeNotification.controller.js.map