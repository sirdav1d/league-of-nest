import {
  Body, Controller, Delete, Get, Param, Patch, Post, UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateDutyDto } from './dto/create-duty.dto';
import { UpdateDutyDto } from './dto/update-duty.dto';
import { DutyService } from './duty.service';

@ApiTags('Duty')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('duty')
export class DutyController {
  constructor(private readonly dutyService: DutyService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma função de um campeão',
  })
  create(@Body() createDutyDto: CreateDutyDto) {
    return this.dutyService.create(createDutyDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Lista todas as funções de campeões',
  })
  findAll() {
    return this.dutyService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca uma função de campeão pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.dutyService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edita uma função de campeão pelo ID',
  })
  update(@Param('id') id: string, @Body() updateDutyDto: UpdateDutyDto) {
    return this.dutyService.update(id, updateDutyDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta uma função de campeão pelo ID',
  })
  remove(@Param('id') id: string) {
    return this.dutyService.remove(id);
  }
}
