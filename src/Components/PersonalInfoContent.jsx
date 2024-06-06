import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const PersonalInfoContent = () => {
  const context = useContext(AppContext);
  const { user, setUser, errors } = context;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col mt-6 gap-3">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={user.phone}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g. +1 234 567 890"
        />
        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default PersonalInfoContent;
