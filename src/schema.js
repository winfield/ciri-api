import { makeExecutableSchema } from 'graphql-tools'

import {
  typeDefs as Article,
  resolvers as articleResolvers
} from './data/article'

const RootQuery = `
  type Query {
    articles: [Article]
    article(id: ID!): Article
  }
`

const RootMutation = `
  type Mutation {
    addArticle(input: AddArticleInput!): Article
    updateArticle(input: UpdateArticleInput!): Article
    deleteArticle(input: DeleteArticleInput!): Article
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
