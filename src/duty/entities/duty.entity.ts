import { IChampion } from '../../champion/entities/champion.entity';
import { CreateDutyDto } from '../dto/create-duty.dto';

export interface IDuty extends CreateDutyDto {
  id?: String;
  champions?: IChampion[] | null;
}
