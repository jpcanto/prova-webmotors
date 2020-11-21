import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StoreState } from "../../store/createStore";
import { vehiclesMakersRequest } from "../../store/modules/vehiclesMakers/actions";
import { vehiclesModelsRequest } from "../../store/modules/vehiclesModels/actions";
import { vehiclesVersionsRequest } from "../../store/modules/vehiclesVersions/actions";

import PreLoader from "../../components/PreLoader/PreLoader";
import Select from "../../components/Select/Select";

const VehiclesSearch: React.FC = () => {
  const VMakers = useSelector((state: StoreState) => state.vehiclesMakers);
  const VModels = useSelector((state: StoreState) => state.vehiclesModels);
  const VVersions = useSelector((state: StoreState) => state.vehiclesVersions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vehiclesMakersRequest());
    dispatch(vehiclesModelsRequest({ MakeID: 1 }));
    dispatch(vehiclesVersionsRequest({ ModelID: 1 }));
  }, [dispatch]);

  return (
    <>
      {VMakers.loading || VModels.loading ? <PreLoader /> : null}
      {VMakers.vehiclesMakers ? <Select mode="maker" /> : null}
      {VModels.vehiclesModels ? <Select mode="models" /> : null}
      {VVersions.vehiclesVersions ? <Select mode="versions" /> : null}
    </>
  );
};

export default VehiclesSearch;
