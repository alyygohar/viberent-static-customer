"use client";
import { motion } from "motion/react";

const locations = [
  { name: "Downtown Dubai", count: "24 Listings", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=75" },
  { name: "JBR", count: "18 Listings", img: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?w=400&q=75" },
  { name: "Palm Jumeirah", count: "31 Listings", img: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=400&q=75" },
  { name: "Dubai Marina", count: "22 Listings", img: "https://images.unsplash.com/photo-1617472012165-290a19fcb03b?w=400&q=75" },
];

import type { Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function Locations() {
  return (
    <section style={{ padding: "72px 60px", background: "white" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ marginBottom: 36 }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>Top Locations</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, color: "var(--navy)", marginTop: 6 }}>
          Explore Prime <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Locations</span>
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            style={{
              borderRadius: 12, overflow: "hidden",
              position: "relative", cursor: "pointer",
              aspectRatio: "3/4",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img src={loc.img} alt={loc.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
              onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(10,20,35,0.75) 0%, transparent 55%)",
            }} />
            <div style={{ position: "absolute", bottom: 16, left: 16 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: "white" }}>{loc.name}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 3 }}>{loc.count}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
