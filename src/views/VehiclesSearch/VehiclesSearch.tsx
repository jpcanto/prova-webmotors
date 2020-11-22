import React from "react";
// import { useSelector } from "react-redux";

// import { StoreState } from "../../store/createStore";

import Form from "../../components/Form/Form";
import FilteredVehicles from "../../components/FilteredVehicles/FilteredVehicles";
import { Container } from "./VehiclesSearch.styled";

const VehiclesSearch: React.FC = () => {
  // const VMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  // const VModels = useSelector((state: StoreState) => state.vehiclesModels);
  // const VVersions = useSelector((state: StoreState) => state.vehiclesVersions);
  // const Vehicles = useSelector((state: StoreState) => state.vehicles);

  return (
    <Container>
      <Form />
      <FilteredVehicles />
    </Container>
  );
};

export default VehiclesSearch;
