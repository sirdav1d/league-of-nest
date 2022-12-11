import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
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


  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Retorna o usuário logado no momento'
  })
  @ApiBearerAuth()
  profile(){
    return 'validado'
  }
}
