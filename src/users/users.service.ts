import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findUser(username: string, password: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: { username, password },
    });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prismaService.user.create({ data });
  }
}
