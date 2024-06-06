import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const PersonalInfoContent = () => {
  const { user, setUser, errors } = useContext(AppContext);

  const handleChange = (field) => (e) => {
    setUser({
      ...user,
      [field]: e.target.value,
    });
  };


  return (
    <div className="flex flex-col mt-6 gap-3">
      {["name", "email", "phone"].map((field) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block text-sm font-ubuntu-medium leading-5 text-gray-700"
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === "phone" ? "tel" : "text"}
            name={field}
            id={field}
            value={user[field]}
            onChange={handleChange(field)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={field === "phone" ? "e.g. +1 234 567 890" : ""}
          />
          {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
        </div>
      ))}
    </div>
  );
};


export default PersonalInfoContent;
