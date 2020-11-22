import React from "react";
// import { useSelector } from "react-redux";

// import { StoreState } from "../../store/createStore";

import Form from "../../components/Form/Form";
import { Container } from "./VehiclesSearch.styled";

const VehiclesSearch: React.FC = () => {
  // const VMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  // const VModels = useSelector((state: StoreState) => state.vehiclesModels);
  // const VVersions = useSelector((state: StoreState) => state.vehiclesVersions);
  // const Vehicles = useSelector((state: StoreState) => state.vehicles);

  return (
    <Container>
      <Form />
    </Container>
  );
};

export default VehiclesSearch;
