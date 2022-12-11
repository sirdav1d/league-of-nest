import { ApiProperty } from '@nestjs/swagger';
import { IUser } from 'src/user/entities/user.entity';

export class LoginResponsDto {
  @ApiProperty({
    description: 'JWT gerado após o login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY3MDczNzM0NiwiZXhwIjoxNjcwOTEwMTQ2fQ.COo9iz9Sgn3LLzYkj-y25qj7n_qK8Waa_z3Zxgoumfg',
  })
  token: string;

  @ApiProperty({
    description: 'Usuário Logado',
  })
  user: IUser;
}
