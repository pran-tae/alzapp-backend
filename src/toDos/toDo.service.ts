import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo, ToDoDocument } from './schemas/to-do.schema';
import { CreateToDoDto } from 'src/toDos/dto/create-to-do.dto';

@Injectable()
export class ToDoService {
  constructor(
    @InjectModel(ToDo.name)
    private toDoModel: Model<ToDoDocument>,
  ) {}

  async create(createToDoDto: CreateToDoDto): Promise<ToDo> {
    const createdCat = new this.toDoModel(createToDoDto);
    return createdCat.save();
  }

  async getAll(): Promise<ToDo[]> {
    return this.toDoModel.find().exec();
  }
}
