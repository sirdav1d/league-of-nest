import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { LoginResponsDto } from './dto/auth.response.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Fazer Login na plataforma, recebendo um TOKEN de autenticação',
  })
  login(@Body() LoginDto: LoginDto): Promise<LoginResponsDto> {
    return this.authService.login(LoginDto);
  }
}
