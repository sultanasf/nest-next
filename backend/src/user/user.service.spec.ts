import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', async () => {
    expect(await service.findAll()).toBeDefined();
  });
});
