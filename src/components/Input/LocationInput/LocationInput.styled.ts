import styled from 'styled-components';

export const Combo = styled.div`
  color: #666;

  align-items: center;
  border: 1px solid #a8a8a8;
  border-radius: 3px;
  display: flex;
  padding-left: 8px;
  width: -webkit-fill-available;

  img {
    height: 15px;
    width: 15px;
  }

  input {
    border: 0;

    &:focus {
      outline: 0;
    }

    &:last-of-type {
      border-left: 1px solid #a8a8a8;
      border-radius: 0;
      margin-left: auto;
      width: 30%;
    }
  }
`;
