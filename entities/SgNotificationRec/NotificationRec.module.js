"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRecModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const NotificationRec_1 = require("./NotificationRec");
const notificationRec_service_1 = require("../../services/notificationRec.service");
const NotificationType_module_1 = require("../NotificationType/NotificationType.module");
const NotificationToSend_module_1 = require("../NotificationToSend/NotificationToSend.module");
const NotificationToken_module_1 = require("../NotificationToken/NotificationToken.module");
const Translate_module_1 = require("../Translate/Translate.module");
const sgDispositivo_module_1 = require("../Stargate/SgDispositivo/sgDispositivo.module");
const PhxEmployee_module_1 = require("../Stargate/PhxEmployee/PhxEmployee.module");
let NotificationRecModule = class NotificationRecModule {
};
exports.NotificationRecModule = NotificationRecModule;
exports.NotificationRecModule = NotificationRecModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([NotificationRec_1.NotificationRec], 'sg'),
            NotificationType_module_1.NotificationTypeModule,
            NotificationToSend_module_1.NotificationToSendModule,
            NotificationToken_module_1.NotificationTokenModule,
            Translate_module_1.TranslateModule,
            sgDispositivo_module_1.SgDispositivoModule,
            PhxEmployee_module_1.PhxEmployeeModule,
        ],
        providers: [notificationRec_service_1.NotificationRecService],
        exports: [notificationRec_service_1.NotificationRecService],
    })
], NotificationRecModule);
//# sourceMappingURL=NotificationRec.module.js.map