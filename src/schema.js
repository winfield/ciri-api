import { makeExecutableSchema } from 'graphql-tools'

import {
  typeDefs as Article,
  resolvers as articleResolvers
} from './data/article'

const RootQuery = `
  type Query {
    articles: [Article]
  }
`

const RootMutation = `
  type Mutation {
    createArticle(title: String, body: String): Article
    destroyArticle(id: ID!): Article
  }
`

const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation,
  }
`

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, Article],
  resolvers: articleResolvers,
})
