import styled from 'styled-components';

export const Header = styled.div`
  height: 14vh;
  padding-top: 5vh;

  [direction="column"] {
    height: 100%;

    img {
      width: 20%;
    }

    [direction="row"] {
      :first-of-type {
        margin-top: auto;
      }

      [direction="row"] {
        cursor: pointer;
        padding-bottom: 8px;
        width: 15%;

        &:not(:first-child) {
          margin-left: 20px;
        }

        p {
          color: #a8a8a8;
          font-family: Arial, Helvetica, sans-serif;

          margin: 0;

          :not(:last-of-type) {
            font-size: .7em;
          }

          :not(:first-of-type) {
            font-size: 1.2em;
          }
        }

      }

      button {
        height: 4vh;
        margin-left: auto;
        margin-bottom: 8px;
      }

    }
  }

`;
