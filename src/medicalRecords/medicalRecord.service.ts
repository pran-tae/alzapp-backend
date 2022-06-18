import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import {
  MedicalRecord,
  MedicalRecordDocument,
} from './schemas/medical-record.schema';
import { CreateMedicalRecordDto } from 'src/medicalRecords/dto/create-medical-record.dto';

@Injectable()
export class MedicalRecordService {
  constructor(
    @InjectModel(MedicalRecord.name)
    private medicalRecordModel: Model<MedicalRecordDocument>,
  ) {}

  async create(
    createMedicalRecordDto: CreateMedicalRecordDto,
  ): Promise<MedicalRecord> {
    const createdCat = new this.medicalRecordModel(createMedicalRecordDto);
    return createdCat.save();
  }

  async getAll(): Promise<MedicalRecord[]> {
    return this.medicalRecordModel.find().exec();
  }

  async delete(_id: ObjectId): Promise<any> {
    return this.medicalRecordModel.deleteOne({ _id });
  }
}
