//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import { Footer, Navbar } from "./components/molecules";
// Routes
import Routes from "./Routes";
//#endregion

//#region > Components
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <Navbar />
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
//#endregion

//#region > Exports
export default App;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
