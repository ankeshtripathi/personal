"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LongestCallSection() {
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState("");
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (result === "correct") {
      let duration = 5265;
      let interval = setInterval(() => {
        setTime((prev) => {
          if (prev >= duration) {
            clearInterval(interval);
            return duration;
          }
          return prev + 45;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [result]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)]"></div>

      <div className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_30px_80px_rgba(59,130,246,0.4)] text-center">
        {/* Profile Image */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.7)] mb-6 sm:mb-10">
          <Image src="/four.jpeg" alt="Her" fill className="object-cover" />
        </div>

        {/* START BUTTON */}
        {!started && (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-200 mb-6">
              That One Special Call 📞
            </h2>

            <button
              onClick={() => setStarted(true)}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600/30 border border-blue-300 rounded-full hover:bg-blue-600/50 transition duration-500"
            >
              Replay That Night 💙
            </button>
          </>
        )}

        {/* QUESTION */}
        {started && !result && (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200 mb-6">
              How long was our longest call?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
              {["45 minutes", "1h 10m 30s", "1h 27m 45s", "2h 5m"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() =>
                      option === "1h 27m 45s"
                        ? setResult("correct")
                        : setResult("wrong")
                    }
                    className="py-4 rounded-2xl bg-blue-900/40 hover:bg-blue-700/60 transition duration-500 hover:scale-105 text-sm sm:text-base md:text-lg shadow-lg"
                  >
                    {option}
                  </button>
                ),
              )}
            </div>
          </>
        )}

        {/* CORRECT ANSWER */}
        {result === "correct" && (
          <div className="space-y-6 sm:space-y-8 animate-pulse mt-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-300">
              1 Hour 27 Minutes 45 Seconds 💙
            </h2>

            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-white tracking-widest">
              {formatTime(time)}
            </div>

            <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              1 hour, 27 minutes, and 45 seconds… and not once did it feel
              boring. That night didn’t feel like time passing — it felt like
              two souls refusing to hang up. 🌙✨
            </p>
          </div>
        )}

        {/* WRONG ANSWER */}
        {result === "wrong" && (
          <div className="space-y-5 sm:space-y-6 mt-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400">
              Not Our Legendary Call 😏
            </h2>

            <p className="text-blue-100 text-sm sm:text-base">
              That call was longer… and way more special. Think about the night
              we didn’t want to disconnect. 💙
            </p>

            <button
              onClick={() => setResult("")}
              className="px-6 py-2 bg-blue-600/30 border border-blue-300 rounded-full hover:bg-blue-600/50 transition"
            >
              Try Again 💙
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
