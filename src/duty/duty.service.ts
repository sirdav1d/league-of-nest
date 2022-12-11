import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/error';
import { CreateDutyDto } from './dto/create-duty.dto';
import { UpdateDutyDto } from './dto/update-duty.dto';
import { IDuty } from './entities/duty.entity';

@Injectable()
export class DutyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDutyDto: CreateDutyDto) {
    const duty: Prisma.DutyCreateInput = {
      name: createDutyDto.name.toUpperCase(),
      description: createDutyDto.description,
    };

    try {
      const resp = await this.prisma.duty.create({
        data: duty,
        select: {
          id: true,
          name: true,
          description: true,
          champions: {
            select: {
              name: true,
              difficulty: true,
              imageUrl: true,
              id: true,
              duty: true,
            },
          },
        },
      });
      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async findAll() {
    try {
      const resp = await this.prisma.duty.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          champions: {
            select: {
              name: true,
              difficulty: true,
              imageUrl: true,
              id: true,
              duty: true,
            },
          },
        },
      });
      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async findOne(id: string) {
    try {
      const resp = await this.prisma.duty.findUnique({
        where: { id: id },
        select: {
          id: true,
          name: true,
          description: true,
          champions: {
            select: {
              name: true,
              difficulty: true,
              imageUrl: true,
              id: true,
              duty: true,
            },
          },
        },
      });
      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async update(id: string, updateDutyDto: UpdateDutyDto) {
    try {
      const resp = await this.prisma.duty.update({
        data: {
          name: updateDutyDto.name?.toUpperCase(),
          description: updateDutyDto.description,
        },
        where: { id: id },
        select: {
          id: true,
          name: true,
          description: true,
          champions: {
            select: {
              name: true,
              difficulty: true,
              imageUrl: true,
              id: true,
              duty: true,
            },
          },
        },
      });
      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.duty.delete({ where: { id: id } });
      return { message: 'Função apagada com sucesso' };
    } catch (e) {
      handleError(e);
    }
  }
}
