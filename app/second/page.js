"use client";
import { useState } from "react";
import Image from "next/image";

export default function SurpriseSection() {
  const [result, setResult] = useState("");

  const handleAnswer = (answer) => {
    if (answer === "17july") {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT — CIRCULAR IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-blue-300 shadow-2xl animate-pulse">
            <Image src="/tow.jpeg" alt="Her" fill className="object-cover" />
          </div>
        </div>

        {/* RIGHT — SURPRISE BOX */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center space-y-6">
          {!result && (
            <>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">
                Surprise Question 💙
              </h2>

              <p className="text-blue-100">
                When did we first talk on a call? 📞✨
              </p>

              <div className="flex flex-col gap-4 mt-6">
                <button
                  onClick={() => handleAnswer("17june")}
                  className="py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                >
                  17 June
                </button>

                <button
                  onClick={() => handleAnswer("17july")}
                  className="py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                >
                  17 July
                </button>

                <button
                  onClick={() => handleAnswer("19july")}
                  className="py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                >
                  19 July
                </button>

                <button
                  onClick={() => handleAnswer("26feb")}
                  className="py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                >
                  26 February 2026
                </button>
              </div>
            </>
          )}

          {result === "correct" && (
            <>
              <h2 className="text-3xl font-bold text-blue-200">
                You Remembered 🥹💙
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Yes… it was 17 July. That was the first time we talked on call,
                and we spoke for 45 beautiful minutes. 📞✨ Those 45 minutes
                felt like the beginning of forever.
              </p>
            </>
          )}

          {result === "wrong" && (
            <>
              <h2 className="text-3xl font-bold text-red-300">Not Quite 😏</h2>
              <p className="text-blue-100">
                Hmm… that’s not the magical day. Think again, my love 💙
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
