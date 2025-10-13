import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderComponent from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Wind from "./pages/Wind";
// import Hydrogen from "./pages/Hydrogen";
// import Solar from "./pages/Solar";
import News from "./pages/News";
import SolutionsComponent from "./pages/Solutions";
import BookingConsultant from "./pages/BookingConsultant";
import EnergyOptimization from "./pages/EnergyOptimization";
import Marketplace from "./pages/Marketplace";
import NewsDetail from "./components/childComponent/NewsDetail";
import InsightDetail from "./components/childComponent/InsightDetail";
import Contact from "./pages/Contact";
import NotFound from "./components/childComponent/NotFound";
import ComingSoon from "./components/childComponent/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// Component to ensure scrolling to the top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs on every route change

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scroll reset on route change */}
      <div className="k2sgreen">
        <HeaderComponent />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/wind" element={<Wind />} />
            <Route path="/hydrogen" element={<ComingSoon/>} />
            <Route path="/solar" element={<ComingSoon />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/booking" element={<BookingConsultant />} />
            <Route path="/solutions" element={<SolutionsComponent />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/energy-optimization" element={<EnergyOptimization />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />




            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/wind" element={<Wind />} />
            <Route path="/hydrogen" element={<Hydrogen />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/booking" element={<BookingConsultant />} />
            <Route path="/solutions" element={<SolutionsComponent />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/energy-optimization" element={<EnergyOptimization />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
            

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
