import { request, gql } from 'graphql-request'

const GRAPHQL_API = process.env.GRAPHQL_API || "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clg9chi7r27uk01uibzsh2jq5/master"

export async function getPosts(){
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              categories {
                id
                name
                createdAt
                slug
              }
              excerpt
              featuredImage {
                url
              }
            }
          }
        }
      }
      
    `; 
    const result = request(GRAPHQL_API, query).then((data) => data)
    return result; 
}

export const getRecentPosts = async() => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(GRAPHQL_API, query);
  return result;
}