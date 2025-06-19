// app/page.tsx
import React from "react";
import HeroSection from "./components/HeroSection";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <main>
      <Chatbot />
      <HeroSection />
    </main>
  );
}

