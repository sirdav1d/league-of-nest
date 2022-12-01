import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/error';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';
import { IChampion } from './entities/champion.entity';

@Injectable()
export class ChampionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createChampionDto: CreateChampionDto) {
    const champion: Prisma.ChampionCreateInput = {
      name: createChampionDto.name,
      description: createChampionDto.description,
      difficulty: createChampionDto.difficulty,
      imageUrl: createChampionDto.imageUrl,
      skills: createChampionDto.skills,
      duty: {
        connectOrCreate: {
          create: { name: createChampionDto.dutyName, description: 'dadafda' },
          where: { id: createChampionDto.dutyName },
        },
      },
      user: { connect: { id: createChampionDto.userId } },
    };
    try {
      const resp = this.prisma.champion.create({
        data: champion,
        select: {
          id: true,
          description: true,
          difficulty: true,
          imageUrl: true,
          name: true,
          skills: true,
          duty: { select: { name: true } },
          user: { select: { nickname: true, role: true } },
        },
      });
      return resp;
    } catch (e) {
      handleError(e);
    }

    return 'This action adds a new champion';
  }

  findAll() {
    return `This action returns all champion`;
  }

  findOne(id: string) {
    return `This action returns a #${id} champion`;
  }

  update(id: string, updateChampionDto: UpdateChampionDto) {
    return `This action updates a #${id} champion`;
  }

  remove(id: string) {
    return `This action removes a #${id} champion`;
  }
}
