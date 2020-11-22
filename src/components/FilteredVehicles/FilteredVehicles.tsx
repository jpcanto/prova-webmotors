import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/createStore";

import { vehiclesRequest } from "../../store/modules/vehicles/actions";
import { Container, ContainerImage } from "./FilteredVehicles.styled";
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
                  <ContainerImage image={vehicle[1].Image}></ContainerImage>
                  <p>
                    {vehicle[1].Make}, {vehicle[1].Model} <span> {vehicle[1].KM} KM</span>
                  </p>
                  <p>{vehicle[1].Color}</p>
                  <p>{vehicle[1].Version}</p>
                  <FlexBox direction="row">
                    <p>fabricação: {vehicle[1].YearFab}</p>
                    <p>modelo: {vehicle[1].YearModel}</p>
                  </FlexBox>
                  <FlexBox direction="row">
                    <p>
                      {parseInt(vehicle[1].Price) < 40000
                        ? "⭐"
                        : parseInt(vehicle[1].Price) < 70000
                        ? "⭐⭐"
                        : "⭐⭐⭐"}
                    </p>
                    <p>R$: {vehicle[1].Price}</p>
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
