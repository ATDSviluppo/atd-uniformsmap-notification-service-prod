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
exports.NotificationToSendController = void 0;
const common_1 = require("@nestjs/common");
const NotificationToSend_service_1 = require("../entities/NotificationToSend/NotificationToSend.service");
const swagger_1 = require("@nestjs/swagger");
class NotificationToSendDto {
}
let NotificationToSendController = class NotificationToSendController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(+id);
    }
};
exports.NotificationToSendController = NotificationToSendController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni tutte le notifiche da inviare' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista di notifiche da inviare restituita correttamente',
        type: [NotificationToSendDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotificationToSendController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ottieni una notifica da inviare per ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID della notifica' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Notifica trovata',
        type: NotificationToSendDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Notifica non trovata' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationToSendController.prototype, "findOne", null);
exports.NotificationToSendController = NotificationToSendController = __decorate([
    (0, swagger_1.ApiTags)('notification-to-send'),
    (0, common_1.Controller)('notification-to-send'),
    __metadata("design:paramtypes", [NotificationToSend_service_1.NotificationToSendService])
], NotificationToSendController);
//# sourceMappingURL=notificationToSend.controller.js.map