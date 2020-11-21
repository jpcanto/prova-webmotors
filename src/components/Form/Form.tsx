import React from "react";

import { FormComponent } from "./Form.styled";
import CheckBox from "../../components/CheckBox/CheckBox";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import LabelButton from "../../components/LabelButton/LabelButton";
import Button from "../../components/Button/Button";

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
      <LabelButton color="#89414b" fontSize=".9em" text="Busca Avançada" bold={true} />
      <LabelButton color="#a8a8a8" fontSize=".9em" text="Limpar Filtros" bold={false} />
      <Button bgcolor="#ca2430" border="none" color="#fff" fontSize="1.2em" text="VER OFERTAS" />
    </FormComponent>
  );
};

export default Form;
