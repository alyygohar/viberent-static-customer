"use client";
import { motion } from "motion/react";

const homes = [
  {
    tag: "Penthouse",
    name: "Burj View Penthouse, Floor 52",
    beds: 4, baths: 3, area: "4,800 sq ft",
    price: "AED 2,400 /night",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
  },
  {
    tag: "Featured",
    name: "Beachfront Villa with Private Pool",
    beds: 5, baths: 4, area: "7,000 sq ft",
    price: "AED 3,800 /night",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  },
  {
    tag: "Sea View",
    name: "Marina View 2BR with Balcony",
    beds: 2, baths: 2, area: "1,300 sq ft",
    price: "AED 680 /night",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  },
];

export default function HandSelectedHomes() {
  return (
    <section style={{ padding: "72px 60px", background: "var(--gray-soft)" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36 }}
      >
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>Top Stays</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, color: "var(--navy)", marginTop: 6 }}>
            Hand Selected <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Homes</span>
          </h2>
        </div>
        <a href="#" style={{ fontSize: 13, fontWeight: 600, color: "var(--gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
          View All ↗
        </a>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {homes.map((home, i) => (
          <motion.div
            key={home.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, boxShadow: "0 20px 56px rgba(0,0,0,0.12)", transition: { duration: 0.25 } }}
            style={{
              background: "white", borderRadius: 14,
              overflow: "hidden", cursor: "pointer",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
              <img src={home.img} alt={home.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
              />
              <div style={{
                position: "absolute", top: 12, left: 12,
                background: "var(--navy)", color: "white",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", padding: "4px 10px", borderRadius: 4,
              }}>{home.tag}</div>
            </div>
            <div style={{ padding: "18px 20px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: "var(--navy)", marginBottom: 10, lineHeight: 1.3 }}>{home.name}</h3>
              <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
                {[
                  { icon: "🛏", val: `${home.beds} Beds` },
                  { icon: "🚿", val: `${home.baths} Baths` },
                  { icon: "📐", val: home.area },
                ].map(f => (
                  <div key={f.val} style={{ fontSize: 11, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                    <span>{f.icon}</span> {f.val}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: "var(--navy)" }}>{home.price}</div>
                <button style={{
                  background: "var(--gold)", color: "white",
                  fontSize: 11, fontWeight: 600, padding: "7px 16px",
                  borderRadius: 6, border: "none", cursor: "pointer",
                }}>Book Now</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
