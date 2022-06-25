import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { MedicalRecordModule } from './medicalRecords/medicalRecord.module';
import { ToDoModule } from './toDos/toDo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    MedicalRecordModule,
    ToDoModule,
    MongooseModule.forRoot(''),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
