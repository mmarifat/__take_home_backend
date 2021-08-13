import { Module } from '@nestjs/common';
import { configEnvironment } from './package/env-config/env-config';
import { configMongo } from './package/mongo-config/mongo.config';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    configEnvironment(),
    configMongo(),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
  ],
})
export class AppModule {}
