import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/createStore";
import { vehiclesMakersRequest } from "../../store/modules/vehiclesMakers/actions";
import { vehiclesModelsRequest } from "../../store/modules/vehiclesModels/actions";
import { vehiclesVersionsRequest } from "../../store/modules/vehiclesVersions/actions";
import {
  setMakeFilter,
  setModelFilter,
  setVersionFilter,
} from "../../store/modules/filters/actions";

import PreLoader from "../PreLoader/PreLoader";

import { Selection } from "./Select.styled";

interface ISelectProps {
  mode: string;
}

const Select: React.FC<ISelectProps> = ({ mode }) => {
  const VMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  const VModels = useSelector((state: StoreState) => state.vehiclesModels);
  const VVersions = useSelector((state: StoreState) => state.vehiclesVersions);
  const dispatch = useDispatch();

  let data: Object | null = {};

  if (mode === "maker") data = VMakers.vehiclesMakers;
  else if (mode === "model") data = VModels.vehiclesModels;
  else data = VVersions.vehiclesVersions;

  useEffect(() => {
    dispatch(vehiclesMakersRequest());
  }, [dispatch]);

  function handleFilter(ev: React.ChangeEvent<HTMLSelectElement>) {
    if (ev.target.value === "default") return;
    if (mode === "maker") {
      dispatch(vehiclesModelsRequest({ MakeID: Number(ev.target.value) }));
      dispatch(setMakeFilter({ make: ev.target.options[ev.target.selectedIndex].text }));
      return;
    }
    if (mode === "model") {
      dispatch(vehiclesVersionsRequest({ ModelID: Number(ev.target.value) }));
      dispatch(setModelFilter({ model: ev.target.options[ev.target.selectedIndex].text }));
      return;
    }
    if (mode === "version")
      return dispatch(
        setVersionFilter({ version: ev.target.options[ev.target.selectedIndex].text })
      );
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
