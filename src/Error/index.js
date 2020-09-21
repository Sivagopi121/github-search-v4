import React from 'react';
import styled from '@emotion/styled';

export const ErrorContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const ErrorMessage = ({ error }) => (
  <ErrorContainer>
    <small>{error.toString()}</small>
  </ErrorContainer>
);

export default ErrorMessage;
