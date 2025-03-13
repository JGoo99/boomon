import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoundpageModule } from './modules/soundpage/soundpage.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [SoundpageModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
