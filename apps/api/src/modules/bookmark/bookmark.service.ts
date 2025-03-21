import { Injectable } from '@nestjs/common';
import { BookmarkDto } from './dto/bookmark.dto';
import { SoundpageRepository } from '../../common/model/soundpage.repository';

@Injectable()
export class BookmarkService {
  constructor(private readonly soundpageRepository: SoundpageRepository) {}

  async create(bookmarkDto: BookmarkDto): Promise<string> {
    return await this.soundpageRepository.saveBookmark(bookmarkDto);
  }

  async findOne(soundpageId: string, bookmarkId: string) {
    return await this.soundpageRepository.getBookmark(soundpageId, bookmarkId);
  }

  async update(bookmarkId: string, bookmarkDto: BookmarkDto) {
    return await this.soundpageRepository.updateBookmark(
      bookmarkId,
      bookmarkDto,
    );
  }

  async remove(soundpageId: string, bookmarkId: string) {
    return await this.soundpageRepository.removeBookmark(
      soundpageId,
      bookmarkId,
    );
  }
}
