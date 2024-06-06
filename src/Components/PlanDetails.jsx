import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { userPlans } from "../utils/UserPlans";

const PlanDetails = () => {
  const { userPlan, setUserPlan, isYearly, setIsYearly } =
    useContext(AppContext);

  const handleToggle = () => {
    setIsYearly();
  };

  return (
    <div className="flex flex-col mt-6 gap-3">
      <div className="flex justify-center">
        <div className="flex space-x-4">
          {userPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-md p-4 w-40 ${
                userPlan === plan.name
                  ? "border-2 border-blue-500 bg-[#eeecec]"
                  : "bg-white"
              }`}
              onClick={() => setUserPlan(plan.name)}
            >
              <div className="flex mb-8">
                <div className="rounded-full p-2 bg-gray-100 text-gray-800">
                  {plan.icon}
                </div>
              </div>
              <h3 className="text-xl font-ubuntu-medium text-[#0b0f72]">
                {plan.name}
              </h3>
              <p className="text-gray-500">
                {isYearly ? `$${plan.price * 12}/yr` : `$${plan.price}/mo`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 h-12">
        <div className="flex items-center justify-center space-x-4 bg-gray-200 rounded-xl w-full">
          <span
            className={`py-2 px-4 rounded-l-lg ${
              !isYearly
                ? "text-gray-400 font-ubuntu-regular"
                : "text-gray-700 font-ubuntu-bold"
            }`}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isYearly}
              onChange={handleToggle}
            />
            <div
              className="w-10 h-6 bg-[#161683] rounded-full shadow-inner"
              style={{
                transition: "background-color 0.3s ease",
              }}
            />
            <div
              className="absolute w-4 h-4 rounded-full shadow bg-white top-1 transition duration-300 ease-in-out"
              style={{
                transform: isYearly ? "translateX(18px)" : "translateX(3px)",
              }}
            />
          </label>
          <span
            className={`${
              isYearly
                ? "text-gray-400 font-ubuntu-regular"
                : "text-gray-700 font-ubuntu-bold"
            } py-2 px-4 rounded-r-lg`}
          >
            Yearly
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
