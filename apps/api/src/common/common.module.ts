import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { DynamooseModule } from 'nestjs-dynamoose';
import { DynamooseConfigService } from './model/dynamoose-config.service';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    DynamooseModule.forRootAsync({ useClass: DynamooseConfigService }),
  ],
  controllers: [HealthController],
})
export class CommonModule {}
