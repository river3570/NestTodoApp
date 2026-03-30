import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const todos = [
    { title: "牛乳を買う" },
    { title: "NestJSのドキュメントを読む" },
    { title: "Prismaのマイグレーションを実行する", done: true },
  ];

  for (const todo of todos) {
    await prisma.todo.create({ data: todo });
  }

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
