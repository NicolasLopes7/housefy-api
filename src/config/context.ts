import { PrismaClient, User } from '@prisma/client';
import { prisma } from './prisma';
export type Context = {
  readonly prisma: PrismaClient;
  readonly user?: Omit<User, 'password'>;
};

export const context: Context = { prisma };
