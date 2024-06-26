import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Conversation } from '../conversation/conversation.model';
import { Message } from '../message/message.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => [Conversation], { nullable: true })
  conversations?: Conversation[];

  @Field(() => [Message], { nullable: true })
  messages?: Message[];
}
