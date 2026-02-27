"use client";
import { useState } from "react";
import Image from "next/image";

export default function BookSection() {
  const [result, setResult] = useState("");

  const handleAnswer = (value) => {
    if (value === 40) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  const resetGame = () => {
    setResult("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-32 relative overflow-hidden text-white">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative flex justify-center items-center mb-10 md:mb-0">
          <div className="relative w-60 sm:w-72 h-80 sm:h-96">
            {/* Back */}
            <div className="absolute top-4 left-4 w-full h-full rounded-3xl overflow-hidden shadow-2xl opacity-70">
              <Image src="/her.jpg" alt="Her" fill className="object-cover" />
            </div>

            {/* Middle */}
            <div className="absolute top-2 left-2 w-full h-full rounded-3xl overflow-hidden shadow-2xl opacity-80">
              <Image src="/her.jpg" alt="Her" fill className="object-cover" />
            </div>

            {/* Front */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.5)] transition duration-700 hover:scale-105">
              <Image src="/three.jpeg" alt="Her" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center space-y-6 sm:space-y-8">
          {!result && (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">
                A Sweet Question 💙
              </h2>

              <p className="text-sm sm:text-base text-blue-100">
                How many photos of yours do I have saved? 📸
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[10, 20, 30, 40].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleAnswer(num)}
                    className="py-3 bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 transition duration-500 hover:scale-105"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </>
          )}

          {result === "correct" && (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-200 animate-pulse">
                You Got It Right 💙✨
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                I have 40 photos of you… and honestly, even 40 feels too small.
                Every picture is a memory I treasure forever. 🌙
              </p>
            </>
          )}

          {result === "wrong" && (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-300">
                Not Quite 😏
              </h2>

              <p className="text-sm sm:text-base text-blue-100">
                That’s not the right number… Try again. I might have more than
                you think 😉
              </p>

              <button
                onClick={resetGame}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition duration-300"
              >
                Try Again 💙
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
