import React from "react";

import { FormComponent } from "./Form.styled";
import CheckBox from "../../components/CheckBox/CheckBox";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";

const Form: React.FC = () => {
  return (
    <FormComponent>
      <CheckBox label="Novos" />
      <CheckBox label="Usados" />

      <Select mode="maker" />
      <Select mode="model" />
      <Input type="number" min="2012" max="2018" placeholder="Ano Desejado" />
      <Input type="number" min="0" placeholder="Faixa de Preço" />
      <Select mode="version" />
    </FormComponent>
  );
};

export default Form;
