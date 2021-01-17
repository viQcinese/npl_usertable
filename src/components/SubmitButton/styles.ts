import styled, { css } from 'styled-components';

interface IContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;

  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;
    background: none;
    background: rgb(57, 115, 192);
    color: #fafafa;
    padding: 8px;
    border-radius: 4px;
    width: 50%;
    height: 40px;
    cursor: pointer;

    margin-left: auto;
    margin-top: 24px;

    &:hover {
      background: rgb(50, 101, 169);
    }

    ${props =>
      props.isLoading &&
      css`
        background: rgba(50, 101, 169, 0.6);
        cursor: default;
        &:hover {
          background: rgba(50, 101, 169, 0.6);
        }
      `}

    img {
      height: 24px;
      width: 24px;
      position: absolute;
      left: 32px;
    }

    span {
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
`;
