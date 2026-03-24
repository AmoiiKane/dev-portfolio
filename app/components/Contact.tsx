"use client";
import { motion } from "framer-motion";

const links = [
  { label: "GitHub",  value: "github.com/AmoiiKane",     href: "https://github.com/AmoiiKane",            color: "var(--accent)" },
  { label: "Fiverr",  value: "fiverr.com/amoiikane",     href: "https://www.fiverr.com/amoiikane",        color: "var(--accent2)" },
  { label: "Email",   value: "amoiikane03@gmail.com",    href: "mailto:amoiikane03@gmail.com",            color: "var(--accent3)" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "8rem 10vw 6rem", position: "relative" }}>
      <div style={{
        position: "absolute", top: 0, left: "10vw", right: "10vw",
        height: "1px",
        background: "linear-gradient(90deg, transparent, var(--border), transparent)",
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: "4rem" }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          04. contact
        </p>
        <h2 className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
          Let&apos;s Work Together
        </h2>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", maxWidth: "480px", lineHeight: 1.8 }}>
          Open to freelance projects, collaborations, and interesting problems.
          Reach out — I respond fast.
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px" }}>
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "1.25rem 1.5rem",
              background: "var(--surface)", border: "1px solid var(--border)",
              textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = link.color;
              e.currentTarget.style.boxShadow = `0 0 20px ${link.color}22`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "0.7rem", color: link.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {link.label}
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
              {link.value} ↗
            </span>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          marginTop: "6rem", fontSize: "0.7rem", color: "var(--muted)",
          letterSpacing: "0.1em", textAlign: "center",
        }}
      >
        Built with Next.js + Tailwind + Framer Motion — from Arch Linux 🖤
      </motion.p>
    </section>
  );
}
