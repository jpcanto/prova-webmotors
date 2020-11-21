import React from "react";

import { InputComponent } from "./Input.styled";

interface IProps {
  type: string;
  min?: string;
  max?: string;
  placeholder?: string;
}

const Input: React.FC<IProps> = ({ type, min, max, placeholder }) => {
  return <InputComponent type={type} min={min} max={max} placeholder={placeholder} />;
};

export default Input;
