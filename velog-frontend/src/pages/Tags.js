// @flow
import React, { Fragment } from 'react';
import TagsTemplate from 'components/tags/TagsTemplate';
import TagsTab from 'components/tags/TagsTab/TagsTab';
import { type ContextRouter } from 'react-router-dom';
import queryString from 'query-string';
import TagItemListContainer from 'containers/tags/TagItemListContainer';
import TagCurrentContainer from 'containers/tags/TagCurrentContainer';

type Props = {} & ContextRouter;

const Tags = ({ location, match }: Props) => {
  const { sort } = queryString.parse(location.search);
  const { tag } = match.params;

  return (
    <TagsTemplate>
      {tag ? (
        <TagCurrentContainer tag={tag} />
      ) : (
        <Fragment>
          <TagsTab sort={sort} />
          <TagItemListContainer sort={sort} />
        </Fragment>
      )}
    </TagsTemplate>
  );
};

export default Tags;
