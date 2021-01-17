import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  width: 800px;

  a {
    text-decoration: none;
    color: #333;
    margin-right: 32px;
  }

  > .selected {
    border-bottom: 1.4px solid #ccc;
  }
`;
