import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToDoDocument = ToDo & Document;

@Schema()
export class ToDo {
  @Prop({ required: true })
  task: string;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);
