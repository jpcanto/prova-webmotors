import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StoreState } from "../../store/createStore";
import { vehiclesMakersRequest } from "../../store/modules/vehiclesMakers/actions";
import { vehiclesModelsRequest } from "../../store/modules/vehiclesModels/actions";

import PreLoader from "../../components/PreLoader/PreLoader";
import Select from "../../components/Select/Select";

const VehiclesSearch: React.FC = () => {
  const VMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  const VModels = useSelector((state: StoreState) => state.vehiclesModels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vehiclesMakersRequest());
    dispatch(vehiclesModelsRequest({ MakeID: 1 }));
  }, [dispatch]);

  return (
    <>
      {VMakers.loading || VModels.loading ? <PreLoader /> : null}
      {VModels.vehiclesModels ? <Select mode="maker" /> : null}
    </>
  );
};

export default VehiclesSearch;
