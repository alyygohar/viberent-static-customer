"use client";
import { motion } from "motion/react";

const listings = [
  { name: "Marina View 2BR with Balcony", price: "AED 340 /night", tag: "Marina" },
  { name: "Oceanfront Studio with City Views", price: "AED 200 /night", tag: "JBR" },
  { name: "Luxury Suite Overlooking the Marina", price: "AED 360 /night", tag: "Marina" },
  { name: "Oceanfront Studio with City Views", price: "AED 305 /night", tag: "Palm" },
];

export default function FindNearYou() {
  return (
    <section style={{ padding: "72px 60px", background: "white" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ marginBottom: 36 }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>Explore Now</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, color: "var(--navy)", marginTop: 6 }}>
          Find Homes <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Near You</span>
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8 }}>Browse properties by location across Dubai's most sought-after neighbourhoods.</p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 28 }}>
        {/* Listings */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {listings.map((item, i) => (
            <motion.div
              key={item.name + i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              style={{
                display: "flex", alignItems: "center", gap: 14,
                background: "var(--gray-soft)", borderRadius: 10, padding: "14px 16px",
                cursor: "pointer", border: "1px solid transparent",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold)")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "transparent")}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 8,
                background: "linear-gradient(135deg, #1a3a5c, #2a5a80)",
                flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18,
              }}>🏢</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy)", marginBottom: 3 }}>{item.name}</div>
                <div style={{ fontSize: 12, color: "var(--gold)", fontWeight: 600 }}>{item.price}</div>
              </div>
              <div style={{
                background: "var(--navy)", color: "white",
                fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "3px 8px", borderRadius: 4,
              }}>{item.tag}</div>
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: 14,
            overflow: "hidden",
            background: "#e8f0f8",
            position: "relative",
            minHeight: 320,
          }}
        >
          <img
            src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/55.2708,25.2048,11,0/600x380?access_token=pk.placeholder"
            alt="Dubai Map"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={e => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
            }}
          />
          {/* Fallback map visual */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, #dce8f5 0%, #c8dce8 50%, #b8ccd8 100%)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🗺️</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: "var(--navy)" }}>Dubai, UAE</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>Interactive Map View</div>
            {/* Price pins */}
            {[
              { top: "25%", left: "30%", price: "AED 340" },
              { top: "45%", left: "55%", price: "AED 200" },
              { top: "35%", left: "70%", price: "AED 680" },
              { top: "60%", left: "40%", price: "AED 360" },
              { top: "20%", left: "60%", price: "AED 450" },
            ].map((pin, i) => (
              <div key={i} style={{
                position: "absolute", top: pin.top, left: pin.left,
                background: "var(--navy)", color: "white",
                fontSize: 10, fontWeight: 700, padding: "4px 8px",
                borderRadius: 6, boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}>{pin.price}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
