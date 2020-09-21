import styled from '@emotion/styled';

export const AppContainer = styled.div`
min-height: 100%;
display: flex;
flex-direction: column;
`;

export const Appmain = styled.div`
flex: 1;
`;

export const AppContentLargeHeader = styled.div`
margin-top: 54px;
@media (max-width: 480px) {
    margin-top: 123px;
  }
`;

export const AppContentSmallHeader = styled.div`
margin-top: 54px;
@media (max-width: 480px) {
    margin-top: 68px;
  }
`;
