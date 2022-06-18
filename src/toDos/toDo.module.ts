import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoController } from './toDo.controller';
import { ToDoService } from './toDo.service';
import { ToDo, ToDoSchema } from './schemas/to-do.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }]),
  ],
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class ToDoModule {}
