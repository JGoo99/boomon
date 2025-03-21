import { Module } from '@nestjs/common';
import { SoundpageModule } from './modules/soundpage/soundpage.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { BookmarkModule } from './modules/bookmark/bookmark.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SoundpageModule,
    CommonModule,
    HealthModule,
    BookmarkModule,
  ],
})
export class AppModule {}
