import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail do usuário cadastrado',
    example: 'email2@email.com',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @ApiProperty({
    description: 'Senha do usuário cadastrado',
    example: 'senha@321',
  })
  password: string;
}
