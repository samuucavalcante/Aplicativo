import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

const appearFromTop = keyframes`
from {
  opacity: 0;
  transform: translateX(100px)

} to {
  opacity: 1;
  transform: translateX(0px)

}
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 100px;
`;

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(100px) translateY(100px);
} to {
  opacity: 1;
  transform: translateX(0px)
  transform: translateX(0px) translateY(0px);
}
`;

export const Card = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  animation: ${appearFromLeft} 1s;

  form {
    width: 480px;
    text-align: center;
    background-color: #fffa;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px gray;

    button {
      border-radius: 10px;
      padding: 14px;
      width: 100%;
      margin-top: 16px;
      background-color: #166fe5;
      font-size: 20px;
      font-weight: 500;
      color: white;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#166fe5')};
      }
    }
    a {
      display: inline-block;
      margin: 20px 0;
      text-decoration: none;
      color: #1877f2;
      transition: text-decoration 0.2s;

      &:hover {
        text-decoration: underline;
      }
    }
    button[type='button'] {
      width: 50%;
      margin-top: 20px;
      padding: 16px;
      background-color: #36a420;
      color: white;
      font-weight: 500;
      font-size: 20px;
      border-radius: 10px;
      border: 0;
      transition: background-color 0.2s;
      &:hover {
        background-color: ${shade(0.2, '#36A420')};
      }
    }
  }
`;

export const Logo = styled.div`
  animation: ${appearFromTop} 1s;
  img {
    width: 80px;
  }
  p {
    font-size: 28px;
  }
`;
