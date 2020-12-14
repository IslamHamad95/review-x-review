import React from "react";
import Footer from "./footer";
import NewsSection from "./subsections/NewsSection";
import ReviewsSection from "./subsections/ReviewsSection";

function LandingPage() {
  return (
    <div>
      <div className="landing-page-container">
        <NewsSection />
        <ReviewsSection />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
