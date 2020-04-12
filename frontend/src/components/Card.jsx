/**@jsx jsx */
import { Link } from 'react-router-dom';
import tw from 'twin.macro'
import { jsx } from '@emotion/core'

const Card = ({ article }) => {
  return(
    <Link to={`/article/${article.id}`}  css={tw`no-underline`}>
      <div>
        
        <div>
          <img 
            src={process.env.REACT_APP_BACKEND_URL + article.image.url} 
            alt={article.image.url}
          />
        </div>

        <div>
          <p id="category">
            {article.category.name}
          </p>
          <h2 id="title">
            {article.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;