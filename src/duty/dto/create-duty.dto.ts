import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDutyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome da função', example: 'MAGO' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição da função',
    example:
      'A principal tarefa do mago é adquirir abates, assistências, matar adversário da rota do meio, o suporte e o atirador, tirar a vida dos adversários aos poucos e ter controle de grupo.',
  })
  description: string;
}
