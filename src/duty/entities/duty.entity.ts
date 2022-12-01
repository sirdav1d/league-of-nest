import { CreateDutyDto } from '../dto/create-duty.dto';
import { IChampion } from '../../champion/entities/champion.entity';

export interface IDuty extends CreateDutyDto {
  id?: String;
  champions?: IChampion[];
}
