"use client";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <motion.nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "var(--gold)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L14 6V14H10V10H6V14H2V6L8 2Z" fill="white"/>
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: scrolled ? "var(--navy)" : "white", letterSpacing: "0.04em" }}>VIBRENT</div>
          <div style={{ fontSize: 9, color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: -1 }}>Holiday Homes</div>
        </div>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {["Home", "Properties", "About Us"].map((link) => (
          <a key={link} href="#" style={{
            fontSize: 13, fontWeight: 500,
            color: scrolled ? "var(--navy)" : "white",
            textDecoration: "none", opacity: link === "Home" ? 1 : 0.75,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = link === "Home" ? "1" : "0.75")}
          >{link}</a>
        ))}
        <button style={{
          background: "var(--gold)", color: "white",
          fontSize: 12, fontWeight: 600, padding: "9px 20px",
          borderRadius: 6, border: "none", cursor: "pointer",
          transition: "all 0.2s",
        }}>
          List Your Property →
        </button>
      </div>
    </motion.nav>
  );
}
