import styled, { css } from 'styled-components';

interface IContainerProps {
  error?: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  label {
    font-size: 14px;
    color: #999;
    padding-left: 2px;
  }

  input {
    border: none;
    outline: none;
    border: 1.4px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    color: #333;
    margin-top: 8px;
    margin-bottom: 4px;
  }

  span {
    padding-left: 2px;
    font-size: 12px;
    text-align: right;
    color: ${props => (props.error ? '#bd4e42' : 'transparent')};
  }
`;
