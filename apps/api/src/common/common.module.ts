import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { DynamooseModule } from 'nestjs-dynamoose';
import { DynamooseConfigService } from './config/dynamoose-config.service';
import { SoundpageSchema } from './model/soundpage.schema';
import { SoundpageRepository } from './model/soundpage.repository';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    DynamooseModule.forRootAsync({ useClass: DynamooseConfigService }),
    DynamooseModule.forFeature([
      { name: 'Soundpage', schema: SoundpageSchema },
    ]),
  ],
  controllers: [HealthController],
  providers: [SoundpageRepository],
  exports: [SoundpageRepository],
})
export class CommonModule {}
