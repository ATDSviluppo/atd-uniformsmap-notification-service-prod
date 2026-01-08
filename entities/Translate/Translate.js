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
exports.TranslateClass = void 0;
const typeorm_1 = require("typeorm");
const NotificationType_1 = require("../NotificationType/NotificationType");
let TranslateClass = class TranslateClass {
};
exports.TranslateClass = TranslateClass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id_translate' }),
    __metadata("design:type", Number)
], TranslateClass.prototype, "idTranslate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'translation', nullable: false }),
    __metadata("design:type", String)
], TranslateClass.prototype, "translation", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lang', nullable: false }),
    __metadata("design:type", String)
], TranslateClass.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id_notification_type' }),
    __metadata("design:type", Number)
], TranslateClass.prototype, "idNotificationType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => NotificationType_1.NotificationTypeClass, notificationType => notificationType.translations),
    (0, typeorm_1.JoinColumn)({ name: 'id_notification_type', referencedColumnName: 'idNotificationType' }),
    __metadata("design:type", NotificationType_1.NotificationTypeClass)
], TranslateClass.prototype, "notificationType", void 0);
exports.TranslateClass = TranslateClass = __decorate([
    (0, typeorm_1.Entity)('translate', { schema: 'notification_service' })
], TranslateClass);
//# sourceMappingURL=Translate.js.map