import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../user.service';
import { LoginInput } from '../inputs/login.input';
import { TokenDto } from '../dtos/token.dto';

@Resolver(() => TokenDto)
export class SiginResolver {
  constructor(private readonly userService: UserService) {}

  // getting data as userInfo from gql
  @Query(() => TokenDto)
  async signin(@Args('signin') input: LoginInput) {
    return this.userService.login(input);
  }
}
