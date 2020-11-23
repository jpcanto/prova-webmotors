import React from "react";

import Form from "../../components/Form/Form";
import FilteredVehicles from "../../components/FilteredVehicles/FilteredVehicles";
import { Container } from "./VehiclesSearch.styled";

const VehiclesSearch: React.FC = () => {

  return (
    <Container>
      <Form />
      <FilteredVehicles />
    </Container>
  );
};

export default VehiclesSearch;
