import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Take Home Api - Bootstrap');

  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  //enabling cors
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  // getting app port from env
  const appPort = configService.get<number>('APP_PORT');
  await app.listen(appPort);

  // log the service
  logger.log(
    `API is running in : http://localhost:${appPort} or http://127.0.0.1:${appPort}`,
  );
}

bootstrap();
