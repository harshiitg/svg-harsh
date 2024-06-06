import React from "react";
import { AppContextProvider } from "./context/AppContext";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <AppContextProvider>
      <LandingPage />
    </AppContextProvider>
  );
}

export default App;

