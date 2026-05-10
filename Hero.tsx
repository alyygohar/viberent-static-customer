"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(10,20,35,0.55) 0%, rgba(10,20,35,0.35) 50%, rgba(10,20,35,0.7) 100%)",
        zIndex: 2,
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(135deg, #0F1C2E 0%, #1a3a5c 40%, #2a5a80 70%, #1a3a5c 100%)",
      }}>
        {/* Simulated cityscape overlay */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "55%",
          background: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80') center/cover no-repeat",
          opacity: 0.85,
        }} />
      </div>

      {/* Tag */}
      <motion.div
        style={{
          position: "absolute", top: 120, left: 60, zIndex: 10,
          background: "rgba(201,168,76,0.9)", color: "white",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
          textTransform: "uppercase", padding: "5px 12px", borderRadius: 4,
          display: "flex", alignItems: "center", gap: 6,
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "white", display: "inline-block" }} />
        Dubai's finest holiday homes
      </motion.div>

      {/* Main headline */}
      <div style={{ position: "absolute", top: "50%", left: 60, transform: "translateY(-55%)", zIndex: 10, maxWidth: 560 }}>
        <motion.h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(38px, 5.5vw, 68px)",
            fontWeight: 700, lineHeight: 1.1,
            color: "white",
            marginBottom: 16,
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Find your perfect stay,<br />
          right here in{" "}
          <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Dubai</span>
        </motion.h1>

        <motion.p
          style={{ color: "rgba(255,255,255,0.82)", fontSize: 14, lineHeight: 1.65, marginBottom: 32, maxWidth: 440 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          Handpicked holiday homes across Dubai's most coveted addresses.<br />
          Managed with precision, experienced with joy.
        </motion.p>

        <motion.div
          style={{ display: "flex", gap: 12 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button style={{
            background: "var(--navy)", color: "white",
            fontSize: 13, fontWeight: 600, padding: "12px 24px",
            borderRadius: 7, border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 8,
            transition: "all 0.25s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#0d182a"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--navy)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
          >
            🏠 Explore Properties
          </button>
          <button style={{
            background: "transparent", color: "white",
            fontSize: 13, fontWeight: 500, padding: "12px 22px",
            borderRadius: 7, border: "1.5px solid rgba(255,255,255,0.45)", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 8,
            transition: "all 0.25s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "white"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
          >
            ▶ How It Works
          </button>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        style={{
          position: "absolute", bottom: 80, right: 60, zIndex: 10,
          display: "flex", gap: 32,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        {[
          { value: "120+", label: "Properties" },
          { value: "4.8", label: "Avg Rating" },
          { value: "8", label: "Years in Dubai" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "white", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
