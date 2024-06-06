import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const StepButtons = () => {
  const context = useContext(AppContext);
  const { currentPage, setCurrentPage, handleValidation } = context;

  const handleNext = () => {
    if (currentPage !== 1) {
      setCurrentPage(true);
      return;
    }

    const isValid = handleValidation();
    if (isValid) {
      setCurrentPage(true);
    }
  };

  return (
    <div>
      <div
        className={`flex flex-row mt-4 ${
          currentPage === 1 ? "justify-end" : "justify-between"
        }`}
      >
        {currentPage !== 1 && (
          <button
            className="bg-white text-[#4646a5] hover:text-[#0f0fe1] font-ubuntu-medium"
            onClick={() => setCurrentPage(false)}
          >
            Go Back
          </button>
        )}
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-ubuntu-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={handleNext}
        >
          {currentPage === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default StepButtons;
