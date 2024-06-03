import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/user.model';

@ObjectType()
export class Conversation {
  @Field(() => ID)
  id: number;

  @Field(() => [User])
  participants: User[];
}
