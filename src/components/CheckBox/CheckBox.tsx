import React, { useState } from "react";

import { Checkbox } from "./CheckBox.styled";

interface IProps {
  label: string;
}

const CheckBox: React.FC<IProps> = ({ label }) => {
  return (
    <Checkbox>
      <input type="checkbox" />
      <span></span>
      {label}
    </Checkbox>
  );
};

export default CheckBox;
