import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
    // uri: 'https://leetcode.com/graphql',
    uri: 'http://localhost:3001/graphql',
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    // },
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    // ssrMode: typeof window === 'undefined',
})

export default client;