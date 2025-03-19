import { Controller, Get } from '@nestjs/common';

@Controller('soundpage')
export class SoundpageController {
  constructor() {}
  @Get('/')
  hi(): string {
    return 'hi';
  }
}
