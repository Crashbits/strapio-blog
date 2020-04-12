/** @jsx jsx */
import Query from "./Query";
import { Link } from "react-router-dom";
import { jsx } from '@emotion/core';
import tw from 'twin.macro'

import CATEGORIES_QUERY from "../queries/category/categories";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div css={tw`w-screen fixed top-0`}>
              <nav css={tw`flex flex-row bg-black py-4 content-center`}>
                <div css={tw`flex self-start`}>
                  <ul css={tw`flex self-center`}>
                    <li>
                      <Link 
                        to="/"
                        css={tw`text-white px-4`}
                      >Humberto's Blog</Link>
                    </li>
                  </ul>
                </div>

                <div css={tw`flex right-0 absolute`}>
                  <ul css={tw`flex mr-0 justify-end`}>
                    {categories.map((category, i) => {
                      return (
                        <li key={category.id}>
                          <Link
                            to={`/category/${category.id}`}
                            css={tw`no-underline list-none px-4 text-white`}
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;  