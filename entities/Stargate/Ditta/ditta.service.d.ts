import { Repository } from 'typeorm';
import { Ditta } from './ditta';
export declare class DittaService {
    private readonly dittaRepository;
    constructor(dittaRepository: Repository<Ditta>);
    findAll(): Promise<{
        idDitta: number;
        descrizione: string;
    }[]>;
}
