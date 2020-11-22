import styled from 'styled-components';

interface IButton {
  bgcolor: string;
  border: string;
  color: string;
  fontSize: string;
  width?: string;
}

export const ButtonComponent = styled.button<IButton>`
  color: ${props => props.color};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.fontSize};
  font-weight: bold;

  border: ${props => props.border};
  border-radius: 3px;
  background-color: ${props => props.bgcolor};
  cursor: pointer;
  height: 5vh;
  width: ${props => props.width ? props.width : '-webkit-fill-available'};

  &:hover {
    filter: brightness(110%);
    transition: .3s ease-in;
  }

  &:focus {
    outline: 0;
  }

  &.effect {
    opacity: .5;
    transition: .1s ease-in;
  }
`;
