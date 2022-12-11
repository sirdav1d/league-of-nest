import { ApiProperty } from '@nestjs/swagger';
import { IUser } from 'src/user/entities/user.entity';

export class LoginResponsDto {
  @ApiProperty({
    description: 'JWT gerado após o login',
  })
  token: string;

  @ApiProperty({
    description: 'Usuário Logado',
  })
  user: IUser;
}
