import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildGraphQLSchema } from './graphql/buildSchema';
import { prisma } from './config/prisma';

(async () => {
  const schema = await buildGraphQLSchema();
  const server = new ApolloServer({
    schema,
    context: { prisma },
  });

  server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
})();
