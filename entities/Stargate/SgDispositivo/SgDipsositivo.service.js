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
exports.DispositivoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const SgDispositivo_1 = require("./SgDispositivo");
const SgIsola_1 = require("../SgIsola/SgIsola");
const SgStabilimento_1 = require("../SgStabilimento/SgStabilimento");
let DispositivoService = class DispositivoService {
    constructor(dispositivoRepo, isolaRepo, stabilimentoRepo) {
        this.dispositivoRepo = dispositivoRepo;
        this.isolaRepo = isolaRepo;
        this.stabilimentoRepo = stabilimentoRepo;
    }
    async findAttivi() {
        return this.dispositivoRepo.find({
            where: {
                snAttivo: 'S',
            },
        });
    }
    async getDeviceInfo(idDispositivo) {
        const result = await this.dispositivoRepo
            .createQueryBuilder('sd')
            .select([
            'sd.cod_dispositivo AS codDispositivo',
            'sd.descrizione AS desDispositivo',
            'si.descrizione AS desIsola',
            'ss.descrizione AS desStabilimento',
        ])
            .innerJoin('sg_isola', 'si', 'si.id_isola = sd.id_isola')
            .innerJoin('sg_stabilimento', 'ss', 'ss.id_stabilimento = si.id_stabilimento')
            .where('sd.id_dispositivo = :idDispositivo', { idDispositivo })
            .getRawOne();
        return result ?? null;
    }
};
exports.DispositivoService = DispositivoService;
exports.DispositivoService = DispositivoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(SgDispositivo_1.SgDispositivo, 'sg')),
    __param(1, (0, typeorm_1.InjectRepository)(SgIsola_1.SgIsola, 'sg')),
    __param(2, (0, typeorm_1.InjectRepository)(SgStabilimento_1.SgStabilimento, 'sg')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DispositivoService);
//# sourceMappingURL=SgDipsositivo.service.js.map