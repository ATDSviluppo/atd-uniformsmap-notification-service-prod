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
exports.DispositivoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const SgDipsositivo_service_1 = require("../entities/Stargate/SgDispositivo/SgDipsositivo.service");
const SgDispositivo_1 = require("../entities/Stargate/SgDispositivo/SgDispositivo");
let DispositivoController = class DispositivoController {
    constructor(dispositivoService) {
        this.dispositivoService = dispositivoService;
    }
    async getDispositiviAttivi() {
        return this.dispositivoService.findAttivi();
    }
};
exports.DispositivoController = DispositivoController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Restituisce tutti i dispositivi attivi',
        description: 'Ritorna tutti i record della tabella sg_dispositivo con sn_attivo = "S"',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista dei dispositivi attivi',
        type: SgDispositivo_1.SgDispositivo
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DispositivoController.prototype, "getDispositiviAttivi", null);
exports.DispositivoController = DispositivoController = __decorate([
    (0, swagger_1.ApiTags)('Dispositivi'),
    (0, common_1.Controller)('sgdispositivo'),
    __metadata("design:paramtypes", [SgDipsositivo_service_1.DispositivoService])
], DispositivoController);
//# sourceMappingURL=sgDispositivo.controller.js.map