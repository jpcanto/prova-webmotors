import React from "react";

import { FormComponent } from "./Form.styled";
import { FlexBox } from "../FlexBox/FlexBox.styled";
import CheckBox from "../CheckBox/CheckBox";
import Select from "../Select/Select";
import Input from "../Input/Input";
import LocationInput from "../Input/LocationInput/LocationInput";
import LabelButton from "../LabelButton/LabelButton";
import Button from "../Button/Button";
import FormHeader from "./FormHeader/FormHeader";

const Form: React.FC = () => {
  return (
    <>
      <FormHeader></FormHeader>
      <FormComponent role="form">
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
            <LabelButton
              color="#89414b"
              fontSize=".9em"
              text="Busca Avançada"
              bold={true}
              error={true}
            />
            <FlexBox direction="row">
              <LabelButton
                color="#a8a8a8"
                fontSize=".9em"
                text="Limpar Filtros"
                bold={false}
                error={false}
              />
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
    </>
  );
};

export default Form;
