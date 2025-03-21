import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SoundpageService } from './soundpage.service';
import { SoundpageDto } from './dto/soundpage.dto';

@Controller('soundpages')
export class SoundpageController {
  constructor(private readonly soundpageService: SoundpageService) {}

  @Post()
  async create(@Body() soundpageDto: SoundpageDto): Promise<string> {
    return await this.soundpageService.create(soundpageDto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.soundpageService.get(id);
  }
}
