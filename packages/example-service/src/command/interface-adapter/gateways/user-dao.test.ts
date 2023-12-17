/**
 * @jest-environment @quramy/jest-prisma-node/environment
 * //@jest-environment-options { "verboseQuery": true }
 */
import { prisma } from "@/infrastructure/db";
import { UserFactory } from "@/infrastructure/factories";
import { initialize } from "@quramy/prisma-fabbrica";

jest.mock("@/infrastructure/db", () => ({ prisma: jestPrisma.client }));

describe("prisma test examples", () => {
  beforeEach(() => initialize({ prisma: jestPrisma.client }));

  test("add user", async () => {
    await UserFactory.create({
      name: "quramy",
    });

    expect(
      await prisma.user.findFirst({
        where: {
          name: "quramy",
        },
      }),
    ).toHaveProperty("name", "quramy");
  });

  test("count user", async () => {
    expect(await prisma.user.count()).toBe(3);
  });
});
