"use client";
import { useEffect, useState } from "react";

const MESSAGES = [
  "🔴 {n} people from the UK contacted us today",
  "🟢 {n} UK patients enquired in the last 24 hours",
  "🔴 {n} people are viewing this page right now",
];

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function SocialProofBanner() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const count = randomBetween(11, 24);
    const template = MESSAGES[randomBetween(0, MESSAGES.length - 1)];
    setMessage(template.replace("{n}", String(count)));
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-40 bg-gray-900 text-white text-sm px-4 py-2.5 rounded-xl shadow-lg max-w-xs animate-fade-in-up">
      {message}
    </div>
  );
}
