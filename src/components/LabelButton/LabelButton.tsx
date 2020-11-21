import React from "react";

import { Label } from "./LabelButton.styled";

interface IProps {
  color: string;
  fontSize: string;
  text: string;
  bold: boolean;
}

const LabelButton: React.FC<IProps> = ({ color, fontSize, text, bold }) => {
  return (
    <Label color={color} fontSize={fontSize} bold={bold}>
      {text}
    </Label>
  );
};

export default LabelButton;
