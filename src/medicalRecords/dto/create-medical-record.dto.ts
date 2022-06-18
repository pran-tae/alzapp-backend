import { IsNumber, IsString } from 'class-validator';

export class CreateMedicalRecordDto {
  @IsNumber()
  readonly temperature: number;

  @IsNumber()
  readonly sys: number;

  @IsNumber()
  readonly dia: number;

  @IsNumber()
  readonly pulse: number;

  @IsNumber()
  readonly respiratoryRate: number;

  @IsNumber()
  readonly DTX: number;

  @IsString()
  readonly notes: string;
}
