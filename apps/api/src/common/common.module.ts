import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { DynamooseConfigService } from './config/dynamoose-config.service';
import { SoundpageSchema } from './model/soundpage.schema';
import { SoundpageRepository } from './model/soundpage.repository';

@Module({
  imports: [
    DynamooseModule.forRootAsync({ useClass: DynamooseConfigService }),
    DynamooseModule.forFeature([
      { name: 'Soundpage', schema: SoundpageSchema },
    ]),
  ],
  providers: [SoundpageRepository],
  exports: [SoundpageRepository],
})
export class CommonModule {}
