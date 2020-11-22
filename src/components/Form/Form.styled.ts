import styled from 'styled-components';

export const FormComponent = styled.form`
  background-color: #fff;
  display: block;
  margin: auto;
  max-height: 312px;
  max-width: 933px;

  [direction="column"] {

    > [direction="column"] {

      > [direction="row"]:not(:last-of-type) > *:not(:first-child) {
        width: 27.5%;
        margin-left: 10px;
      }

      > [direction="row"]:not(:first-of-type) *:not(:last-child) {
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
