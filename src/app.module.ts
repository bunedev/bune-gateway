import { IntrospectAndCompose } from '@apollo/gateway';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'auth', url: Bun.env.AUTH_GRAPHQL },
            { name: 'posts', url: Bun.env.BLOG_GRAPHQL },
            // { name: 'payment', url: 'http://localhost:9999/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
