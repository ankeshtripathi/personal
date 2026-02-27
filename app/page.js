"use client";
import { useState } from "react";
import Image from "next/image";
import RomanticSection from "./first/Page";
import SurpriseSection from "./second/page";
import MoonSection from "./third/page";
import { Book, Sun } from "lucide-react";
import BookSection from "./four/page";
import SundaySection from "./five/page";
import LoveMemorySection from "./six/page";
import LongestCallSection from "./seven/page";
import SecretPhotoSection from "./Eight/page";
import FinalPage from "./final/page";

export default function Home() {

  const [open, setOpen] = useState(false);
  

  return (
    <div className="relative z-10 text-white">
      {/* SECTION 1 – Hero Center Photo */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 py-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_60%)]"></div>

        <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

            <div className="relative w-64 sm:w-72 md:w-80 h-[380px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(59,130,246,0.6)] transition duration-700 hover:scale-105">
              <Image src="/one.jpeg" alt="Her" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-8 text-center md:text-left relative">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-200 via-white to-blue-400 bg-clip-text text-transparent">
              She Isn’t Just My Universe —
              <br />
              She Is My Destiny 💙
            </h1>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              In a sky full of billions of stars, I found the one that feels
              like home. Every moment with you feels written beyond time. ✨
            </p>

            {/* Floating Heart Animation */}
            <div className="flex justify-center md:justify-start my-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 float heartbeat">
                <Image
                  src="/dil_1.png"
                  alt="Heart"
                  fill
                  className="object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <button
                onClick={() => setOpen(true)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold shadow-xl transition duration-500 hover:scale-105"
              >
                Discover My Heart 💙
              </button>

              <button className="px-8 py-3 border border-white/30 rounded-full text-blue-200 hover:bg-white/10 transition duration-500">
                Read Our Story 🌙
              </button>
            </div>
          </div>
        </div>

        {/* POPUP */}
        {open && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">
            <div className="bg-slate-900 border border-white/20 rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center shadow-2xl space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-400 bg-clip-text text-transparent">
                You Are My Forever 💙
              </h2>

              <p className="text-blue-100 leading-relaxed text-sm sm:text-lg">
                I don’t just love you. I admire you. I respect you. I choose you
                — today, tomorrow, and in every universe. 🌌
              </p>

              <button
                onClick={() => setOpen(false)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition duration-500"
              >
                Close 💙
              </button>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 2 – 3 Column Grid */}
      <section className="min-h-screen flex items-center px-6 py-32 relative">
        {/* Background Soft Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>

        <RomanticSection />
      </section>

      {/* SECTION 3 – Horizontal Scroll Gallery */}

      <MoonSection />
      <BookSection />
      <SundaySection />
      <LoveMemorySection />
      <SurpriseSection />
      <LongestCallSection />
      <SecretPhotoSection />

      {/* SECTION 4 – Masonry Style */}

      {/* SECTION 5 – Side By Side Layout */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-24">
        <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/seven.jpg" alt="Her" fill className="object-cover" />
        </div>

        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6"> ab text chnage ho gaya yaha pr ka bhii </h2>
          <p className="text-blue-100 leading-relaxed">
            In every life, I would still choose you   "as a frind"    . In every universe, I
            would still find you .
          </p>
        </div>
      </section>

      {/* SECTION 6 – Polaroid Style Cards */}

      <FinalPage />
    </div>
  );
}
