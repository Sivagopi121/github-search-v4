import styled from '@emotion/styled';

export const NavButtonsContainer = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    background-color: #1a62ab;
    display: flex;
    align-items: baseline;

    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
`;

export const NavigationLink = styled.div`
    font-size: 12px;
    letter-spacing: 3.5px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 20px;
    text-decoration: none;
    a {
        color: #ffffff;
    }
    @media (max-width: 480px) {
        padding: 10px;
    }
`;

export const NavigationSearch = styled.div`
padding: 0 10px;
@media (max-width: 480px) {
    padding: 10px 10px;
`;
