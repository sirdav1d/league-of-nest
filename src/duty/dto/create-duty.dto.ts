import {IsString, IsEmpty} from "class-validator";


export class CreateDutyDto {
  @IsString()
  @IsEmpty()
  name: String;

  @IsString()
  @IsEmpty()
  description: String;
}
