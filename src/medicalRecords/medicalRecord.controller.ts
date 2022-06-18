import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { MedicalRecordService } from './medicalRecord.service';
import { MedicalRecord } from './schemas/medical-record.schema';
import { CreateMedicalRecordDto } from 'src/medicalRecords/dto/create-medical-record.dto';

@Controller('/medicalRecords')
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Get()
  getAll(): Promise<MedicalRecord[]> {
    return this.medicalRecordService.getAll();
  }

  @Post()
  createMedicalRecord(
    @Body() createMedicalRecordDto: CreateMedicalRecordDto,
  ): any {
    return this.medicalRecordService.create(createMedicalRecordDto);
  }

  @Delete(':id')
  deleteMedicalRecord(@Param('id') id: ObjectId): Promise<any> {
    console.log(id);
    return this.medicalRecordService.delete(id);
  }
}
