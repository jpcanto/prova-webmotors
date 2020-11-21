import React from "react";

import { ButtonComponent } from "./Button.styled";

interface IProps {
  bgcolor: string;
  border: string;
  color: string;
  fontSize: string;
  text: string;
}

const Button: React.FC<IProps> = ({ bgcolor, border, color, fontSize, text }) => {
  return (
    <ButtonComponent
      bgcolor={bgcolor}
      border={border}
      color={color}
      fontSize={fontSize}
      onClick={(ev) => ev.preventDefault()}
    >
      {text}
    </ButtonComponent>
  );
};

export default Button;
