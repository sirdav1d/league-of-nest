import { IDuty } from 'src/duty/entities/duty.entity';
import { CreateChampionDto } from '../dto/create-champion.dto';

export interface IChampion extends CreateChampionDto {
  id?: string;
  duty?: IDuty | null;
}
