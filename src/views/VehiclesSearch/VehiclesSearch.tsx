import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StoreState } from "../../store/createStore";
import { vehiclesMakersRequest } from "../../store/modules/vehiclesMakers/actions";

import PreLoader from "../../components/PreLoader";

const VehiclesSearch: React.FC = () => {
  const vehiclesMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  const dispatch = useDispatch();

  console.log("Dispatching an vehicle maker: ", vehiclesMakers);

  return (
    <>
      <button onClick={() => dispatch(vehiclesMakersRequest())}>Me clique</button>
      {vehiclesMakers.loading ? <PreLoader /> : null}
    </>
  );
};

export default VehiclesSearch;
