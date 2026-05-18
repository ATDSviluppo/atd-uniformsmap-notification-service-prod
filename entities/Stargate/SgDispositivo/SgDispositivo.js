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
exports.SgDispositivo = void 0;
const typeorm_1 = require("typeorm");
let SgDispositivo = class SgDispositivo {
};
exports.SgDispositivo = SgDispositivo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_dispositivo' }),
    __metadata("design:type", Number)
], SgDispositivo.prototype, "idDispositivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cod_dispositivo', length: 100 }),
    __metadata("design:type", String)
], SgDispositivo.prototype, "codDispositivo", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id_isola', nullable: true }),
    __metadata("design:type", Number)
], SgDispositivo.prototype, "idIsola", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sn_attivo', type: 'varchar', length: 1 }),
    __metadata("design:type", String)
], SgDispositivo.prototype, "snAttivo", void 0);
exports.SgDispositivo = SgDispositivo = __decorate([
    (0, typeorm_1.Entity)({ name: 'sg_dispositivo' })
], SgDispositivo);
//# sourceMappingURL=SgDispositivo.js.map