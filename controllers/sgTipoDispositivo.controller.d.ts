import { TipoDispositivoService } from '../entities/Stargate/SgTipoDispositivo/SgTipodispositivo.service';
import { SgTipoDispositivo } from 'src/entities/Stargate/SgTipoDispositivo/SgTipoDispositivo';
export declare class SgTipoDispositivoController {
    private readonly tipoDispositivoService;
    constructor(tipoDispositivoService: TipoDispositivoService);
    getAll(): Promise<SgTipoDispositivo[]>;
}
