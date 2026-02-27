"use client";

import { useEffect, useState } from "react";

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setPetals(generated);
  }, []);

  return (
    <>
      {petals.map((petal, index) => (
        <div
          key={index}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </>
  );
}
