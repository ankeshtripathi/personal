"use client";

import { useState } from "react";
import Image from "next/image";

export default function SecretPhotoSection() {
  const [result, setResult] = useState("");

  const handleAnswer = (value) => {
    if (value === "secret") {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT — IMAGE */}
        <div className="relative h-64 sm:h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(59,130,246,0.5)] group">
          <Image
            src="/one.jpeg"
            alt="Her"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-700"></div>
        </div>

        {/* RIGHT — QUESTION */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center space-y-6 sm:space-y-8">
          {!result && (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">
                A Secret Question 💭
              </h2>

              <p className="text-blue-100 text-sm sm:text-base md:text-lg">
                Which photo of yours do I secretly look at the most? 📸
              </p>

              <div className="grid gap-4 mt-4 sm:mt-6">
                <div
                  onClick={() => handleAnswer("smile")}
                  className="cursor-pointer py-3 sm:py-4 rounded-xl bg-blue-900/40 hover:bg-blue-700/60 transition duration-500 hover:scale-105 text-sm sm:text-base"
                >
                  The smiling one 😊
                </div>

                <div
                  onClick={() => handleAnswer("candid")}
                  className="cursor-pointer py-3 sm:py-4 rounded-xl bg-blue-900/40 hover:bg-blue-700/60 transition duration-500 hover:scale-105 text-sm sm:text-base"
                >
                  The random candid one 📷
                </div>

                <div
                  onClick={() => handleAnswer("secret")}
                  className="cursor-pointer py-3 sm:py-4 rounded-xl bg-blue-900/40 hover:bg-blue-700/60 transition duration-500 hover:scale-105 text-sm sm:text-base"
                >
                  Why should I tell you? 😏
                </div>

                <div
                  onClick={() => handleAnswer("all")}
                  className="cursor-pointer py-3 sm:py-4 rounded-xl bg-blue-900/40 hover:bg-blue-700/60 transition duration-500 hover:scale-105 text-sm sm:text-base"
                >
                  All of them 💙
                </div>
              </div>
            </>
          )}

          {result === "correct" && (
            <div className="space-y-4 sm:space-y-6 animate-pulse">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200">
                Exactly… Why Should I Tell You? 😏💙
              </h2>

              <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">
                I look at it sometimes… secretly. Not because I have to — but
                because it makes me smile without trying. Some things are better
                left as sweet little secrets. 🌙✨
              </p>
            </div>
          )}

          {result === "wrong" && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-300">
                Hmm… Not That One 😌
              </h2>

              <p className="text-blue-100 text-sm sm:text-base md:text-lg">
                That’s a good guess… but the real answer is something I won’t
                reveal so easily. 😉
              </p>

              <button
                onClick={() => setResult("")}
                className="px-6 py-2 bg-blue-500/20 border border-blue-300 rounded-full hover:bg-blue-500/40 transition text-sm sm:text-base"
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
