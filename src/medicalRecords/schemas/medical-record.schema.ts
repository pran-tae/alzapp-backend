import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicalRecordDocument = MedicalRecord & Document;

@Schema()
export class MedicalRecord {
  @Prop({ required: true })
  temperature: number;

  @Prop({ required: true })
  sys: number;

  @Prop({ required: true })
  dia: number;

  @Prop({ required: true })
  pulse: number;

  @Prop({ required: true })
  respiratoryRate: number;

  @Prop({ required: true })
  DTX: number;

  @Prop({ required: false })
  notes: string;
}

export const MedicalRecordSchema = SchemaFactory.createForClass(MedicalRecord);
