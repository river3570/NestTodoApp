import { Controller, Get, Render } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  @Render("todos/index")
  async index() {
    const todos = await this.todoService.findAll();
    return { todos };
  }
}
