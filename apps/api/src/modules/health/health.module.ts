import { Module } from '@nestjs/common';
import { CommonModule } from '../../common/common.module';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CommonModule, TerminusModule, HttpModule],
  controllers: [HealthController],
})
export class HealthModule {}
