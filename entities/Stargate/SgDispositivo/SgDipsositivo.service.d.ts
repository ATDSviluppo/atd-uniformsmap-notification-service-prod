import { Repository } from 'typeorm';
import { SgDispositivo } from './SgDispositivo';
export declare class DispositivoService {
    private readonly dispositivoRepo;
    constructor(dispositivoRepo: Repository<SgDispositivo>);
    findAttivi(): Promise<SgDispositivo[]>;
}
