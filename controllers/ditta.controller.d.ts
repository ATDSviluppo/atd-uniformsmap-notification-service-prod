import { DittaService } from '../entities/Stargate/Ditta/ditta.service';
export declare class DittaController {
    private readonly dittaService;
    constructor(dittaService: DittaService);
    getAllDitte(): Promise<{
        idDitta: number;
        descrizione: string;
    }[]>;
}
