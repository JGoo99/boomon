import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put(':id')
  async update(
    @Param('id') soundpageId: string,
    @Body() soundpageDto: SoundpageDto,
  ) {
    await this.soundpageService.update(soundpageId, soundpageDto);
  }

  @Delete(':id')
  async remove(@Param('id') soundpageId: string) {
    await this.soundpageService.remove(soundpageId);
  }
}
