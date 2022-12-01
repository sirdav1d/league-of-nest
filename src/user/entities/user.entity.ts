import { CreateUserDto } from "../dto/create-user.dto";
import { IChampion } from "src/champion/entities/champion.entity";

export interface IUser extends CreateUserDto {
  id?: string;
}
