import { Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionService {
  create(createChampionDto: CreateChampionDto) {
    return 'This action adds a new champion';
  }

  findAll() {
    return `This action returns all champion`;
  }

  findOne(id: string) {
    return `This action returns a #${id} champion`;
  }

  update(id: string, updateChampionDto: UpdateChampionDto) {
    return `This action updates a #${id} champion`;
  }

  remove(id: string) {
    return `This action removes a #${id} champion`;
  }
}
