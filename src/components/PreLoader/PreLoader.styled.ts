import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const LoaderBox = styled.div`
  cursor: wait;
  align-items: center;
  background: #8c8c8c94;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
`;

export const Loader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoaderBar = styled.div`
  animation: ${spin} 1.5s ease infinite;
  border: 2px solid transparent;
  border-radius: 50%;
  border-top-color: #e73939;
  display: block;
  height: 100px;
  width: 100px;

  &:before, &:after {
    content: "";
    border: 2px solid transparent;
    border-radius: 50%;
    position: absolute;
  }

  &:before {
    animation: ${spin} 3s linear infinite;
    border-top-color: #d43131;
    bottom: 7px;
    left: 7px;
    right: 7px;
    top: 7px;
  }

  &:after {
    animation: ${spin} 1.5s ease infinite;
    border-top-color: #bb2c2c;
    bottom: 15px;
    left: 15px;
    right: 15px;
    top: 15px;
  }
`;

export const LoaderText = styled.div`
  color: #2d2d2d;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;

  position: relative;
  top: 75px;
`;
