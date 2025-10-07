import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정 - 클라이언트에서 접근 가능하도록
  app.enableCors({
    origin: "http://localhost:5173", // Vite 기본 포트
    credentials: true,
  });

  // Validation 파이프 적용
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log("🚀 서버가 http://localhost:3000 에서 실행중입니다");
}
bootstrap();
