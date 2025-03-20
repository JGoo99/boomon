import { Module } from '@nestjs/common';
import { SoundpageController } from './soundpage.controller';
import { SoundpageService } from './soundpage.service';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [SoundpageController],
  providers: [SoundpageService],
})
export class SoundpageModule {}
