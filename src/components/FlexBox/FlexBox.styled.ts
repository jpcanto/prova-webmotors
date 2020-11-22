import styled from 'styled-components';

interface IFlex {
  active?: boolean;
  align?: string;
  direction: string;
  bgcolor?: string;
  position?: string;
  padding?: string;
}

export const FlexBox = styled.div<IFlex>`
  align-items: ${props => props.align ? props.align : 'center'};
  background-color: ${props => props.bgcolor};
  border-bottom: ${props => props.active ? '3px solid #ca2430' : null};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.position};
  padding: ${props => props.padding};
  width: -webkit-fill-available;
`;
