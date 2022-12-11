import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './entities/user.entity';
import { handleError } from 'src/utils/error';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private UserSelect = {
    id: true,
    email: true,
    imageUrl: true,
    name: true,
    nickname: true,
    role: true,
    password: false,
    champions: {
      select: {
        name: true,
        duty: { select: { name: true } },
        imageUrl: true,
        id: true,
      },
    },
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const user: IUser = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    try {
      const resp = await this.prisma.user.create({
        data: user,
        select: this.UserSelect,
      });
      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async findAll() {
    try {
      const resp = await this.prisma.user.findMany({
        select: {
          id: true,
          email: true,
          imageUrl: true,
          name: true,
          nickname: true,
          role: true,
          champions: {
            select: {
              id: true,
              name: true,
              duty: { select: { id: true, name: true } },
              imageUrl: true,
            },
          },
        },
      });
      if (resp.length < 1) {
        return { message: 'Não há usuários cadastrados' };
      } else {
        return resp;
      }
    } catch (e) {
      handleError(e);
    }
  }

  async findOne(id: string) {
    const validation = await this.isValidId(id);
    if (validation) {
      try {
        const resp = await this.prisma.user.findUnique({
          where: { id: id },
          select: {
            id: true,
            name: true,
            email: true,
            imageUrl: true,
            nickname: true,
            role: true,
            champions: {
              select: {
                id: true,
                name: true,
                duty: { select: {id: true, name: true } },
                imageUrl: true,
              },
            },
          },
        });
        return resp;
      } catch (e) {
        handleError(e);
      }
    } else {
      return new NotFoundException('ID não encontrado');
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const validation = await this.isValidId(id);
    if (validation) {
      const user: Partial<IUser> = {
        ...updateUserDto,
      };

      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }

      try {
        const resp = await this.prisma.user.update({
          data: user,
          where: { id: id },
          select: {
            id: true,
            name: true,
            email: true,
            imageUrl: true,
            nickname: true,
            role: true,
            champions: {
              select: {
                id: true,
                name: true,
                duty: { select: {id:true, name: true } },
                imageUrl: true,
              },
            },
          },
        });
        return resp;
      } catch (e) {
        handleError(e);
      }
    } else {
      return new NotFoundException('ID não encontrado');
    }
  }

  async remove(id: string) {
    const validation = await this.isValidId(id);
    if (validation) {
      await this.prisma.user.delete({ where: { id: id } });
      return { message: 'Usuário deletado com sucesso' };
    } else {
      return new NotFoundException('ID não encontrado');
    }
  }

  async isValidId(id: string) {
    const resp = await this.prisma.user.findUnique({ where: { id: id } });
    if (!resp) {
      return false;
    } else {
      return true;
    }
  }
}
