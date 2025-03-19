import { Module } from '@nestjs/common';
import { SoundpageController } from './controllers/soundpage.controller';
import { SoundpageService } from './services/soundpage.service';
import { DynamooseModule } from 'nestjs-dynamoose';
import { SoundpageSchema } from './entities/soundpage.schema';
import { CommonModule } from '../../common/common.module';
import { SoundpageRepository } from './repository/soundpage.repository';

@Module({
  imports: [
    CommonModule,
    DynamooseModule.forFeature([
      { name: 'Soundpage', schema: SoundpageSchema },
    ]),
  ],
  controllers: [SoundpageController],
  providers: [SoundpageService, SoundpageRepository],
})
export class SoundpageModule {}
