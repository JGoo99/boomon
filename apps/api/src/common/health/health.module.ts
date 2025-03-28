import { Module } from '@nestjs/common';
import { CommonModule } from '../../common/common.module';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { DynamoDBHealthService } from './health.dynamodb';

@Module({
  imports: [CommonModule, TerminusModule, HttpModule],
  providers: [DynamoDBHealthService],
  controllers: [HealthController],
})
export class HealthModule {}
