import {

  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './entities/user.entity';
import { handleError } from 'src/utils/error';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user: IUser = createUserDto;
    try {
      const resp = await this.prisma.user.create({ data: user });
      delete resp.password;
      return resp;
    } catch (e) {
      handleError(e);
    }
  }

  async findAll() {
    try {
      const resp: IUser[] = await this.prisma.user.findMany();
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
        const resp = await this.prisma.user.findUnique({ where: { id: id } });
        delete resp.password;
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
      const user = { ...updateUserDto };
      try {
        const resp = await this.prisma.user.update({
          data: user,
          where: { id: id },
        });
        delete resp.password;
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
