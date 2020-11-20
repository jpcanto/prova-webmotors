import React from "react";
import { LoaderBox, Loader, LoaderBar, LoaderText } from "./PreLoader.styled";

const components: React.FC = () => {
  return (
    <LoaderBox>
      <Loader>
        <LoaderBar />
        <LoaderText>Loading...</LoaderText>
      </Loader>
    </LoaderBox>
  );
};

export default components;
