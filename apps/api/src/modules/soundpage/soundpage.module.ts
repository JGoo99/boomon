import { Module } from '@nestjs/common';
import { SoundpageController } from './controllers/soundpage.controller';
import { SoundpageService } from './services/soundpage.service';

@Module({
  controllers: [SoundpageController],
  providers: [SoundpageService]
})
export class SoundpageModule {}
