"use client";
import { motion } from "motion/react";

const services = [
  { icon: "🏠", title: "Interior Design & Styling", desc: "We furnish and stage your property to a high standard, ensuring great photography and guest experience." },
  { icon: "📊", title: "Bookings & Revenue Management", desc: "Dynamic pricing, its platform distribution, and intelligent calendar management to keep your property fully booked." },
  { icon: "👥", title: "Guest Screening & Management", desc: "Rigorous guest vetting, seamless check-in coordination, and 24/7 in-stay support for every booking." },
  { icon: "🔧", title: "Property Maintenance", desc: "Round-the-clock maintenance, AC servicing and emergency repairs handled swiftly." },
  { icon: "📸", title: "Photography & Marketing", desc: "Professional photography, short-stay, video tours, and targeted digital marketing." },
  { icon: "📈", title: "Performance Analytics", desc: "Monthly owner reports with occupancy rates, revenue benchmarks, and market benchmarking." },
];

export default function ManagedWithCare() {
  return (
    <section style={{ padding: "80px 60px", background: "white" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ marginBottom: 48 }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>What We Offer</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 600, color: "var(--navy)", marginTop: 6 }}>
          Managed with <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Care</span>
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,0,0,0.09)", transition: { duration: 0.2 } }}
            style={{
              background: "var(--gray-soft)",
              borderRadius: 14, padding: "28px 26px",
              border: "1px solid var(--gray-border)",
              cursor: "default",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--gold)")}
            onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--gray-border)")}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: "white", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 22,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              marginBottom: 16,
            }}>{s.icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: "var(--navy)", marginBottom: 10 }}>{s.title}</h3>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
