import  ApolloClient  from 'apollo-boost';
import { createUploadLink } from 'apollo-upload-client'
import { HttpLink } from 'apollo-link-http';
const link = new HttpLink({
    uri: "http://39.101.164.11:8080/graphql/",
})
const apolloClient = new ApolloClient({
 // 你需要在这里使用绝对路径
    uri: "http://39.101.164.11:8080/graphql/",
})
export default apolloClient;