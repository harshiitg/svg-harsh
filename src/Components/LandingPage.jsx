import React, { useContext } from "react";
import StepSidebar from "./StepSidebar";
import StepHeader from "./StepHeader";
import PersonalInfoContent from "./PersonalInfoContent";
import StepButtons from "./StepButtons";
import FinalPage from "./FinalPage";
import PricingCard from "./PricingCard";
import FeatureList from "./FeatureList";
import PlanDetails from "./PlanDetails";
import { AppContext } from "../Context/AppContext";

const LandingPage = () => {
  const context = useContext(AppContext);
  const { currentPage } = context;
  return (
    <div className="h-[100vh] bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row bg-white rounded-lg shadow-md gap-2 w-[940px] h-[600px]">
        <StepSidebar />
        <div className="flex items-center justify-center w-[668px]">
          <div className="flex flex-col justify-around">
            {currentPage !== 5 ? <StepHeader /> : null}
            {currentPage === 1 ? <PersonalInfoContent /> : null}
            {currentPage === 2 ? <PlanDetails /> : null}
            {currentPage === 3 ? <FeatureList /> : null}
            {currentPage === 4 ? <PricingCard /> : null}
            {currentPage === 5 ? <FinalPage /> : null}
            {currentPage !== 5 ? <StepButtons /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
