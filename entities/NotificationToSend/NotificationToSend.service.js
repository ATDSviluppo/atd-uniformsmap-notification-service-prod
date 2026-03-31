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
exports.NotificationToSendService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const NotificationToSend_1 = require("./NotificationToSend");
let NotificationToSendService = class NotificationToSendService {
    constructor(repo) {
        this.repo = repo;
    }
    findAll() {
        return this.repo.find({
            relations: ['idEmployeeNotification2'],
        });
    }
    findOne(id) {
        return this.repo.findOne({
            where: { idNotificationToSend: id },
            relations: ['employeeNotification'],
        });
    }
    findToSend() {
        return this.repo.find({
            where: { sent: false },
            order: { idNotificationToSend: 'ASC' },
            relations: ['employeeNotification'],
        });
    }
    create(data) {
        const entity = this.repo.create(data);
        return this.repo.save(entity);
    }
    async update(id, data) {
        await this.repo.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.repo.delete(id);
        return { deleted: true };
    }
    async getLastNotification(emp) {
        const lastNotification = await this.repo.findOne({
            where: {
                idEmployeeNotification: emp,
            },
            order: {
                idNotificationToSend: 'DESC',
            },
        });
        if (lastNotification) {
            return lastNotification;
        }
    }
    async cleanTable(dateLimit) {
        const result = await this.repo.createQueryBuilder()
            .delete()
            .from(NotificationToSend_1.NotificationToSendClass)
            .where('sent = :sent', { sent: true })
            .andWhere('whenlog < :dateLimit', { dateLimit })
            .execute();
    }
};
exports.NotificationToSendService = NotificationToSendService;
exports.NotificationToSendService = NotificationToSendService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(NotificationToSend_1.NotificationToSendClass, 'default')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotificationToSendService);
//# sourceMappingURL=NotificationToSend.service.js.map