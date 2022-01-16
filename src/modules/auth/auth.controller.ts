import { Body, Controller, Post } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<User>
  {
    return await this.authService.login(dto);
  }
}