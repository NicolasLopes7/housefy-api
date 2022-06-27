import { buildSchema } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';

export const buildGraphQLSchema = async () => {
  const schema = await buildSchema({
    resolvers,
    authMode: 'error',
  });

  return schema;
};
