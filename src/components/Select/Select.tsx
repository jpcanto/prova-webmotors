import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/createStore";

interface ISelectProps {
  mode: String;
}

const Select: React.FC<ISelectProps> = ({ mode }) => {
  const dataMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  const dataModels = useSelector((state: StoreState) => state.vehiclesModels);
  const data = mode === "maker" ? dataMakers.vehiclesMakers : dataModels.vehiclesModels;
  return (
    <>
      {data ? (
        <select>
          <option>
            {mode === "maker" ? "Marca: Todas:" : mode === "model" ? "Modelo: Todos:" : null}
          </option>
          {Object.entries(data).map((Maker) => (
            <option key={Maker[0]}>{Maker[1].Name}</option>
          ))}
        </select>
      ) : null}
    </>
  );
};

export default Select;
