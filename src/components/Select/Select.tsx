import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { StoreState } from "../../store/createStore";

import { Selection } from "./Select.styled";

interface ISelectProps {
  mode: string;
}

const Select: React.FC<ISelectProps> = ({ mode }) => {
  const dataMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  const dataModels = useSelector((state: StoreState) => state.vehiclesModels);
  const dataVersions = useSelector((state: StoreState) => state.vehiclesVersions);
  const data =
    mode === "maker"
      ? dataMakers.vehiclesMakers
      : mode === "model"
      ? dataModels.vehiclesModels
      : dataVersions.vehiclesVersions;

  return (
    <>
      {data ? (
        <Selection>
          {Object.entries(data).map((res) => (
            <option key={res[0]}>{res[1].Name}</option>
          ))}
        </Selection>
      ) : null}
    </>
  );
};

export default Select;
