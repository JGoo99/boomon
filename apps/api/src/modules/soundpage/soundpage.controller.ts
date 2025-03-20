import { Body, Controller, Post } from '@nestjs/common';
import { SoundpageService } from './soundpage.service';
import { Soundpage } from '../../common/model/soundpage.interface';

@Controller('soundpage')
export class SoundpageController {
  constructor(private readonly soundpageService: SoundpageService) {}

  @Post()
  async create(@Body() soundpage: Soundpage) {
    await this.soundpageService.create(soundpage);
  }
}
