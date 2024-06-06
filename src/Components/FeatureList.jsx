import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { UserAddOns } from "../Utils/UserAddOns";

const Feature = ({ title, description, price, checked, onChange }) => {
  return (
    <div
      className={`flex items-center justify-between gap-7 p-6 rounded-lg ${
        checked ? "bg-gray-100 border-purple-500" : "bg-white border-gray-200"
      } hover:bg-gray-100 hover:border-purple-500 border transition duration-200 ease-in-out`}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => onChange()}
      >
        <input
          type="checkbox"
          checked={checked}
          className="w-5 h-5 rounded-full border-gray-300"
        />
        <div className="ml-4">
          <h3 className="font-ubuntu-medium text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm font-ubuntu-regular">
            {description}
          </p>
        </div>
      </div>
      <p className="font-ubuntu-medium text-blue-500">{`+${price}/mo`}</p>{" "}
    </div>
  );
};

const FeatureList = () => {
  const { userAddOns, setUserAddOns } = useContext(AppContext);

  const handleAddOnChange = (title) => {
    const updatedAddOns = userAddOns.includes(title)
      ? userAddOns.filter((addOn) => addOn !== title)
      : [...userAddOns, title];
    setUserAddOns(updatedAddOns);
  };

  return (
    <div className="container mx-auto mt-6 flex flex-col gap-3">
      {UserAddOns.map((addon) => (
        <Feature
          key={addon.title}
          title={addon.title}
          description={addon.description}
          price={addon.price}
          checked={userAddOns.includes(addon.title)}
          onChange={() => handleAddOnChange(addon.title)}
        />
      ))}
    </div>
  );
};

export default FeatureList;
