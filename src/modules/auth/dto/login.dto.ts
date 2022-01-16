import { IsDefined, IsString, MinLength, IsEmail } from 'class-validator';

export class LoginDto {

    @IsEmail()
    @IsString()
    @IsDefined()
    email: string;

    @MinLength(8)
    @IsString()
    @IsDefined()
    password: string;
}
