import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/createStore";

import { vehiclesRequest } from "../../store/modules/vehicles/actions";
import { Container } from "./FilteredVehicles.styled";
import { FlexBox } from "../FlexBox/FlexBox.styled";

const FilteredVehicles: React.FC = () => {
  const dispatch = useDispatch();
  const VehiclesData = useSelector((state: StoreState) => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesRequest({ Page: 1 }));
  }, [dispatch]);

  return (
    <Container>
      <FlexBox direction="row" position="center">
        {VehiclesData.vehicles
          ? Object.entries(VehiclesData.vehicles).map((vehicle) => {
              return (
                <FlexBox key={vehicle[0]} direction="column" align="flex-start">
                  <img src={vehicle[1].Image} alt="car" />
                  <p className="name">
                    {vehicle[1].Make}, {vehicle[1].Model}
                  </p>
                  <p className="color">{vehicle[1].Color}</p>
                  <p className="version">{vehicle[1].Version}</p>
                  <p className="km">{vehicle[1].KM} KM</p>
                  <FlexBox direction="row">
                    <p className="fab">fabricação: {vehicle[1].YearFab}</p>
                    <p className="model">modelo: {vehicle[1].YearModel}</p>
                  </FlexBox>
                  <FlexBox direction="row">
                    <p className="price">R$: {vehicle[1].Price}</p>
                  </FlexBox>
                </FlexBox>
              );
            })
          : null}
      </FlexBox>
    </Container>
  );
};

export default FilteredVehicles;
