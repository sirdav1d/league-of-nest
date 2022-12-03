import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DutyService } from './duty.service';
import { CreateDutyDto } from './dto/create-duty.dto';
import { UpdateDutyDto } from './dto/update-duty.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Duty')
@Controller('duty')
export class DutyController {
  constructor(private readonly dutyService: DutyService) {}

  @Post()
  create(@Body() createDutyDto: CreateDutyDto) {
    return this.dutyService.create(createDutyDto);
  }

  @Get()
  findAll() {
    return this.dutyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dutyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDutyDto: UpdateDutyDto) {
    return this.dutyService.update(id, updateDutyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dutyService.remove(id);
  }
}
