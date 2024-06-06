export const HeaderTextMap = (page) => {
  switch (page) {
    case 1:
      return {
        text: "Personal Info",
        subText: "Please provide your name, email address, and phone number.",
      };
    case 2:
      return {
        text: "Select your plan",
        subText: "You have the option of monthly or yearly billing.",
      };
    case 3:
      return {
        text: "Pick add-ons",
        subText: "Add-ons help enhance your gaming experience",
      };
    case 4:
      return {
        text: "Finishing up",
        subText: "Double check if everything looks OK before confirming",
      };
    default:
      return {
        text: "",
        subText: "",
      };
  }
};
