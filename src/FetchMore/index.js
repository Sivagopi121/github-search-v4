import React from 'react';

import styled from '@emotion/styled';
import Loading from '../Loading';
import { ButtonUnobtrusive } from '../Button';

export const FetchMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FetchMore = ({
  loading,
  hasNextPage,
  variables,
  updateQuery,
  fetchMore,
  children,
}) => (
  <FetchMoreContainer>
    {loading ? (
      <Loading />
    ) : (
      hasNextPage && (
        <ButtonUnobtrusive
          style={{
            margin: '20px 0',
          }}
          onClick={() => fetchMore({ variables, updateQuery })}
        >
          More
          {' '}
          {children}
        </ButtonUnobtrusive>
      )
    )}
  </FetchMoreContainer>
);

export default FetchMore;
