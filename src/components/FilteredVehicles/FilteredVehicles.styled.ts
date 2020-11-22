import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
    margin-top: 40px;
    width: -webkit-fill-available;

    > [direction="row"] {
      flex-wrap: wrap;
      width: -webkit-fill-available;

      [direction="column"] {
        color: #777;
        font-family: Arial, Helvetica, sans-serif;
        font-size: .8em;

        border: 1px solid #a8a8a84a;
        border-radius: 3px;
        margin: 20px 10px;
        width: 20%;

        img {
          border-bottom: 1px solid #a8a8a84a;
          height: 100px;
          width: -webkit-fill-available;
        }

        p {
          padding: 5px 10px;
          margin: 3px 0;
        }

        [direction="row"] {
          :last-of-type {
            border-top: 2px solid #a8a8a84a;
          }
        }
      }
    }
`;
