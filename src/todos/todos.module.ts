import { Module } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";
import { prismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [prismaModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
