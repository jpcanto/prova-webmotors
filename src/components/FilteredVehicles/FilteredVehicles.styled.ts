import styled from 'styled-components';

interface IContainer {
  image: string;
}

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  background-color: #fff;
  cursor: pointer;
  margin-top: 40px;
  width: -webkit-fill-available;

    > [direction="row"] {
      flex-wrap: wrap;
      width: -webkit-fill-available;

      [direction="column"] {
        color: #777;
        font-size: .7em;

        border-radius: 3px;
        box-shadow: 0px 0px 4px 1px #a8a8a8;
        height: 30vh;
        margin: 20px 10px;
        width: 20%;

        @media(max-width: 760px) {
          height: 40vh;
          width: 40%;
        }

        @media(max-width: 350px) {
          height: 50vh;
          width: 70%;
        }

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

      &:last-of-type {
        height: 3vh;
        margin: auto;
        width: 15vw;

        @media(max-width: 760px) {
          height: 5vh;
          width: 25vw;
        }

        div {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          width: 20%;

          &:hover {
            color: #ca2430;
            font-weight: bold;

            filter: brightness(200%);
            transition: .2s ease-in;
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
