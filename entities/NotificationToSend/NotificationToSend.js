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
exports.NotificationToSendClass = void 0;
const typeorm_1 = require("typeorm");
const Employeenotification_1 = require("../EmployeeNotification/Employeenotification");
let NotificationToSendClass = class NotificationToSendClass {
};
exports.NotificationToSendClass = NotificationToSendClass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id_notification_to_send' }),
    __metadata("design:type", Number)
], NotificationToSendClass.prototype, "idNotificationToSend", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id_employee_notification' }),
    __metadata("design:type", Number)
], NotificationToSendClass.prototype, "idEmployeeNotification", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'event_id', nullable: true }),
    __metadata("design:type", String)
], NotificationToSendClass.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'log_id', nullable: true }),
    __metadata("design:type", String)
], NotificationToSendClass.prototype, "logId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'whenlog' }),
    __metadata("design:type", String)
], NotificationToSendClass.prototype, "whenlog", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { name: 'sent' }),
    __metadata("design:type", Boolean)
], NotificationToSendClass.prototype, "sent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employeenotification_1.EmployeeNotificationClass, (employeeNotificationClass) => employeeNotificationClass.notificationToSends),
    (0, typeorm_1.JoinColumn)([{ name: 'id_employee_notification', referencedColumnName: 'idEmployeeNotification' }]),
    __metadata("design:type", Employeenotification_1.EmployeeNotificationClass)
], NotificationToSendClass.prototype, "employeeNotification", void 0);
exports.NotificationToSendClass = NotificationToSendClass = __decorate([
    (0, typeorm_1.Entity)('notification_to_send', { schema: 'notification_service' })
], NotificationToSendClass);
//# sourceMappingURL=NotificationToSend.js.map