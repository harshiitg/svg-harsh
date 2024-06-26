import React from "react";
import { AppContextProvider } from "./Context/AppContext";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <AppContextProvider>
      <LandingPage />
    </AppContextProvider>
  );
}

export default App;

