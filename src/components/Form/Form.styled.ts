import styled from 'styled-components';

export const FormComponent = styled.form`
  display: block;
  margin: auto;
  max-height: 312px;
  max-width: 933px;

  [direction="column"] > [direction="row"] {
    margin: 15px 0;

    select:not(:first-child), input {
      margin-left: 10px;
    }

    & > [direction="row"] label {
      width: 13vw;
    }
  }
`;
