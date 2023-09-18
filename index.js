import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './Schema/graphQLSchema.js';
import resolvers from './resolvers.js';
import mongoose from 'mongoose';
dotenv.config();
const mongoUrl = process.env.MONGO_URL;
const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginLandingPageGraphQLPlayground()] });
server.listen().then(async ({ url }) => {
    console.log(`Port is running at ${url}`);
    mongoose
        .connect(mongoUrl, {
            useNewUrlParser: true
        })
        .then(() => {
            console.log('Connected to database');
        })
        .catch((e) => console.log(e));
});
