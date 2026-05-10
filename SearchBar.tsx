"use client";
import { motion } from "motion/react";

export default function SearchBar() {
  return (
    <motion.div
      style={{
        margin: "0 auto", maxWidth: 900,
        transform: "translateY(-28px)",
        padding: "0 24px",
        position: "relative", zIndex: 20,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={{
        background: "white",
        borderRadius: 12,
        boxShadow: "0 8px 48px rgba(0,0,0,0.14)",
        display: "flex", alignItems: "center",
        padding: "0 4px 0 0",
        overflow: "hidden",
        border: "1px solid var(--gray-border)",
      }}>
        {[
          { icon: "📍", label: "Location", placeholder: "Where are you going?" },
          { icon: "📅", label: "Check In", placeholder: "Add date" },
          { icon: "📅", label: "Check Out", placeholder: "Add date" },
          { icon: "👥", label: "Guests", placeholder: "Add guests" },
        ].map((item, i) => (
          <div key={item.label} style={{
            flex: 1, padding: "16px 20px",
            borderRight: i < 3 ? "1px solid var(--gray-border)" : "none",
            cursor: "pointer",
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--navy)", marginBottom: 3 }}>
              {item.icon} {item.label}
            </div>
            <div style={{ fontSize: 13, color: "#aaa" }}>{item.placeholder}</div>
          </div>
        ))}
        <button style={{
          background: "var(--navy)", color: "white",
          fontSize: 13, fontWeight: 600, padding: "14px 28px",
          borderRadius: 8, border: "none", cursor: "pointer", margin: 4,
          whiteSpace: "nowrap", transition: "background 0.2s",
        }}>
          Search
        </button>
      </div>
    </motion.div>
  );
}
