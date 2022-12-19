import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'email@email.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'David Diniz',
  })
  name: string;

  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Apelido do usuário',
    example: 'sirdav1d',
  })
  nickname: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    description: 'Senha do usuário',
    example: 'senha@321',
  })
  password: string;


  @ApiProperty({
    description: 'Nível de usabilidade',
    example: 'admin',
  })
  role: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'Imagem do usuário',
    example: 'https://avatars.githubusercontent.com/u/97140028?v=4',
  })
  imageUrl: string;
}
