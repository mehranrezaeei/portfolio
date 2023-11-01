import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {
  sideScrollIntersectionObserver,
  scrollIntersectionObserver,
} from "./components/shared/helper";

const App = () => {
  useEffect(() => {
    scrollIntersectionObserver();
    sideScrollIntersectionObserver();
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
