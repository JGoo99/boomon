import { Body, Controller, Post } from '@nestjs/common';
import { SoundpageService } from '../services/soundpage.service';
import { Soundpage } from '../entities/soundpage.interface';

@Controller('soundpage')
export class SoundpageController {
  constructor(private readonly soundpageService: SoundpageService) {}

  @Post()
  async create(@Body() soundpage: Soundpage) {
    await this.soundpageService.create(soundpage);
  }
}
