import gql from 'graphql-tag'
import apolloClient from '../utils/graphql'

// export function createCheck() {
    
// }
export function getProducts() {
    return apolloClient.query({
        query : gql`query {
            products {
              id
              name
            }
       }
       `
    })
}

export function getJsonResults(params) {
    return apolloClient.query({
        query: gql`query($token: String!) {
            jsonResult(token: $token)
        }`,
        variables: params,
        fetchPolicy:"no-cache",
    })
}

export function createOrder(params) {
    return apolloClient.mutate({
        mutation: gql`mutation ($product: Int!, $uploadFile: Upload, $drawValue: String, $inputValue: String, $attr: [String]) {
            CheckoutCreate(checkout:{
                product: $product
                uploadFile: $uploadFile
                drawValue: $drawValue
                inputValue: $inputValue
                attr: $attr
            }) {
                ok
                token
            }
        }`,
        variables: params
    })
}