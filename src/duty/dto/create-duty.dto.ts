import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDutyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
