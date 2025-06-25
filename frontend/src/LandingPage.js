import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landing-bg"
      style={{
        background: "url('/landing_bg.png') center center/cover no-repeat fixed",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        position: "relative"
      }}
    >
      <div className="gradient-overlay"></div>
      <nav className="navbar">
        <a href="/about" className="about-link">About</a>
        <div style={{ flex: 1 }}></div>
        <div className="logo">
          <img src="/logo2.png" alt="Logo" className="navbar-logo" />
        </div>
      </nav>
      <section className="hero-content">
        <h1 className="main-headline">Find cell signal on your hike – even offline</h1>
        <p className="main-desc">
          Download a trail’s signal map, hike with confidence, and help fellow hikers by sharing your own signal data. Works offline when you need it most.
        </p>
        <div className="button-group">
          <button className="explore-btn" onClick={() => navigate("/trails")}>Explore Trails</button>
          <button className="upload-btn" onClick={() => alert("Upload coming soon!")}>Upload Your Data</button>
        </div>
      </section>
    </div>
  );
}