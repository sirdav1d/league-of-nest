import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DutyController } from './duty.controller';
import { DutyService } from './duty.service';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [DutyController],
  providers: [DutyService],
})
export class DutyModule {}
