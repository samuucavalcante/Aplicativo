import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  border-radius: 10px;
  flex: 1;
  width: 100%;
  padding: 15px;
  background-color: #fffa;
  border: solid 2px #8d847f;
  color: #8d847f;
  & + div {
    margin-top: 16px;
  }
  &::placeholder {
    color: gray;
  }
  ${(props) =>
    props.isFocus &&
    css`
      border: solid 3px #166fe5;
      padding: 14px;
      color: #166fe5;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #166fe5;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 18px;
  }

  svg {
    margin-right: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 21px;
  margin: 0;

  span {
    color: #fff;
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }

  svg {
    margin-right: 0;
  }
`;
