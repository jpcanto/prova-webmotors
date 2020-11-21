import styled from 'styled-components';

interface ILabel {
  color: string
  fontSize: string
  bold: boolean
}

export const Label = styled.label<ILabel>`
  color: ${props => props.color};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.bold ? '700' : '400'};
`;
