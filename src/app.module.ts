import { IntrospectAndCompose } from '@apollo/gateway';
import {
  YogaGatewayDriver,
  YogaGatewayDriverConfig,
} from '@graphql-yoga/nestjs-federation';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [

    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [{ name: 'users', url: 'http://localhost:9696/graphql' }, { name: 'posts', url: 'http://localhost:9697/graphql' }],

        }),
      },
    }),
  ],
})
export class AppModule { }
