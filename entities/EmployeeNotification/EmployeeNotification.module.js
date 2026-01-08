"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeNotificationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Employeenotification_1 = require("./Employeenotification");
const EmployeeNotification_service_1 = require("./EmployeeNotification.service");
const employeeNotification_controller_1 = require("../../controllers/employeeNotification.controller");
let EmployeeNotificationModule = class EmployeeNotificationModule {
};
exports.EmployeeNotificationModule = EmployeeNotificationModule;
exports.EmployeeNotificationModule = EmployeeNotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Employeenotification_1.EmployeeNotificationClass], 'default')],
        providers: [EmployeeNotification_service_1.EmployeeNotificationService],
        controllers: [employeeNotification_controller_1.EmployeeNotificationController],
    })
], EmployeeNotificationModule);
//# sourceMappingURL=EmployeeNotification.module.js.map