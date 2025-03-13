import { Test, TestingModule } from '@nestjs/testing';
import { SoundpageController } from './soundpage.controller';

describe('SoundpageController', () => {
  let controller: SoundpageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoundpageController],
    }).compile();

    controller = module.get<SoundpageController>(SoundpageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
