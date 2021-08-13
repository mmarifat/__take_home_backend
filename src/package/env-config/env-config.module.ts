import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// ENV getter from script prepends
const ENV = process.env['NODE' + '_ENV'];
const envFilePath = [`env/${!ENV ? `.env` : `.env.${ENV}`}`];

// setting global env module
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
  ],
})
export class EnvConfigModule {}
