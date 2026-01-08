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
exports.SgTipoDispositivo = void 0;
const typeorm_1 = require("typeorm");
let SgTipoDispositivo = class SgTipoDispositivo {
};
exports.SgTipoDispositivo = SgTipoDispositivo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id_tipo_dispositivo" }),
    __metadata("design:type", Number)
], SgTipoDispositivo.prototype, "idTipoDispositivo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "cod_tipo_dispositivo", length: 45 }),
    __metadata("design:type", String)
], SgTipoDispositivo.prototype, "codTipoDispositivo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "famiglia_dispositivo", length: 45 }),
    __metadata("design:type", String)
], SgTipoDispositivo.prototype, "famigliaDispositivo", void 0);
exports.SgTipoDispositivo = SgTipoDispositivo = __decorate([
    (0, typeorm_1.Entity)("sg_tipo_dispositivo", { schema: "trak_stargate_demo" })
], SgTipoDispositivo);
//# sourceMappingURL=SgTipoDispositivo.js.map