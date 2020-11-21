import styled from 'styled-components';

interface IButton {
  bgcolor: string,
  border: string,
  color: string,
  fontSize: string
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
  width: -webkit-fill-available;
`;
