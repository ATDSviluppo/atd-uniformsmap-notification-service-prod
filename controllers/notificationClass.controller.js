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
exports.NotificationClassController = void 0;
const common_1 = require("@nestjs/common");
const NotificationClass_service_1 = require("../entities/NotificationClass/NotificationClass.service");
const swagger_1 = require("@nestjs/swagger");
class NotificationClassDto {
}
let NotificationClassController = class NotificationClassController {
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
exports.NotificationClassController = NotificationClassController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni tutte le classi di notifica' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista di classi di notifica restituita correttamente',
        type: [NotificationClassDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotificationClassController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni una classe di notifica per ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della classe di notifica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Classe trovata', type: NotificationClassDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Classe non trovata' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationClassController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crea una nuova classe di notifica' }),
    (0, swagger_1.ApiBody)({ type: NotificationClassDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Classe creata', type: NotificationClassDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationClassController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Aggiorna una classe di notifica' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della classe da aggiornare' }),
    (0, swagger_1.ApiBody)({ type: NotificationClassDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Classe aggiornata', type: NotificationClassDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Classe non trovata' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], NotificationClassController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina una classe di notifica' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della classe da eliminare' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Classe eliminata correttamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Classe non trovata' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationClassController.prototype, "remove", null);
exports.NotificationClassController = NotificationClassController = __decorate([
    (0, swagger_1.ApiTags)('notification-class'),
    (0, common_1.Controller)('notification-class'),
    __metadata("design:paramtypes", [NotificationClass_service_1.NotificationClassService])
], NotificationClassController);
//# sourceMappingURL=notificationClass.controller.js.map