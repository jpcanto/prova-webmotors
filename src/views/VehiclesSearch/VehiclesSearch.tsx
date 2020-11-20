import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/createStore";
import { vehiclesMakersRequest } from "../../store/modules/vehiclesMakers/actions";

const VehiclesSearch: React.FC = () => {
  const { loading } = useSelector((state: StoreState) => state.vehiclesMakers);
  const dispatch = useDispatch();

  console.log('Dispatching an vehicle maker: ', loading)

  return (
    <button onClick={() => dispatch(vehiclesMakersRequest({ ID: 1, Name: "John" }))}>
      Me clique
    </button>
  );
};

export default VehiclesSearch;
