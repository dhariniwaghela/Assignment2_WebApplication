import React from "react";
import QuoteApp from "../widgets/QuoteApp";
import NavigationBar from "./Navigationbar";
function Home() {

      return (
            <>
                  <div className="Home">
                        <div className="navbar">
                              <NavigationBar />
                        </div>
                        <div className="quoteapp">
                              <QuoteApp />
                        </div>
                  </div>

            </>
      );
};
export default Home;