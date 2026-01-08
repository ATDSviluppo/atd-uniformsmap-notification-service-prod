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
exports.TranslateController = void 0;
const common_1 = require("@nestjs/common");
const Translate_service_1 = require("../entities/Translate/Translate.service");
const swagger_1 = require("@nestjs/swagger");
class TranslateDto {
}
let TranslateController = class TranslateController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(id, data) {
        return this.service.update(id, data);
    }
    remove(id) {
        return this.service.remove(id);
    }
    findByNotificationType(id) {
        return this.service.findByNotificationType(id);
    }
};
exports.TranslateController = TranslateController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni tutte le traduzioni' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista traduzioni restituita correttamente', type: [TranslateDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni una traduzione per ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della traduzione' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Traduzione trovata', type: TranslateDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Traduzione non trovata' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crea una nuova traduzione' }),
    (0, swagger_1.ApiBody)({ type: TranslateDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Traduzione creata', type: TranslateDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Aggiorna una traduzione esistente' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della traduzione da aggiornare' }),
    (0, swagger_1.ApiBody)({ type: TranslateDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Traduzione aggiornata', type: TranslateDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Traduzione non trovata' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina una traduzione' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della traduzione da eliminare' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Traduzione eliminata correttamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Traduzione non trovata' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('notification-type/:idNotificationType'),
    (0, swagger_1.ApiOperation)({ summary: 'Trova traduzioni per tipo di notifica' }),
    (0, swagger_1.ApiParam)({ name: 'idNotificationType', description: 'ID del tipo di notifica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista traduzioni trovata', type: [TranslateDto] }),
    __param(0, (0, common_1.Param)('idNotificationType', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TranslateController.prototype, "findByNotificationType", null);
exports.TranslateController = TranslateController = __decorate([
    (0, swagger_1.ApiTags)('translate'),
    (0, common_1.Controller)('translate'),
    __metadata("design:paramtypes", [Translate_service_1.TranslateService])
], TranslateController);
//# sourceMappingURL=translate.controller.js.map