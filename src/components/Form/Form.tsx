import React from "react";

import { FormComponent } from "./Form.styled";
import { FlexBox } from "../../components/FlexBox/FlexBox.styled";
import CheckBox from "../../components/CheckBox/CheckBox";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import LocationInput from "../../components/Input/LocationInput/LocationInput";
import LabelButton from "../../components/LabelButton/LabelButton";
import Button from "../../components/Button/Button";

const Form: React.FC = () => {
  return (
    <FormComponent>
      <FlexBox direction="column" padding="2vh 5vw">
        <FlexBox direction="row">
          <CheckBox label="Novos" />
          <CheckBox label="Usados" />
        </FlexBox>
        <FlexBox direction="column">
          <FlexBox direction="row">
            <LocationInput />
            <Select mode="maker" />
            <Select mode="model" />
          </FlexBox>
          <FlexBox direction="row">
            <Input type="number" min="2012" max="2018" placeholder="Ano Desejado" />
            <Input type="number" min="37000" max="78000" placeholder="Faixa de Preço" />
            <Select mode="version" />
          </FlexBox>
        </FlexBox>
        <FlexBox direction="row">
          <LabelButton color="#89414b" fontSize=".9em" text="Busca Avançada" bold={true} />
          <FlexBox direction="row">
            <LabelButton color="#a8a8a8" fontSize=".9em" text="Limpar Filtros" bold={false} />
            <Button
              bgcolor="#ca2430"
              border="none"
              color="#fff"
              fontSize="1.2em"
              text="VER OFERTAS"
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FormComponent>
  );
};

export default Form;
