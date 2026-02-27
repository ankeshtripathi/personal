"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MoonSection() {
  const [activeMoon, setActiveMoon] = useState(null);

  const moonMessages = [
    {
      title: "My Calm 🌙",
      text: "Whenever life feels heavy, you are my calm night sky. Quiet, beautiful, and peaceful.",
    },
    {
      title: "My Light ✨",
      text: "Even on my darkest days, you shine softly in my world and make everything better.",
    },
    {
      title: "My Secret Smile 😌",
      text: "Sometimes I just smile thinking about you… and no one knows why.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        {/* LEFT SIDE - Romantic Card */}
        <div className="flex flex-col items-center md:items-start gap-8">
          <Card className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(59,130,246,0.4)] rounded-3xl transition duration-700 hover:-translate-y-3">
            <CardContent className="p-4">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/five.jpg"
                  alt="Her"
                  fill
                  className="object-cover transition duration-1000 hover:scale-110"
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">
              You Are moon  ------ 
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-md">
              Just like the moon lights up the darkest nights, you light up my
              life without even trying. ✨
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Magical Moons */}
        <div className="flex justify-center gap-6 flex-wrap">
          {moonMessages.map((moon, index) => (
            <Card
              key={index}
              onClick={() => setActiveMoon(index)}
              className="cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-white via-blue-100 to-blue-300 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.6)] transition duration-700 hover:scale-110 animate-pulse"
            >
              🌙
            </Card>
          ))}
        </div>
      </div>

      {/* POPUP CARD */}
      {activeMoon !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <Card className="max-w-md w-full bg-blue-950/90 border border-white/20 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent">
                {moonMessages[activeMoon].title}
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                {moonMessages[activeMoon].text}
              </p>

              <Button
                onClick={() => setActiveMoon(null)}
                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/30"
              >
                Close 💙
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}
