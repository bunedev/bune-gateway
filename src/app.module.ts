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
    // GraphQLModule.forRoot<YogaGatewayDriverConfig>({
    //   driver: YogaGatewayDriver,
    //   server: {
    //     cors: true,
    //     graphqlEndpoint: 'docs',
    //   },
    //   gateway: {
    //     supergraphSdl: new IntrospectAndCompose({
    //       subgraphs: [{ name: 'users', url: 'http://localhost:9696/graphql' }],
    //     }),
    //   },
    // }),
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [{ name: 'users', url: 'http://localhost:9696/graphql' }],
        }),
      },
    }),
  ],
})
export class AppModule {}
