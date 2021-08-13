import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserDto } from '../dtos/user.dto';
import { UserService } from '../user.service';
import { UserInput } from '../inputs/user.input';

@Resolver(() => UserDto)
export class SigupResolver {
  constructor(private readonly userService: UserService) {}

  // getting data as userInfo from gql
  @Mutation(() => UserDto)
  async signup(@Args('signup') input: UserInput) {
    return this.userService.register(input);
  }
}
