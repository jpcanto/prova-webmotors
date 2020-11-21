import React from "react";
import { useSelector } from "react-redux";

import { StoreState } from "../../store/createStore";

import { Selection } from "./Select.styled";

interface ISelectProps {
  mode: string;
}

const Select: React.FC<ISelectProps> = ({ mode }) => {
  const dataMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  const dataModels = useSelector((state: StoreState) => state.vehiclesModels);
  const data = mode === "maker" ? dataMakers.vehiclesMakers : dataModels.vehiclesModels;
  return (
    <>
      {data ? (
        <Selection>
          {Object.entries(data).map((Maker) => (
            <option key={Maker[0]}>{Maker[1].Name}</option>
          ))}
        </Selection>
      ) : null}
    </>
  );
};

export default Select;
