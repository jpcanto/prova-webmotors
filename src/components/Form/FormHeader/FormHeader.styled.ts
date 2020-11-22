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
        padding-bottom: 8px;
      }

      [direction="row"] {
        cursor: pointer;
        width: 15%;

        p {
          color: #a8a8a8;

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
      }

    }
  }

`;
