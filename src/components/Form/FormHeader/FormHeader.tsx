import React from "react";

import { Header } from "./FormHeader.styled";
import { FlexBox } from "../../FlexBox/FlexBox.styled";

import Button from "../../Button/Button";

import Logo from "../../../assets/img/logo.png";
import Car from "../../../assets/img/car.png";
import Bike from "../../../assets/img/bike.png";

const FormHeader: React.FC = () => {
  return (
    <Header>
      <FlexBox direction="column" align="flex-start" position="space-around">
        <img src={Logo} />
        <FlexBox direction="row">
          <FlexBox direction="row">
            <img src={Car} />
            <FlexBox direction="column">
              <p>COMPRAR</p>
              <p>CARROS</p>
            </FlexBox>
          </FlexBox>
          <FlexBox direction="row">
            <img src={Bike} />
            <FlexBox direction="column">
              <p>COMPRAR</p>
              <p>MOTOS</p>
            </FlexBox>
          </FlexBox>
          <Button
            bgcolor="transparent"
            border="2px solid #d5a15f"
            color="#d5a15f"
            fontSize=".9em"
            text="Vender meu carro"
            width="25%"
          />
        </FlexBox>
      </FlexBox>
    </Header>
  );
};

export default FormHeader;
