import { CreateUserDto } from '../dto/create-user.dto';

export interface IUser extends CreateUserDto {
  id?: string;
}
