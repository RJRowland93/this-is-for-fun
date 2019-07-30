import { ApolloServer, gql } from "apollo-server-micro";
import time from "../../../models/example/time";

const typeDefs = gql`
  type Query {
    users: [User!]!
    time: Time!
  }
  type Time {
    time: String!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: "Nextjs Graphql" }];
    },
    time() {
      return { time: time.getTime() };
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
