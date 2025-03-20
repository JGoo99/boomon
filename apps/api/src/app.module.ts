import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { SoundpageModule } from './modules/soundpage/soundpage.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), SoundpageModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
