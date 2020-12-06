import React from "react";
import NewsSection from "./subsections/NewsSection";
import ReviewsSection from "./subsections/ReviewsSection";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <NewsSection />
      <ReviewsSection/>
    </div>
  );
}

export default LandingPage;
