"use client";
import { useState } from "react";
import Image from "next/image";

export default function FirstMeetSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center px-6 py-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* ================= LEFT SIDE IMAGE ================= */}
        <div className="relative flex justify-center">
          {/* Floating Glow Layer */}
          <div className="absolute w-80 h-80 bg-blue-400/20 blur-3xl rounded-full animate-pulse"></div>

          <div className="relative w-80 h-[500px] rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(59,130,246,0.6)] transition duration-700 hover:scale-105">
            <Image src="/six.jpg" alt="Her" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* ================= RIGHT SIDE CONTENT ================= */}
        <div className="space-y-10 text-center md:text-left">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent animate-pulse">
            When Will We Finally Meet? 🌙
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed">
            We haven’t met in person yet… but somehow it feels like our souls
            already have. And when that day finally comes, it won’t just be a
            meeting — it will feel like destiny unfolding. ✨
          </p>

          {/* Animated Reveal Card */}
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-2 transition duration-700"
          >
            <p className="text-blue-200 text-xl">Tap to Reveal the Moment 💙</p>
          </div>

          {open && (
            <div className="mt-6 p-8 rounded-3xl bg-blue-900/40 border border-white/20 backdrop-blur-lg animate-fadeIn transition duration-700">
              <p className="text-blue-100 leading-relaxed text-lg">
                I don’t know the exact date yet… but I know this — the first
                time I see you in front of me, time will pause for a second. And
                I’ll realize that the wait was completely worth it. 🥹💙
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
