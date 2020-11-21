import React from "react";

import { Checkbox } from "./CheckBox.styled";
import Input from '../Input/Input';

interface IProps {
  label: string;
}

const CheckBox: React.FC<IProps> = ({ label }) => {
  return (
    <Checkbox>
      <Input type="checkbox" />
      <span></span>
      {label}
    </Checkbox>
  );
};

export default CheckBox;
