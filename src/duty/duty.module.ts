import { Module } from '@nestjs/common';
import { DutyService } from './duty.service';
import { DutyController } from './duty.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DutyController],
  providers: [DutyService],
})
export class DutyModule {}
