import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import VehiclesSearch from "./views/VehiclesSearch/VehiclesSearch";

function App() {
  return (
    <Provider store={store}>
      <VehiclesSearch />
    </Provider>
  );
}

export default App;
