/**@jsx jsx */
import { useParams } from 'react-router';
import Query from '../components/Query';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { jsx } from '@emotion/core';

import ARTICLE_QUERY from '../queries/article/article';

const Article = () => {
  let { id } = useParams();

  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
          return (
            <div>
              <div 
                id="banner" 
              >
                <img src={process.env.REACT_APP_BACKEND_URL + article.image.url} alt=""/>
                <h1>
                  {article.title}
                </h1>
              </div>

              <div>
                <div>
                  <ReactMarkdown source={article.content} />
                  <p>
                    <Moment format="Do MMM YYYY">{article.published_at}</Moment>
                  </p>
                </div>
              </div>
            </div>
          );
        }}  
    </Query>
  );
};

export default Article;