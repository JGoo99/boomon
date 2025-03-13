import { Module } from '@nestjs/common';
import { SoundpageController } from './soundpage.controller';
import { SoundpageService } from './soundpage.service';

@Module({
  controllers: [SoundpageController],
  providers: [SoundpageService]
})
export class SoundpageModule {}
