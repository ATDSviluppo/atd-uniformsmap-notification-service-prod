import { DispositivoService } from '../entities/Stargate/SgDispositivo/SgDipsositivo.service';
import { SgDispositivo } from 'src/entities/Stargate/SgDispositivo/SgDispositivo';
export declare class DispositivoController {
    private readonly dispositivoService;
    constructor(dispositivoService: DispositivoService);
    getDispositiviAttivi(): Promise<SgDispositivo[]>;
}
