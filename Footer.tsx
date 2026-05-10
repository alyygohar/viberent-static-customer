"use client";
import { motion } from "motion/react";

export default function Footer() {
  const cols = [
    { title: "For Guests", links: ["Browse Properties", "How It Works", "Explore Areas", "Write a Review"] },
    { title: "For Owners", links: ["List Your Property", "About Vibrent", "Host Resources", "Pricing Plans"] },
    { title: "Company", links: ["Contact Us", "Cancellation Policy", "Privacy Policy", "Terms of Use"] },
  ];

  return (
    <footer style={{ background: "var(--navy)", color: "white", padding: "60px 60px 32px" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 34, height: 34, borderRadius: "50%",
              background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 6V14H10V10H6V14H2V6L8 2Z" fill="white"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.04em" }}>VIBRENT</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Holiday Homes</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 240 }}>
            Dubai's finest holiday home management. Curated properties, seamless stays, expert management.
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 18 }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {col.links.map((link) => (
                <a key={link} href="#" style={{
                  fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
                >{link}</a>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© 2025 Vibrent Holiday Homes. All rights reserved.</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 900, color: "rgba(255,255,255,0.04)", userSelect: "none", letterSpacing: "-2px" }}>VIBRENT</div>
      </div>
    </footer>
  );
}
