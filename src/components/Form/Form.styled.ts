import styled from 'styled-components';

export const FormComponent = styled.form`
  background-color: #fff;
  max-height: 312px;

  @media(max-width: 760px) {
    max-height: 100%;
  }

  [direction="column"] {

    > [direction="column"] {

      > [direction="row"]:not(:last-of-type) > select:not(:first-child),
      > [direction="row"]:not(:last-of-type) > input:not(:first-child) {
        width: 27.5%;
        margin-left: 10px;
      }

      > [direction="row"]:not(:first-of-type) > select:not(:last-child),
      > [direction="row"]:not(:first-of-type) > input:not(:last-child) {
        width: 27.5%;
        margin-right: 10px;
      }

      @media(max-width: 760px) {
        > [direction="row"] > select, > [direction="row"] > input {
          width: 40vw !important;
          margin: 10px 10px 0 0 !important;
        }
      }

    }

    > [direction="row"] {

      margin: 15px 0;

      @media(max-width: 760px) {
        flex-wrap: wrap;
      }

      label:not(:first-of-type) {
        margin-left: 40px;
      }

      & > [direction="row"] {

        label {
          width: 13vw;
        }

        @media(max-width: 760px) {
          margin-top: 15px;

          label {
            width: 45vw !important;
          }

          button {
            font-size: .9em;
          }
        }
      }
    }
  }
`;
