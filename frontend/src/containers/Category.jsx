/**@jsx jsx */
import { useParams } from 'react-router';
import Articles from '../components/Articles';
import Query from '../components/Query';
import CATEGORY_ARTICLES_QUERY from '../queries/category/articles';
import { jsx } from "@emotion/core"

const Category = () => {
  let { id } = useParams();
  
  return (
    <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
      {({ data: { category } }) => {
        return (
          <div>
            <div>
              <div>
                <h1>{category.name}</h1>
                <Articles articles={category.articles} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;