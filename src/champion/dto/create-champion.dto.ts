import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  Max,
} from 'class-validator';

export class CreateChampionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do campeão.',
    example: 'AHRI',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do campeão.',
    example:
      'Ela gosta de brincar com suas presas manipulando suas emoções antes de devorar suas essências vitais.',
  })
  description: string;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Max(10)
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nível de dificuldade do campeão, de 0 a 10.',
    example: 7,
  })
  difficulty: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    description: 'URL da imagem do campeão.',
    example:
      'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltda668b66206f7f9e/60ee0b41cdb93c284ee3e936/Ahri_0.jpg',
  })
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Lista de habilidades do campeão.',
    example:
      'FURTO DE ESSÊNCIA,ORBE DA ILUSÃO, FOGO DE RAPOSA,ENCANTO, ÍMPETO ESPIRITUAL',
  })
  skills: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Função do campeão.',
    example: 'MAGO',
  })
  dutyName: string;

  @ApiProperty({
    description: 'ID do usuário que favoritou o campeão',
    example: '["64d59ce3-921d-417b-898d-2326d959ca6b"]',
  })
  users?: string[];
}
