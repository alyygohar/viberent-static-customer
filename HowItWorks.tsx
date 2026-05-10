"use client";
import { motion } from "motion/react";

const steps = [
  { num: "01", icon: "🔍", title: "Search & Discover", desc: "Browse our curated collection by area, dates, or type." },
  { num: "02", icon: "📅", title: "Pick Your Dates", desc: "See real-time availability and instant pricing." },
  { num: "03", icon: "🔒", title: "Book Securely", desc: "Safe and simple payments with instant booking confirmation." },
  { num: "04", icon: "🌟", title: "Arrive & Enjoy", desc: "Welcome to Dubai! 24/7 concierge support throughout your stay." },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "80px 60px", background: "var(--gray-soft)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>Simple Process</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, color: "var(--navy)", marginTop: 6 }}>
            Built for <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Everyone</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: "flex", gap: 8 }}
        >
          <button style={{ background: "var(--navy)", color: "white", fontSize: 12, fontWeight: 600, padding: "9px 20px", borderRadius: 20, border: "none", cursor: "pointer" }}>Guests</button>
          <button style={{ background: "white", color: "var(--navy)", fontSize: 12, fontWeight: 600, padding: "9px 20px", borderRadius: 20, border: "1.5px solid var(--gray-border)", cursor: "pointer" }}>Property Owner</button>
        </motion.div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: "center" }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", marginBottom: 16 }}>{step.num}</div>
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5, transition: { duration: 0.2 } }}
              style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "white", margin: "0 auto 16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >{step.icon}</motion.div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: "var(--navy)", marginBottom: 10 }}>{step.title}</h3>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
