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
exports.NotificationTypeClass = void 0;
const typeorm_1 = require("typeorm");
const NotificationClass_1 = require("../NotificationClass/NotificationClass");
const Employeenotification_1 = require("../EmployeeNotification/Employeenotification");
const Translate_1 = require("../Translate/Translate");
let NotificationTypeClass = class NotificationTypeClass {
};
exports.NotificationTypeClass = NotificationTypeClass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id_notification_type' }),
    __metadata("design:type", Number)
], NotificationTypeClass.prototype, "idNotificationType", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id_tipo_disp' }),
    __metadata("design:type", Number)
], NotificationTypeClass.prototype, "idTipoDisp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'note1', length: 50 }),
    __metadata("design:type", String)
], NotificationTypeClass.prototype, "note1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'note2', length: 50 }),
    __metadata("design:type", String)
], NotificationTypeClass.prototype, "note2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location', length: 50 }),
    __metadata("design:type", String)
], NotificationTypeClass.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', length: 50 }),
    __metadata("design:type", String)
], NotificationTypeClass.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id_disp_sg' }),
    __metadata("design:type", Number)
], NotificationTypeClass.prototype, "idDispSg", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id_notification_class' }),
    __metadata("design:type", Number)
], NotificationTypeClass.prototype, "idNotificationClass", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'timeout' }),
    __metadata("design:type", Number)
], NotificationTypeClass.prototype, "timeout", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'start_time' }),
    __metadata("design:type", Number)
], NotificationTypeClass.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'end_time' }),
    __metadata("design:type", Number)
], NotificationTypeClass.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => NotificationClass_1.NotificationClass, notificationClass => notificationClass.notificationTypes),
    (0, typeorm_1.JoinColumn)({ name: 'id_notification_class', referencedColumnName: 'idNotificationClass' }),
    __metadata("design:type", NotificationClass_1.NotificationClass)
], NotificationTypeClass.prototype, "notificationClass", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Employeenotification_1.EmployeeNotificationClass, (employeeNotificationClass) => employeeNotificationClass.notificationType),
    __metadata("design:type", Array)
], NotificationTypeClass.prototype, "employeeNotifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Translate_1.TranslateClass, translate => translate.notificationType),
    __metadata("design:type", Array)
], NotificationTypeClass.prototype, "translations", void 0);
exports.NotificationTypeClass = NotificationTypeClass = __decorate([
    (0, typeorm_1.Entity)('notification_types', { schema: 'notification_service' })
], NotificationTypeClass);
//# sourceMappingURL=NotificationType.js.map