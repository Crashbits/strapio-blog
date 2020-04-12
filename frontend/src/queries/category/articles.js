import gql from 'graphql-tag';

const CATEGORY_ARTICLES_QUERY = gql`
  query Categories($id : ID!){
    category(id: $id) {
      name
      articles{
        id
        title
        content
        image{
          url
        }
        category{
          id
          name
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;