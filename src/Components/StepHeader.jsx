import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { HeaderTextMap } from "../Utils/HeaderTextMap";

const StepHeader = () => {
  const context = useContext(AppContext);
  const { currentPage } = context;
  return (
    <div>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9">
        {HeaderTextMap(currentPage).text}
      </h2>
      <p className="text-gray-500 text-sm">
        {HeaderTextMap(currentPage).subText}
      </p>
    </div>
  );
};

export default StepHeader;
