// internal-api/src/main.ts
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const globalPrefix = 'api';
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(3003);
  Logger.log(
    `🚀 Application is running on: http://localhost:3003/${globalPrefix}`
  );
}
bootstrap();
