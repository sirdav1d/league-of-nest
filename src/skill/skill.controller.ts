import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Skill')
@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria uma skill',
  })
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todas as skills',
  })
  findAll() {
    return this.skillService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca uma skill pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.skillService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edita uma skill pelo ID',
  })
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.update(id, updateSkillDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta uma skill pelo ID',
  })
  remove(@Param('id') id: string) {
    return this.skillService.remove(id);
  }
}
