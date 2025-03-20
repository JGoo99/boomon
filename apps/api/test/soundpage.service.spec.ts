import { Test, TestingModule } from '@nestjs/testing';
import { SoundpageService } from '../src/modules/soundpage/soundpage.service';

describe('SoundpageService', () => {
  let service: SoundpageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoundpageService],
    }).compile();

    service = module.get<SoundpageService>(SoundpageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
