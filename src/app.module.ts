import { Module } from '@nestjs/common';
import { configEnvironment } from './package/env-config/env-config';
import { configMongo } from './package/mongo-config/mongo.config';

@Module({
  imports: [configEnvironment(), configMongo()],
})
export class AppModule {}
