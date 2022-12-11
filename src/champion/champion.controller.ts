import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChampionService } from './champion.service';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@ApiTags('Champion')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('champion')
export class ChampionController {
  constructor(private readonly championService: ChampionService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um campeão',
  })
  create(@Body() createChampionDto: CreateChampionDto) {
    return this.championService.create(createChampionDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Busca todos os campeões',
  })
  findAll() {
    return this.championService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Busca um campeão pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.championService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edita um campeão pelo ID',
  })
  update(
    @Param('id') id: string,
    @Body() updateChampionDto: UpdateChampionDto,
  ) {
    return this.championService.update(id, updateChampionDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um campeão pelo ID',
  })
  remove(@Param('id') id: string) {
    return this.championService.remove(id);
  }
}
