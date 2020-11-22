import styled from 'styled-components';

export const Header = styled.div`
  height: 14vh;
  padding-top: 5vh;

  [direction="column"] {
    height: 100%;

    img {
      width: 20%;
    }

    > img {
      @media(max-width: 760px) {
        width: 40%;
      }
    }

    [direction="row"] {
      :first-of-type {
        margin-top: auto;

        @media(max-width: 760px) {
          flex-wrap: wrap;
        }
      }

      [direction="row"] {
        cursor: pointer;
        padding-bottom: 8px;
        width: 15%;

        @media(max-width: 760px) {
          height: 7vh;
          flex-wrap: nowrap;
          justify-content: center;
          padding: 0;
          width: 50vw;

          &:not(:first-child) {
            margin-left: 0 !important;
          }

          div {
            align-items: center;
            justify-content: center;
          }
        }

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

        @media(max-width: 760px) {
          font-size: .7em;

          height: 3vh;
          width: 50vw;
        }
      }

    }
  }

`;
