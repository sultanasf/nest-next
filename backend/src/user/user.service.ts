import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  private readonly User: Prisma.UserDelegate<DefaultArgs>;

  constructor(private readonly prisma: PrismaClient) {
    this.User = this.prisma.user;
  }

  async createUser(data: any) {
    return this.User.create(data);
  }

  async findAll() {
    return this.User.findMany();
  }
}
