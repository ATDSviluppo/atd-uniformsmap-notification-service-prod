"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DittaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ditta_1 = require("./ditta");
const ditta_service_1 = require("./ditta.service");
const ditta_controller_1 = require("../../../controllers/ditta.controller");
let DittaModule = class DittaModule {
};
exports.DittaModule = DittaModule;
exports.DittaModule = DittaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ditta_1.Ditta], 'sg')],
        providers: [ditta_service_1.DittaService],
        controllers: [ditta_controller_1.DittaController],
        exports: [ditta_service_1.DittaService],
    })
], DittaModule);
//# sourceMappingURL=ditta.module.js.map