import { useState } from "react";
import Enfant from "./Enfant";

function Parent({ dataStart, dataSetEnd }) {
  return (
    <div className="parent">
      <h1>Parent</h1>

      <Enfant dataStart={dataStart} dataSetEnd={dataSetEnd} />
    </div>
  );
}

export default Parent;
