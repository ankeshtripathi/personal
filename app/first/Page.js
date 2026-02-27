"use client";

import { useState } from "react";
import Image from "next/image";

export default function RomanticSection() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleChoice = (choice) => {
    if (choice === "22jan") {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  const resetTry = () => {
    setResult("");
  };

  return (
    <>
      {/* ================= MAIN SECTION ================= */}
      <section className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.2),transparent_60%)]"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGES */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className={`group relative w-full max-w-sm mx-auto ${
                  i === 1 ? "md:ml-10" : ""
                }`}
              >
                {/* Card */}
                <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(59,130,246,0.4)] transition duration-700 hover:-translate-y-4 hover:shadow-blue-500/40">
                  {/* Image Wrapper */}
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src="/four.jpeg"
                      alt="Her"
                      fill
                      className="object-contain p-4 transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                    <p className="text-blue-200 text-center text-sm sm:text-base font-medium tracking-wide">
                      You don’t know how beautiful you are 💙
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">
              You Are -------
            </h2>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              In a world full of chaos, you are my calm. In the darkest nights,
              you are my brightest star. ✨
            </p>

            <button
              onClick={() => {
                setOpen(true);
                setResult("");
              }}
              className="w-full sm:w-auto px-6 py-3 bg-white/10 border border-white/30 rounded-full backdrop-blur-md hover:bg-white/20 transition duration-500"
            >
              When Did We First Connect? 💙
            </button>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 px-4">
          <div className="bg-blue-950/95 border border-white/20 rounded-3xl p-6 sm:p-10 w-full max-w-md text-center shadow-2xl">
            {/* QUESTION STATE */}
            {result === "" && (
              <>
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">
                  When did we first connect? ✨
                </h2>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => handleChoice("22jan")}
                    className="py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-white"
                  >
                    22 January 2024
                  </button>

                  <button
                    onClick={() => handleChoice("22feb")}
                    className="py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-white"
                  >
                    22 February 2024
                  </button>

                  <button
                    onClick={() => handleChoice("15jan")}
                    className="py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-white"
                  >
                    15 January 2024
                  </button>

                  <button
                    onClick={() => handleChoice("idk")}
                    className="py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-white"
                  >
                    I Don’t Remember 🤭
                  </button>
                </div>
              </>
            )}

            {/* WRONG ANSWER */}
            {result === "wrong" && (
              <>
                <h2 className="text-2xl font-bold text-red-300 mb-4">
                  Not Quite 😅
                </h2>

                <p className="text-blue-100 mb-6">
                  That’s not the magical date. Think again 💙
                </p>

                <button
                  onClick={resetTry}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition duration-500"
                >
                  Try Again
                </button>
              </>
            )}

            {/* CORRECT ANSWER */}
            {result === "correct" && (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-200 mb-4">
                  You Are Right 💙✨
                </h2>

                <p className="text-blue-100 leading-relaxed">
                  22 January 2024 was the day destiny introduced us. That was
                  the beginning of something beautiful — the start of our
                  forever. 🌙
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 px-6 py-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition duration-500"
                >
                  Close 💙
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
