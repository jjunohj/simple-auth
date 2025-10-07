import {
  Injectable,
  ConflictException,
  NotFoundException,
} from "@nestjs/common";
import * as bcrypt from "bcryptjs";

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
}

@Injectable()
export class UsersService {
  // 메모리에 사용자 저장 (실습용)
  private users: User[] = [];
  private currentId = 1;

  async create(email: string, password: string, name: string): Promise<User> {
    // 이메일 중복 체크
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      throw new ConflictException("이미 사용중인 이메일입니다");
    }

    // 비밀번호 해시화
    const hashedPassword = await bcrypt.hash(password, 10);

    const user: User = {
      id: this.currentId++,
      email,
      password: hashedPassword,
      name,
      createdAt: new Date(),
    };

    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  // 테스트용: 모든 사용자 조회
  findAll(): Omit<User, "password">[] {
    return this.users.map(({ password, ...user }) => user);
  }
}
