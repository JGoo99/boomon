import { Injectable } from '@nestjs/common';
import { Soundpage } from '../../common/model/soundpage.interface';
import { SoundpageRepository } from '../../common/model/soundpage.repository';

@Injectable()
export class SoundpageService {
  constructor(private readonly soundpageRepository: SoundpageRepository) {}

  async create(soundpage: Soundpage) {
    console.log(soundpage);
    await this.soundpageRepository.save(soundpage);
  }
}
