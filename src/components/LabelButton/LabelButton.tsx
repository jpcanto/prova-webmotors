import React from "react";
import { useToasts } from "react-toast-notifications";

import { Label } from "./LabelButton.styled";

interface IProps {
  color: string;
  fontSize: string;
  text: string;
  bold: boolean;
}

const LabelButton: React.FC<IProps> = ({ color, fontSize, text, bold }) => {
  const { addToast } = useToasts();

  function handleClick() {
    if (text === "Busca Avançada")
      addToast("Oops, essa funcionalidade ainda não foi implementada", {
        appearance: "error",
        autoDismiss: true
      });
  }

  return (
    <Label color={color} fontSize={fontSize} bold={bold} onClick={handleClick}>
      {text}
    </Label>
  );
};

export default LabelButton;
