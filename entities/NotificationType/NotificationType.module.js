"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const NotificationType_1 = require("./NotificationType");
const NotificationType_service_1 = require("./NotificationType.service");
const notificationType_controller_1 = require("../../controllers/notificationType.controller");
let NotificationTypeModule = class NotificationTypeModule {
};
exports.NotificationTypeModule = NotificationTypeModule;
exports.NotificationTypeModule = NotificationTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([NotificationType_1.NotificationTypeClass], 'default')],
        providers: [NotificationType_service_1.NotificationTypeService],
        controllers: [notificationType_controller_1.NotificationTypeController],
        exports: [NotificationType_service_1.NotificationTypeService],
    })
], NotificationTypeModule);
//# sourceMappingURL=NotificationType.module.js.map