import graphqlHTTP from 'express-graphql';

import schema from '../schemas/api';
import resolvers from '../resolvers/api';

// Create new graphQL router for API.
const router = graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
});

export default router;
