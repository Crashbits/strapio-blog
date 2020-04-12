/**@jsx jsx */
import Articles from '../components/Articles';
import Query from '../components/Query';
import ARTICLES_QUERY from '../queries/article/articles';
import tw from 'twin.macro';
import { jsx } from '@emotion/core';

const Home = () => {
  return (
    <div>
      <section>
        <div>
          <h1>Humberto's Blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />
            }}
          </Query>
        </div>
      </section>
    </div>
  );
};

export default Home;