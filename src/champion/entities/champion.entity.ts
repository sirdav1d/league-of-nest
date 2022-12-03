import { CreateChampionDto } from '../dto/create-champion.dto';
import { IUser } from '../../user/entities/user.entity';
import { IDuty } from 'src/duty/entities/duty.entity';

export interface IChampion extends CreateChampionDto {
  id?: string;
  duty?: IDuty|null;
}
