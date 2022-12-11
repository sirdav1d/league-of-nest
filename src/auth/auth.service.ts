import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { LoginResponsDto } from './dto/auth.response.dto';

@Injectable()
export class AuthService {
  async login(LoginDto: LoginDto): Promise<LoginResponsDto> {
    throw new Error('Method not implemented.');
  }
}
