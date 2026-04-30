import { Repository } from 'typeorm';
import { SgDispositivo } from './SgDispositivo';
import { SgIsola } from '../SgIsola/SgIsola';
import { SgStabilimento } from '../SgStabilimento/SgStabilimento';
export interface DeviceInfoResult {
    codDispositivo: string;
    desDispositivo: string;
    desIsola: string;
    desStabilimento: string;
}
export declare class DispositivoService {
    private readonly dispositivoRepo;
    private readonly isolaRepo;
    private readonly stabilimentoRepo;
    constructor(dispositivoRepo: Repository<SgDispositivo>, isolaRepo: Repository<SgIsola>, stabilimentoRepo: Repository<SgStabilimento>);
    findAttivi(): Promise<SgDispositivo[]>;
    getDeviceInfo(idDispositivo: number): Promise<DeviceInfoResult | null>;
}
