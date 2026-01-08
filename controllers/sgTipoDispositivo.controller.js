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
exports.SgTipoDispositivoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const SgTipodispositivo_service_1 = require("../entities/Stargate/SgTipoDispositivo/SgTipodispositivo.service");
const SgTipoDispositivo_1 = require("../entities/Stargate/SgTipoDispositivo/SgTipoDispositivo");
let SgTipoDispositivoController = class SgTipoDispositivoController {
    constructor(tipoDispositivoService) {
        this.tipoDispositivoService = tipoDispositivoService;
    }
    async getAll() {
        return this.tipoDispositivoService.findAll();
    }
};
exports.SgTipoDispositivoController = SgTipoDispositivoController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Restituisce tutti i tipi di dispositivo',
        description: 'Ritorna tutti i record della tabella sg_tipo_dispositivo',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista dei tipi di dispositivo',
        type: SgTipoDispositivo_1.SgTipoDispositivo,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SgTipoDispositivoController.prototype, "getAll", null);
exports.SgTipoDispositivoController = SgTipoDispositivoController = __decorate([
    (0, swagger_1.ApiTags)('Tipi Dispositivo'),
    (0, common_1.Controller)('sgtipodispositivo'),
    __metadata("design:paramtypes", [SgTipodispositivo_service_1.TipoDispositivoService])
], SgTipoDispositivoController);
//# sourceMappingURL=sgTipoDispositivo.controller.js.map