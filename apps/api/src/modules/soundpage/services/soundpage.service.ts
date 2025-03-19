import { Injectable } from '@nestjs/common';
import { Soundpage } from '../entities/soundpage.interface';
import { SoundpageRepository } from '../repository/soundpage.repository';

@Injectable()
export class SoundpageService {
  constructor(private readonly soundpageRepository: SoundpageRepository) {}

  async create(soundpage: Soundpage) {
    console.log(soundpage);
    await this.soundpageRepository.save(soundpage);
  }
}
