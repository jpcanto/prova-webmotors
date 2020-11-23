import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/createStore";

import { vehiclesRequest } from "../../store/modules/vehicles/actions";
import { Container, ContainerImage } from "./FilteredVehicles.styled";
import { FlexBox } from "../FlexBox/FlexBox.styled";
import PreLoader from "../PreLoader/PreLoader";

const FilteredVehicles: React.FC = () => {
  const dispatch = useDispatch();
  const VehiclesData = useSelector((state: StoreState) => state.vehicles);
  const [page, setPage] = useState<number>(1);
  const [filtered, setFiltered] = useState<any>();
  const Filters = useSelector((state: StoreState) => state.filters);

  useEffect(() => {
    dispatch(vehiclesRequest({ Page: page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (VehiclesData.vehicles) setFiltered(VehiclesData.vehicles);
  }, [VehiclesData]);

  useEffect(() => {
    handleFilters();
  }, [Filters]);

  function handleFilters() {
    if (VehiclesData.vehicles) {
      if (!Filters.make && !Filters.model && !Filters.version)
        return setFiltered(VehiclesData.vehicles);
      if (Filters.make)
        setFiltered(VehiclesData.vehicles.filter((vehicle: any) => vehicle.Make === Filters.make));

      if (Filters.model)
        setFiltered(
          VehiclesData.vehicles.filter((vehicle: any) => vehicle.Model === Filters.model)
        );

      if (Filters.version)
        setFiltered(
          VehiclesData.vehicles.filter((vehicle: any) => vehicle.Version === Filters.version)
        );
    }
  }

  return (
    <Container>
      {VehiclesData.loading ? <PreLoader /> : null}
      <FlexBox direction="row" position="center">
        {filtered
          ? filtered.map((vehicle: any, index: number) => {
              return (
                <FlexBox key={index} direction="column" align="flex-start">
                  <ContainerImage image={vehicle.Image}></ContainerImage>
                  <p>
                    {vehicle.Make}, {vehicle.Model} <span> {vehicle.KM} KM</span>
                  </p>
                  <p>{vehicle.Color}</p>
                  <p>{vehicle.Version}</p>
                  <FlexBox direction="row">
                    <p>fabricação: {vehicle.YearFab}</p>
                    <p>modelo: {vehicle.YearModel}</p>
                  </FlexBox>
                  <FlexBox direction="row">
                    <p>
                      {parseInt(vehicle.Price) < 40000
                        ? "⭐"
                        : parseInt(vehicle.Price) < 70000
                        ? "⭐⭐"
                        : "⭐⭐⭐"}
                    </p>
                    <p>R$: {vehicle.Price}</p>
                  </FlexBox>
                </FlexBox>
              );
            })
          : null}
      </FlexBox>
      <FlexBox direction="row" align="center" position="space-evenly">
        {[1, 2, 3].map((number) => (
          <div onClick={() => setPage(number)} key={number}>
            {number}
          </div>
        ))}
      </FlexBox>
    </Container>
  );
};

export default FilteredVehicles;
