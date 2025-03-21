import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { Soundpage, SoundpageKey } from './soundpage.interface';
import { v1 as uuid } from 'uuid';
import { BookmarkDto } from '../../modules/bookmark/dto/bookmark.dto';
import { SoundpageDto } from '../../modules/soundpage/dto/soundpage.dto';

@Injectable()
export class SoundpageRepository {
  constructor(
    @InjectModel('Soundpage')
    private readonly soundpageModel: Model<Soundpage, SoundpageKey>,
  ) {}

  async saveSoundpage(soundpageDto: SoundpageDto): Promise<string> {
    const soundpageId = uuid();
    await this.soundpageModel.create({
      pk: `s#${soundpageId}`,
      sk: `s#${soundpageId}`,
      soundpageName: soundpageDto.name,
    });
    return soundpageId;
  }

  async getSoundpage(id: string) {
    return await this.soundpageModel.query({ pk: `s#${id}` }).exec();
  }

  async saveBookmark(bookmarkDto: BookmarkDto): Promise<string> {
    const bookmarkId = uuid();
    await this.soundpageModel.create({
      pk: `s#${bookmarkDto.soundpageId}`,
      sk: `b#${bookmarkId}`,
      bookmarkContent: bookmarkDto.content,
      bookmarkTime: bookmarkDto.time,
    });
    return bookmarkId;
  }

  async getBookmark(soundpageId: string, bookmarkId: string) {
    return await this.soundpageModel.get({
      pk: `s#${soundpageId}`,
      sk: `b#${bookmarkId}`,
    });
  }

  async updateBookmark(bookmarkId: string, bookmarkDto: BookmarkDto) {
    await this.soundpageModel.update({
      pk: `s#${bookmarkDto.soundpageId}`,
      sk: `b#${bookmarkId}`,
      bookmarkContent: bookmarkDto.content,
      bookmarkTime: bookmarkDto.time,
    });
  }

  async removeBookmark(soundpageId: string, bookmarkId: string) {
    await this.soundpageModel.delete({
      pk: `s#${soundpageId}`,
      sk: `b#${bookmarkId}`,
    });
  }
}
