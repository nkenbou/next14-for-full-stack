import { PrismaClient } from "@prisma/client";
import "server-only";

const prismaClientSingleton = (): PrismaClient => {
  return new PrismaClient();
};

declare global {
  // eslint-disable-next-line no-var -- 宣言のみのため
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

/**
 * @public
 */
export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
