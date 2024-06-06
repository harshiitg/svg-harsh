import React, { useContext } from "react";
import bgSidebar from "./../assets/images/bg-sidebar-desktop.svg";
import { AppContext } from "../context/AppContext";

const StepSidebar = () => {
  const context = useContext(AppContext);
  const { currentPage } = context;

  const steps = [
    {
      title: "YOUR INFO",
      stepNumber: 1,
    },
    {
      title: "SELECT PLAN",
      stepNumber: 2,
    },
    {
      title: "ADD-ONS",
      stepNumber: 3,
    },
    {
      title: "SUMMARY",
      stepNumber: 4,
    },
  ];

  return (
    <div
      className="rounded-lg shadow-md p-8 flex flex-col space-y-8 ml-4 my-4 bg-cover bg-no-repeat min-w-[272px]"
      style={{
        backgroundImage: `url(${bgSidebar})`,
        backgroundPosition: "0px",
      }}
    >
      <div className="flex flex-col space-y-4">
        {steps.map((step) => (
          <div
            key={step.title}
            className={`flex items-center ${
              step.stepNumber === currentPage
                ? "text-[#1d345880]"
                : "text-white"
            }`}
          >
            <div
              className={`rounded-full border-2 p-2 mr-4 h-10 w-10 flex items-center justify-center ${
                step.stepNumber === currentPage ? "bg-[#bdd0d0]" : ""
              }`}
            >
              <p className="font-ubuntu-bold text-lg">{step.stepNumber}</p>
            </div>
            <p className="font-ubuntu-bold text-lg text-white">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSidebar;
