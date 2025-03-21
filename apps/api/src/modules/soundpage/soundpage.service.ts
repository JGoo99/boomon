import { Injectable } from '@nestjs/common';
import { SoundpageRepository } from '../../common/model/soundpage.repository';
import { SoundpageDto } from './dto/soundpage.dto';

@Injectable()
export class SoundpageService {
  constructor(private readonly soundpageRepository: SoundpageRepository) {}

  async create(soundpageDto: SoundpageDto): Promise<string> {
    return await this.soundpageRepository.saveSoundpage(soundpageDto);
  }

  async get(id: string) {
    return await this.soundpageRepository.getSoundpage(id);
  }
}
