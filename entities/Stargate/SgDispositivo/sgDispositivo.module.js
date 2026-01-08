"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SgDispositivoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sgDispositivo_controller_1 = require("../../../controllers/sgDispositivo.controller");
const SgDipsositivo_service_1 = require("./SgDipsositivo.service");
const SgDispositivo_1 = require("./SgDispositivo");
let SgDispositivoModule = class SgDispositivoModule {
};
exports.SgDispositivoModule = SgDispositivoModule;
exports.SgDispositivoModule = SgDispositivoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([SgDispositivo_1.SgDispositivo], 'sg')],
        controllers: [sgDispositivo_controller_1.DispositivoController],
        providers: [SgDipsositivo_service_1.DispositivoService],
        exports: [SgDipsositivo_service_1.DispositivoService],
    })
], SgDispositivoModule);
//# sourceMappingURL=sgDispositivo.module.js.map