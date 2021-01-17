import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;

  a {
    text-decoration: none;
    color: #333;
    margin-right: 32px;

    &:hover {
      border-bottom: 1.4px solid #ddd;
    }
  }

  > .selected {
    border-bottom: 1.4px solid #ccc;
  }
`;
