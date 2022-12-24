import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/error';
import { LoginDto } from './dto/auth.dto';
import { LoginResponsDto } from './dto/auth.response.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login(LoginDto: LoginDto): Promise<LoginResponsDto> {
    const { email, password } = LoginDto;

    try {
      const user = await this.prisma.user.findUnique({
        where: { email: email },
      });

      if (!user) {
        throw new UnauthorizedException('Usuário e/ou senha inválidos');
      }

      const isPassValid = await bcrypt.compare(password, user.password);

      if (!isPassValid) {
        throw new UnauthorizedException('Usuário e/ou senha inválidos');
      }

      return {
        token: this.jwt.sign({ email }),
        user,
      };
    } catch (e) {
      handleError(e);
    }
  }

  async profile(user: IUser) {
    try {
      const response = await this.prisma.user.findUnique({
        where: { email: user.email },
        select: {
          id: true,
          name: true,
          email: true,
          nickname: true,
          imageUrl: true,
          role: true,
          champions: {
            select: {
              id: true,
              name: true,
              imageUrl: true,
              duty: { select: { id: true, name: true } },
            },
          },
        },
      });
      return response;
    } catch (e) {
      console.log(e);
      handleError(e);
    }
  }
}
