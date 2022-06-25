import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly role: string;
}
