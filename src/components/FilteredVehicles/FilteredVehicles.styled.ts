import styled from 'styled-components';

interface IContainer {
  image: string;
}

export const Container = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-top: 40px;
  width: -webkit-fill-available;

    > [direction="row"] {
      flex-wrap: wrap;
      width: -webkit-fill-available;

      [direction="column"] {
        color: #777;
        font-family: Arial, Helvetica, sans-serif;
        font-size: .7em;

        border-radius: 3px;
        box-shadow: 0px 0px 4px 1px #a8a8a8;
        height: 30vh;
        margin: 20px 10px;
        width: 20%;

        p {
          margin: 5px 0;
          padding: 2px 10px;
        }

        [direction="row"] {
          :last-of-type {
            border-top: 2px solid #a8a8a84a;
            margin-top: auto;

            p {
              width: -webkit-fill-available;
            }
          }
        }
      }
    }
`;

export const ContainerImage = styled.div<IContainer>`
  background: ${props => `url(${props.image})`} no-repeat center;
  background-size: cover;
  border-bottom: 1px solid #a8a8a84a;
  height: 100px;
  width: -webkit-fill-available;
`;
