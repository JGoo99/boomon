import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Soundpage, SoundpageKey } from './soundpage.interface';

@Injectable()
export class SoundpageRepository {
  constructor(
    @InjectModel('Soundpage')
    private readonly soundpageModel: Model<Soundpage, SoundpageKey>,
  ) {}

  async save(soundpage: Soundpage) {
    await this.soundpageModel.create(soundpage);
  }
}
