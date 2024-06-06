import React from "react";
import isValidEmail from "../Utils/EmailValidation";

export const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      setCurrentPage: this.setCurrentPage,
      user: { name: "", email: "", phone: "" },
      setUser: this.setUser,
      userPlan: "Arcade",
      setUserPlan: this.setUserPlan,
      isYearly: false,
      setIsYearly: this.setIsYearly,
      userAddOns: [],
      setUserAddOns: this.setUserAddOns,
      errors: { name: "", email: "", phone: "" },
      setErrors: this.setErrors,
      handleValidation: this.handleValidation,
    };
  }

  setCurrentPage = (forward = true, pageToRedirect = false) => {
    if (pageToRedirect) {
      this.setState({
        currentPage: pageToRedirect,
      });
      return;
    } else if (forward) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  setUserPlan = (plan) => {
    this.setState({
      userPlan: plan,
    });
  };

  setIsYearly = () => {
    this.setState({
      isYearly: !this.state.isYearly,
    });
  };

  setUserAddOns = (addOns) => {
    this.setState({
      userAddOns: addOns,
    });
  };

  setErrors = (errors) => {
    this.setState({
      errors: errors,
    });
  };

  handleValidation = () => {
    const { name, email, phone } = this.state.user;
    let errors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!name) {
      errors.name = "This field is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "This field is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!phone) {
      errors.phone = "This field is required";
      isValid = false;
    }

    this.setErrors(errors);
    return isValid;
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
