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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeNotificationClass = void 0;
const typeorm_1 = require("typeorm");
const NotificationType_1 = require("../NotificationType/NotificationType");
const NotificationToSend_1 = require("../NotificationToSend/NotificationToSend");
let EmployeeNotificationClass = class EmployeeNotificationClass {
};
exports.EmployeeNotificationClass = EmployeeNotificationClass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id_employee_notification' }),
    __metadata("design:type", Number)
], EmployeeNotificationClass.prototype, "idEmployeeNotification", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'employee_id' }),
    __metadata("design:type", Number)
], EmployeeNotificationClass.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id_notification_type' }),
    __metadata("design:type", Number)
], EmployeeNotificationClass.prototype, "idNotificationType", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'whenlog' }),
    __metadata("design:type", typeorm_1.Timestamp)
], EmployeeNotificationClass.prototype, "whenlog", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'sn_attivo', default: 'S' }),
    __metadata("design:type", String)
], EmployeeNotificationClass.prototype, "sn_attivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => NotificationType_1.NotificationTypeClass, (notificationTypeClass) => notificationTypeClass.employeeNotifications),
    (0, typeorm_1.JoinColumn)([{ name: 'id_notification_type', referencedColumnName: 'idNotificationType' }]),
    __metadata("design:type", NotificationType_1.NotificationTypeClass)
], EmployeeNotificationClass.prototype, "notificationType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => NotificationToSend_1.NotificationToSendClass, (notificationToSendClass) => notificationToSendClass.employeeNotification),
    __metadata("design:type", Array)
], EmployeeNotificationClass.prototype, "notificationToSends", void 0);
exports.EmployeeNotificationClass = EmployeeNotificationClass = __decorate([
    (0, typeorm_1.Entity)('employee_notification', { schema: 'notification_service' })
], EmployeeNotificationClass);
//# sourceMappingURL=Employeenotification.js.map