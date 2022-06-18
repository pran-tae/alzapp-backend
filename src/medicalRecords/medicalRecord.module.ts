import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalRecordController } from './medicalRecord.controller';
import { MedicalRecordService } from './medicalRecord.service';
import {
  MedicalRecord,
  MedicalRecordSchema,
} from './schemas/medical-record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalRecord.name, schema: MedicalRecordSchema },
    ]),
  ],
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService],
})
export class MedicalRecordModule {}
