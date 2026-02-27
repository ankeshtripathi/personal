"use client";
import { useState } from "react";
import Image from "next/image";

export default function SundaySection() {
  const [result, setResult] = useState("");

  const handleSelect = (time) => {
    if (time === "7pm") {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  const resetGame = () => {
    setResult("");
  };

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 py-20 sm:py-32 relative overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-6 sm:space-y-8 mb-10 md:mb-0">
          <div className="relative h-72 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.4)] group">
            <Image
              src="/one.jpeg"
              alt="Her"
              fill
              className="object-cover transition duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">
              Our Sunday Ritual 💙
            </h2>
            <p className="text-sm sm:text-base text-blue-100 mt-4">
              There’s something special about Sundays… A time that belongs only
              to us. 🌙✨
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center space-y-6 sm:space-y-8">
          {!result && (
            <>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200">
                Guess Our Special Time 🕰
              </h3>

              <p className="text-sm sm:text-base text-blue-100">
                Every Sunday… we talk at?
              </p>

              {/* Time Options */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
                {["6pm", "7pm", "8pm", "9pm"].map((time) => (
                  <button
                    key={time}
                    onClick={() => handleSelect(time)}
                    className="py-4 sm:py-5 rounded-2xl bg-blue-900/40 hover:bg-blue-700/60 transition duration-500 hover:scale-105 text-base sm:text-lg font-semibold shadow-lg"
                  >
                    {time.toUpperCase()}
                  </button>
                ))}
              </div>
            </>
          )}

          {result === "correct" && (
            <div className="space-y-6 animate-pulse">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200">
                Exactly 7 PM 💙✨
              </h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                7 PM — our little universe opens. No matter how busy the week
                was, Sunday at 7 always feels like home. 🌙
              </p>
            </div>
          )}

          {result === "wrong" && (
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-300">
                Almost… but not quite 😏
              </h3>
              <p className="text-sm sm:text-base text-blue-100">
                That’s not our magical hour. Think about the time when the world
                feels calm and it’s just you and me 💙
              </p>

              <button
                onClick={resetGame}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition duration-300"
              >
                Try Again 💙
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
