import styled from 'styled-components';

export const FormComponent = styled.form`
  background-color: #fff;

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

    }

    > [direction="row"] {

      margin: 15px 0;

      label:not(:first-of-type) {
        margin-left: 40px;
      }

      /* select:not(:first-child), input {
        margin-left: 10px;
      } */

      & > [direction="row"] label {
        width: 13vw;
      }
    }
  }
`;
