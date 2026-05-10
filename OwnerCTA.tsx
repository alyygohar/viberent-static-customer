"use client";
import { motion } from "motion/react";

export default function OwnerCTA() {
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: 480 }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(10,18,30,0.92) 40%, rgba(10,18,30,0.6) 100%)",
        zIndex: 2,
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80')",
        backgroundSize: "cover", backgroundPosition: "center",
      }} />

      <div style={{ position: "relative", zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, padding: "80px 60px", alignItems: "center" }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4.5vw, 56px)",
            fontWeight: 700, lineHeight: 1.1,
            color: "white", marginBottom: 20,
          }}>
            Your Property.<br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Our Expertise.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
            Join 80+ property owners in Dubai who trust Vibrent to manage, market, and maximise their short-stay investments — hands free.
          </p>
          <button style={{
            background: "var(--gold)", color: "white",
            fontSize: 13, fontWeight: 700, padding: "14px 28px",
            borderRadius: 8, border: "none", cursor: "pointer",
            transition: "all 0.25s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--gold-dark)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--gold)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
          >
            List Your Property →
          </button>
        </motion.div>

        {/* Right – checklist */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          {[
            "Full property management end-to-end",
            "Revenue management & dynamic pricing",
            "Professional photography & marketing",
            "Guest screening & 24/7 support",
            "Detailed monthly performance reports",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                background: "var(--gold)", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 11, color: "white",
                flexShrink: 0, fontWeight: 700,
              }}>✓</div>
              <span style={{ color: "rgba(255,255,255,0.88)", fontSize: 14 }}>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
