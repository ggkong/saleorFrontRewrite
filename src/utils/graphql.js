// import  ApolloClient  from 'apollo-boost';
// // import { createUploadLink } from 'apollo-upload-client'
// // import { HttpLink } from 'apollo-link-http';
// // const link = new HttpLink({
// //     uri: "http://39.101.164.11:8080/graphql/",
// // })
// const apolloClient = new ApolloClient({
//  // 你需要在这里使用绝对路径
//     uri: "http://39.101.164.11:8080/graphql/",
// })
// export default apolloClient;


import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://39.101.164.11:8080/graphql/",
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: createUploadLink({
    uri: "http://39.101.164.11:8080/graphql/",
  }),
  cache,
})
export default apolloClient;