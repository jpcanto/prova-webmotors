import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/createStore";
import { vehiclesMakersRequest } from "../../store/modules/vehiclesMakers/actions";
import { vehiclesModelsRequest } from "../../store/modules/vehiclesModels/actions";
import { vehiclesVersionsRequest } from "../../store/modules/vehiclesVersions/actions";
// import { vehiclesRequest } from "../../store/modules/vehicles/actions";

import PreLoader from "../PreLoader/PreLoader";

import { Selection } from "./Select.styled";

interface ISelectProps {
  mode: string;
}

const Select: React.FC<ISelectProps> = ({ mode }) => {
  const VMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  const VModels = useSelector((state: StoreState) => state.vehiclesModels);
  const VVersions = useSelector((state: StoreState) => state.vehiclesVersions);
  // const Vehicles = useSelector((state: StoreState) => state.vehicles);
  const dispatch = useDispatch();

  const data =
    mode === "maker"
      ? VMakers.vehiclesMakers
      : mode === "model"
      ? VModels.vehiclesModels
      : VVersions.vehiclesVersions;

  useEffect(() => {
    dispatch(vehiclesMakersRequest());
  }, [dispatch]);

  function handleFilter(ev: React.ChangeEvent<HTMLSelectElement>) {
    if (ev.target.value === "default") return;
    if (mode === "maker") {
      dispatch(vehiclesModelsRequest({ MakeID: Number(ev.target.value) }));
      return;
    }
    if (mode === "model") {
      dispatch(vehiclesVersionsRequest({ ModelID: Number(ev.target.value) }));
      return;
    }
  }

  return (
    <>
      {VMakers.loading || VModels.loading || VVersions.loading ? <PreLoader /> : null}
      {data ? (
        <Selection onChange={(ev) => handleFilter(ev)}>
          <option value="default">{mode !== "model" ? "Todas" : "Todos"}</option>)
          {Object.entries(data).map((res) => (
            <option key={res[0]} value={res[1].ID}>
              {res[1].Name}
            </option>
          ))}
        </Selection>
      ) : (
        <Selection onChange={(ev) => handleFilter(ev)}>
          <option value="default">{mode !== "model" ? "Todas" : "Todos"}</option>)
        </Selection>
      )}
    </>
  );
};

export default Select;
