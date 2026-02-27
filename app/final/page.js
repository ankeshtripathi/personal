"use client";

import { useState } from "react";
import Image from "next/image";

export default function FinalPage() {
  const questions = [
    "Kya har Sunday 7PM call karogi? 💙",
    "2026 mei hum milenge na?  🌙",
    "apne hathon se chai pilaogi kabhi ya nahii ☕",
    "Tumhe pata hai mera last question kya hai? 😌",
  ];

  const [step, setStep] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 200) - 100;

    setNoPosition({
      x: randomX,
      y: randomY,
    });
  };

  const handleYes = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
      setNoPosition({ x: 0, y: 0 });
    } else {
      setStep("proposal");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)]"></div>

      {/* Floating Hearts (Only on Proposal) */}
      {step === "proposal" && (
        <>
          <Image
            src="/dil_1.png"
            alt="heart"
            width={80}
            height={80}
            className="absolute top-10 left-10 animate-bounce opacity-70"
          />
          <Image
            src="/dil_1.png"
            alt="heart"
            width={60}
            height={60}
            className="absolute bottom-16 right-10 animate-pulse opacity-60"
          />
          <Image
            src="/dil_1.png"
            alt="heart"
            width={70}
            height={70}
            className="absolute top-1/3 right-20 animate-bounce opacity-50"
          />
        </>
      )}

      {/* ================= QUESTION FLOW ================= */}
      {step !== "proposal" && (
        <div className="text-center space-y-12 relative z-10 transition-all duration-700 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent animate-pulse">
            {questions[step]}
          </h1>

          <div className="flex justify-center gap-10 relative mt-10">
            <button
              onClick={handleYes}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold shadow-xl transition duration-500 hover:scale-110"
            >
              Yes 💙
            </button>

            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              }}
              className="px-10 py-4 bg-white/10 border border-white/30 rounded-full backdrop-blur-md transition duration-300 absolute"
            >
              No 😏
            </button>
          </div>
        </div>
      )}

      {/* ================= FINAL PROPOSAL ================= */}
      {step === "proposal" && (
        <div className="text-center space-y-16 relative z-10 animate-[fadeIn_1s_ease-in-out]">
          {/* Glow Behind Title */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent animate-pulse relative">
            Will You Be --- Mujhe in sab chizn mei interset nahi hai  bl bolne wali  🥹
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 relative">
            <div className="relative w-60 sm:w-64 h-72 sm:h-80 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.6)] transition duration-700 hover:scale-110">
              <Image src="/boy_1.png" alt="Boy" fill className="object-cover" />
            </div>

            {/* Animated Heart */}
            <div className="relative">
              <Image
                src="/dil_1.png"
                alt="Love"
                width={120}
                height={120}
                className="animate-bounce drop-shadow-[0_0_30px_rgba(255,0,0,0.6)]"
              />
            </div>

            <div className="relative w-60 sm:w-64 h-72 sm:h-80 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.6)] transition duration-700 hover:scale-110">
              <Image
                src="/girl_1.png"
                alt="Girl"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-blue-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
        Yaha pr bhi mst message tha ak ... lakin wo ab raz raz hi rahne do .... vese acha lage to 5✨ nahi lage to super idea likh kr rateing bhi de sakti ho app 
          </p>
        </div>
      )}
    </section>
  );
}
