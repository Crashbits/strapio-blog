/**@jsx jsx */
import Card from './Card';
import { jsx } from '@emotion/core'

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return(
    <div>
      <div>
        <div>
          {leftArticles.map((article, i) =>{
            return <Card article={article} key={`article__${article.id}`} />;
          })}
        </div>

        <div>
          <div>
            {rightArticles.map((article, i) => {
              return <Card article={article} key={`article__${article.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;