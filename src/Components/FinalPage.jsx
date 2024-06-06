import React from "react";
import thankYou from "./../assets/images/icon-thank-you.svg";

const FinalPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex items-center justify-center">
        <img src={thankYou} alt="thankyou" />
      </div>
      <h1 className="text-2xl font-ubuntu-bold mt-4 text-gray-800">Thank you!</h1>
      <p className="text-gray-600 mt-2 text-center max-w-[440px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default FinalPage;
