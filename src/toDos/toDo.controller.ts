import { Controller, Get, Post, Body } from '@nestjs/common';
import { ToDoService } from './toDo.service';
import { ToDo } from './schemas/to-do.schema';
import { CreateToDoDto } from 'src/toDos/dto/create-to-do.dto';

@Controller('/toDos')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Get()
  getAll(): Promise<ToDo[]> {
    return this.toDoService.getAll();
  }

  @Post()
  createToDo(@Body() createToDoDto: CreateToDoDto): any {
    return this.toDoService.create(createToDoDto);
  }
}
