"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SgTipoDispositivoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sgTipoDispositivo_controller_1 = require("../../../controllers/sgTipoDispositivo.controller");
const SgTipodispositivo_service_1 = require("./SgTipodispositivo.service");
const SgTipoDispositivo_1 = require("./SgTipoDispositivo");
let SgTipoDispositivoModule = class SgTipoDispositivoModule {
};
exports.SgTipoDispositivoModule = SgTipoDispositivoModule;
exports.SgTipoDispositivoModule = SgTipoDispositivoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([SgTipoDispositivo_1.SgTipoDispositivo], 'sg')],
        controllers: [sgTipoDispositivo_controller_1.SgTipoDispositivoController],
        providers: [SgTipodispositivo_service_1.TipoDispositivoService],
        exports: [SgTipodispositivo_service_1.TipoDispositivoService],
    })
], SgTipoDispositivoModule);
//# sourceMappingURL=SgTipoDispositivo.module.js.map