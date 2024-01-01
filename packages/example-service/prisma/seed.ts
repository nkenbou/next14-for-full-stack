import console from "node:console";
import type { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const users: Prisma.UserCreateInput[] = [
    {
      email: "foo@example.com",
      name: "foo",
    },
    {
      email: "bar@example.com",
      name: "bar",
    },
    {
      email: "baz@example.com",
      name: "baz",
    },
  ];
  for (const user of users) {
    // eslint-disable-next-line no-await-in-loop -- パフォーマンスの考慮不要なためシンプルにしておく
    await prisma.user.create({
      data: user,
    });
  }

  const foo = await prisma.user.findFirstOrThrow({ where: { name: "foo" } });
  const bar = await prisma.user.findFirstOrThrow({ where: { name: "bar" } });

  const posts: Prisma.PostCreateInput[] = [
    {
      title: "foo title 1",
      content: "foo content 1",
      published: true,
      author: {
        connect: {
          id: foo.id,
        },
      },
    },
    {
      title: "bar title 1",
      content: "bar content 1",
      published: true,
      author: {
        connect: {
          id: bar.id,
        },
      },
    },
  ];
  for (const post of posts) {
    // eslint-disable-next-line no-await-in-loop -- パフォーマンスの考慮不要なためシンプルにしておく
    await prisma.post.create({
      data: post,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
