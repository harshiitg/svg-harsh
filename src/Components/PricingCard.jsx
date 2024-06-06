import React, { useContext } from "react";
import { userPlans } from "../utils/UserPlans";
import { AppContext } from "../Context/AppContext";

const PricingItem = ({ title, price }) => (
  <div className="flex justify-between items-center py-2">
    <div className="text-sm text-gray-400 font-ubuntu-regular">{title}</div>
    <div className="text-sm text-gray-600 font-ubuntu-medium">{price}</div>
  </div>
);

const PricingCard = () => {
  const { userPlan, isYearly, userAddOns, setCurrentPage } =
    useContext(AppContext);

  const selectedPlan = userPlans.find((plan) => plan.name === userPlan);
  const basePrice = isYearly ? selectedPlan.price * 12 : selectedPlan.price;

  const addonPrices = {
    "Online service": isYearly ? "+$10/yr" : "+$1/mo",
    "Larger storage": isYearly ? "+$20/yr" : "+$2/mo",
    "Customizable Profile": isYearly ? "+$20/yr" : "+$2/mo",
  };

  const totalAddOnPrice = userAddOns.reduce(
    (sum, addon) => sum + parseInt(addonPrices[addon].slice(2)),
    0
  );

  const totalPrice = basePrice + totalAddOnPrice;

  return (
    <div className="bg-white rounded-md py-6 w-full max-w-md mx-auto mt-8">
      <div className="flex flex-col bg-[#eeeeee] p-6 rounded-xl">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-ubuntu-bold">
              {`${userPlan} (${isYearly ? "Yearly" : "Monthly"})`}
            </h2>
            <div
              className="text-gray-500 font-ubuntu-medium mb-4 cursor-pointer"
              onClick={() => setCurrentPage(false, 2)}
            >
              <u>Change</u>
            </div>
          </div>
          <div className="text-[#173668] font-ubuntu-bold text-lg">
            {isYearly ? `$${basePrice}/yr` : `$${basePrice}/mo`}
          </div>
        </div>
        {userAddOns.map((addon) => (
          <PricingItem key={addon} title={addon} price={addonPrices[addon]} />
        ))}
      </div>
      <div className="mt-6 mx-4 flex flex-row justify-between items-center">
        <h3 className="text-sm text-gray-400 font-ubuntu-regular">
          Total ({isYearly ? "per year" : "per month"})
        </h3>
        <div className="text-blue-500 font-ubuntu-medium text-lg">
          {isYearly ? `$${totalPrice}/yr` : `$${totalPrice}/mo`}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
