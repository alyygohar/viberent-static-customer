"use client";
import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Finding the right place was simple, and everything was clearly communicated. It made my stay comfortable from the start.",
    author: "Joseph Larry",
    role: "Stayed 5 nights",
    avatar: "JL",
  },
  {
    quote: "The apartment was exactly as shown, clean, well-prepared, and easy to check into. The whole experience felt very smooth.",
    author: "Jack Rowlah",
    role: "Stayed 8 nights",
    avatar: "JR",
  },
  {
    quote: "Finding the right place was simple, and everything was clearly communicated. It made my stay completely stress-free.",
    author: "Brandon Smith",
    role: "Stayed 4 nights",
    avatar: "BS",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 60px", background: "var(--gray-soft)" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ marginBottom: 48 }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>Guest Stories</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, color: "var(--navy)", marginTop: 6 }}>
          Loved by <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Thousands</span>
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "white", borderRadius: 14, padding: "28px 26px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              position: "relative",
            }}
          >
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 64, lineHeight: 0.8,
              color: "var(--gold)", opacity: 0.3,
              marginBottom: 12,
              fontWeight: 700,
            }}>"</div>
            <p style={{ fontSize: 14, color: "#444", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>{t.quote}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--navy), #2a5a80)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: "white",
              }}>{t.avatar}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)" }}>{t.author}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.role}</div>
              </div>
              <div style={{ marginLeft: "auto", color: "var(--gold)", fontSize: 14 }}>★★★★★</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
