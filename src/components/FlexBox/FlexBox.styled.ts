import styled from 'styled-components';

interface IFlex {
  direction: string;
  bgcolor?: string;
  position?: string;
  padding?: string;
}

export const FlexBox = styled.div<IFlex>`
  align-items: center;
  background-color: ${props => props.bgcolor};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.position};
  padding: ${props => props.padding};
  width: -webkit-fill-available;
`;
