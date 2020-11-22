import React from "react";

import Input from "../Input";
import locationIcon from '../../../assets/img/location.png';
import { Combo } from "./LocationInput.styled";

const LocationInput: React.FC = () => {
  return (
    <Combo className="location">
      <img src={locationIcon}></img>
      <Input type="text" placeholder="Onde: São Paulo - SP"/>
      <Input type="number" min="0" max="300" placeholder="Raio: 100km" />
    </Combo>
  );
};

export default LocationInput;
