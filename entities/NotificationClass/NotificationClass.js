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
exports.NotificationClass = void 0;
const typeorm_1 = require("typeorm");
const NotificationType_1 = require("../NotificationType/NotificationType");
let NotificationClass = class NotificationClass {
};
exports.NotificationClass = NotificationClass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id_notification_class' }),
    __metadata("design:type", Number)
], NotificationClass.prototype, "idNotificationClass", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', length: 250 }),
    __metadata("design:type", String)
], NotificationClass.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', length: 250 }),
    __metadata("design:type", String)
], NotificationClass.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'note', nullable: true }),
    __metadata("design:type", String)
], NotificationClass.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => NotificationType_1.NotificationTypeClass, (notificationTypeClass) => notificationTypeClass.notificationClass),
    __metadata("design:type", Array)
], NotificationClass.prototype, "notificationTypes", void 0);
exports.NotificationClass = NotificationClass = __decorate([
    (0, typeorm_1.Entity)('notification_class', { schema: 'notification_service' })
], NotificationClass);
//# sourceMappingURL=NotificationClass.js.map