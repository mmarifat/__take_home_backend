import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SigupResolver } from './resolvers/sigup.resolver';
import { SiginResolver } from './resolvers/sigin.resolver';
import { UserService } from './user.service';
import { BcryptService } from '../../package/services/bcrypt.service';
import UserSchema, { UserEntity } from './schemas/user.schema';
import { CollectionEnum } from '../../package/enum/collection.enum';
import { NotFoundService } from '../../package/services/not-found.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserEntity.name,
        schema: UserSchema,
        collection: CollectionEnum.USERS,
      },
    ]),
  ],
  providers: [
    SigupResolver,
    SiginResolver,
    UserService,
    BcryptService,
    NotFoundService,
  ],
})
export class UserModule {}
