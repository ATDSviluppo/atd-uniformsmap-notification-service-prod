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
exports.NotificationTypeController = void 0;
const common_1 = require("@nestjs/common");
const NotificationType_service_1 = require("../entities/NotificationType/NotificationType.service");
const swagger_1 = require("@nestjs/swagger");
class NotificationTypeDto {
}
let NotificationTypeController = class NotificationTypeController {
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
exports.NotificationTypeController = NotificationTypeController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni tutti i tipi di notifica' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista dei tipi di notifica restituita correttamente',
        type: [NotificationTypeDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotificationTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni un tipo di notifica per ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del tipo di notifica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo di notifica trovato', type: NotificationTypeDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo di notifica non trovato' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crea un nuovo tipo di notifica' }),
    (0, swagger_1.ApiBody)({ type: NotificationTypeDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tipo di notifica creato', type: NotificationTypeDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Aggiorna un tipo di notifica' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del tipo di notifica da aggiornare' }),
    (0, swagger_1.ApiBody)({ type: NotificationTypeDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo di notifica aggiornato', type: NotificationTypeDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo di notifica non trovato' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], NotificationTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina un tipo di notifica' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del tipo di notifica da eliminare' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo di notifica eliminato correttamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo di notifica non trovato' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationTypeController.prototype, "remove", null);
exports.NotificationTypeController = NotificationTypeController = __decorate([
    (0, swagger_1.ApiTags)('notification-type'),
    (0, common_1.Controller)('notification-type'),
    __metadata("design:paramtypes", [NotificationType_service_1.NotificationTypeService])
], NotificationTypeController);
//# sourceMappingURL=notificationType.controller.js.map