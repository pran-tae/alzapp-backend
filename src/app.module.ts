import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { MedicalRecordModule } from './medicalRecords/medicalRecord.module';
import { ToDoModule } from './toDos/toDo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MedicalRecordModule,
    ToDoModule,
    MongooseModule.forRoot(''),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
