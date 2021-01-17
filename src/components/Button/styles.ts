import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  button {
    border: none;
    outline: none;
    background: none;
    background: #3973c0;
    color: #fafafa;
    padding: 8px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    min-width: 200px;
    cursor: pointer;

    margin-left: auto;
    margin-top: 24px;

    &:hover {
      background: #3265a9;
    }
  }
`;
