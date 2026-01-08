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
exports.NotificationTokenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const NotificationToken_1 = require("./NotificationToken");
let NotificationTokenService = class NotificationTokenService {
    constructor(NotificationTokenRepository) {
        this.NotificationTokenRepository = NotificationTokenRepository;
    }
    findAll() {
        return this.NotificationTokenRepository.find();
    }
    findOne(id) {
        return this.NotificationTokenRepository.findOne({ where: { id } });
    }
    findByEmployee(idEmployee) {
        return this.NotificationTokenRepository.find({ where: { idEmployee } });
    }
    async create(notificationToken) {
        const token = this.NotificationTokenRepository.create(notificationToken);
        return this.NotificationTokenRepository.save(token);
    }
};
exports.NotificationTokenService = NotificationTokenService;
exports.NotificationTokenService = NotificationTokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(NotificationToken_1.NotificationToken, 'sg')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotificationTokenService);
//# sourceMappingURL=NotificationToken.service.js.map