import React, { useState } from "react";

import { Header } from "./FormHeader.styled";
import { FlexBox } from "../../FlexBox/FlexBox.styled";

import Button from "../../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../../../assets/img/logo.png";
import Car from "../../../assets/img/car.png";
import Bike from "../../../assets/img/bike.png";

const FormHeader: React.FC = () => {
  const [active, setActive] = useState<string>("car");
  const errorNotify = () =>
    toast.error(
      "⚠️ Oops, essa funcionalidade ainda não foi implementada... Atualmente só temos filtros para carros",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  function handleClick(type: string) {
    setActive(type);
    errorNotify();
  }

  return (
    <Header>
      <FlexBox direction="column" align="flex-start" position="space-around">
        <img src={Logo} />
        <FlexBox direction="row">
          <FlexBox
            direction="row"
            active={active === "car" ? true : false}
            onClick={() => handleClick("car")}
          >
            <img src={Car} />
            <FlexBox direction="column">
              <p>COMPRAR</p>
              <p>CARROS</p>
            </FlexBox>
          </FlexBox>
          <FlexBox
            direction="row"
            active={active === "bike" ? true : false}
            onClick={() => handleClick("bike")}
          >
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
