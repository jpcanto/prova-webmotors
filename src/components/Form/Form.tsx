import React from "react";

import { FormComponent } from "./Form.styled";
import CheckBox from "../../components/CheckBox/CheckBox";
import Select from "../../components/Select/Select";

const Form: React.FC = () => {
  return (
    <FormComponent>
      <CheckBox label="Novos" />
      <CheckBox label="Usados" />
      <Select mode="maker" />
      <Select mode="model" />
      <Select mode="version" />
    </FormComponent>
  );
};

export default Form;
