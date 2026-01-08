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
exports.TranslateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Translate_1 = require("./Translate");
let TranslateService = class TranslateService {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        return this.repo.find({ relations: ['notificationType'] });
    }
    async findOne(id) {
        const translate = await this.repo.findOne({
            where: { idTranslate: id },
            relations: ['notificationType']
        });
        if (!translate)
            throw new common_1.NotFoundException(`Translate ${id} not found`);
        return translate;
    }
    async findByType(type) {
        return this.repo.find({ where: { idNotificationType: type }, relations: ['notificationType'] });
    }
    async create(data) {
        const translate = this.repo.create(data);
        return this.repo.save(translate);
    }
    async update(id, data) {
        const translate = await this.findOne(id);
        Object.assign(translate, data);
        return this.repo.save(translate);
    }
    async remove(id) {
        const translate = await this.findOne(id);
        await this.repo.remove(translate);
    }
    async findByNotificationType(idNotificationType) {
        return this.repo.find({
            where: { idNotificationType },
        });
    }
};
exports.TranslateService = TranslateService;
exports.TranslateService = TranslateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Translate_1.TranslateClass)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TranslateService);
//# sourceMappingURL=Translate.service.js.map