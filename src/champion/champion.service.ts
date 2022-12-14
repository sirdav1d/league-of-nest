import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/error';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createChampionDto: CreateChampionDto) {
    const champion: Prisma.ChampionCreateInput = {
      name: createChampionDto.name.toLocaleUpperCase(),
      description: createChampionDto.description,
      difficulty: createChampionDto.difficulty,
      imageUrl: createChampionDto.imageUrl,
      skills: createChampionDto.skills.map((s)=> s.toLocaleUpperCase()),
      duty: {
        connectOrCreate: {
          create: { name: createChampionDto.dutyName, description: '' },
          where: { name: createChampionDto.dutyName },
        },
      },
      users: {
        connect: createChampionDto.users.map((userId) => ({
          id: userId,
        })),
      },
    };

    try {
      const resp = await this.prisma.champion.create({
        data: champion,
        select: {
          id: true,
          description: true,
          difficulty: true,
          imageUrl: true,
          name: true,
          skills: true,
          duty: { select: { id: true, name: true } },
          users: { select: { id: true, nickname: true, role: true } },
        },
      });
      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async findAll() {
    try {
      const resp = this.prisma.champion.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          difficulty: true,
          imageUrl: true,
          skills: true,
          duty: { select: { id: true, name: true } },
          users: { select: { id: true, nickname: true } },
        },
      });
      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async findOne(id: string) {
    try {
      const resp = await this.prisma.champion.findUnique({
        where: { id: id },
        select: {
          id: true,
          name: true,
          description: true,
          difficulty: true,
          imageUrl: true,
          skills: true,
          duty: { select: { id: true, name: true } },
          users: { select: { id: true, nickname: true } },
        },
      });
      return resp;
    } catch (e) {
      handleError(e);
    }
    return `This action returns a #${id} champion`;
  }

  async update(id: string, updateChampionDto: UpdateChampionDto) {
    try {
      const resp = await this.prisma.champion.update({
        data: {
          name: updateChampionDto.name,
          description: updateChampionDto.description,
          difficulty: updateChampionDto.difficulty,
          imageUrl: updateChampionDto.imageUrl,
          skills: updateChampionDto.skills
            ?.toLocaleString()
            .toLocaleUpperCase(),
          duty: { update: { name: updateChampionDto.dutyName } },
          users: {
            connect: updateChampionDto.users?.map((userId) => ({
              id: userId,
            })),
          },
        },
        include: {
          duty: { select: { id: true, name: true } },
          users: { select: { id: true, nickname: true } },
        },
        where: { id: id },
      });

      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.champion.delete({ where: { id: id } });
      return { message: 'Campe??o deletado com sucesso' };
    } catch (e) {
      handleError(e);
    }
  }
}

