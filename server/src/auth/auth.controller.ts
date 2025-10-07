import { Controller, Post, Body, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(
      registerDto.email,
      registerDto.password,
      registerDto.name
    );
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Body() loginDto: LoginDto, @Request() req) {
    return this.authService.login(req.user);
  }
}
