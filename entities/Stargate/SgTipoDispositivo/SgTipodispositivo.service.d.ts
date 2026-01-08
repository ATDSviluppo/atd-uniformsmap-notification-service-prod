import { Repository } from 'typeorm';
import { SgTipoDispositivo } from './SgTipoDispositivo';
export declare class TipoDispositivoService {
    private readonly tipoRepo;
    constructor(tipoRepo: Repository<SgTipoDispositivo>);
    findAll(): Promise<SgTipoDispositivo[]>;
}
