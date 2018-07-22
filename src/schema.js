import { makeExecutableSchema } from 'apollo-server-koa'

import {
  typeDefs as articleTypeDefs,
  resolvers as articleResolvers,
} from './data/article'

import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from './data/scalars'

const Query = `
  type Query {
    articles: [Article]
    article(id: ID!): Article
  }
`

const Mutation = `
  type Mutation {
    addArticle(input: AddArticleInput!): AddArticlePayload
    updateArticle(input: UpdateArticleInput!): UpdateArticlePayload
    deleteArticle(input: DeleteArticleInput!): DeleteArticlePayload
  }
`

export default makeExecutableSchema({
  typeDefs: [Query, Mutation, articleTypeDefs, scalarTypeDefs],
  resolvers: articleResolvers,
})
