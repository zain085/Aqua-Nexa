import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OnlineBooking from "./pages/OnlineBooking";
import MarineLife from "./pages/MarineLife";
import Feedback from "./pages/Feedback";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;

      case "booking":
        return <OnlineBooking />;

      case "marine-life":
        return <MarineLife />;

      case "feedback":
        return <Feedback />;

      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="grow pt-6">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}