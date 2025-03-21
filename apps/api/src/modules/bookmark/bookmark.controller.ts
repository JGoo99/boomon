import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkDto } from './dto/bookmark.dto';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async create(@Body() bookmarkDto: BookmarkDto): Promise<string> {
    return await this.bookmarkService.create(bookmarkDto);
  }

  @Get(':id')
  async findOne(
    @Param('id') bookmarkId: string,
    @Body('soundpageId') soundpageId: string,
  ) {
    return await this.bookmarkService.findOne(soundpageId, bookmarkId);
  }

  @Put(':id')
  async update(
    @Param('id') bookmarkId: string,
    @Body() bookmarkDto: BookmarkDto,
  ) {
    return await this.bookmarkService.update(bookmarkId, bookmarkDto);
  }

  @Delete(':id')
  remove(
    @Param('id') bookmarkId: string,
    @Body('soundpageId') soundpageId: string,
  ) {
    return this.bookmarkService.remove(soundpageId, bookmarkId);
  }
}
