import { IsString } from 'class-validator';

export class CreateToDoDto {
  @IsString()
  readonly task: string;
}
