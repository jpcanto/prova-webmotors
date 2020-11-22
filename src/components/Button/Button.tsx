import React, { useState } from "react";
import { toast } from "react-toastify";

import { ButtonComponent } from "./Button.styled";

interface IProps {
  bgcolor: string;
  border: string;
  color: string;
  fontSize: string;
  text: string;
  width?: string;
}

const Button: React.FC<IProps> = ({ bgcolor, border, color, fontSize, text, width }) => {
  const [clickEffect, setClickEffect] = useState<boolean>(false);
  const notify = () =>
    toast.warning(
      `⚠️ Esta funcionalidade estará disponível nas próximas atualizações,
      sabemos que você tem interesse,
      e assim que estiver disponível te avisaremos no email cadastrado!`,
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

  function handleClick(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    setClickEffect(true);
    setTimeout(() => {
      setClickEffect(false);
    }, 100);

    if (text === "Vender meu carro") notify();
  }

  return (
    <ButtonComponent
      className={clickEffect ? "effect" : ""}
      bgcolor={bgcolor}
      border={border}
      color={color}
      fontSize={fontSize}
      width={width}
      onClick={(ev) => handleClick(ev)}
    >
      {text}
    </ButtonComponent>
  );
};

export default Button;
