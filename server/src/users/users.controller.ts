import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  // 현재 로그인한 사용자 정보 조회
  @UseGuards(JwtAuthGuard)
  @Get("me")
  getProfile(@Request() req) {
    const { password, ...user } = req.user;
    return user;
  }

  // 모든 사용자 조회 (테스트용)
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }
}
