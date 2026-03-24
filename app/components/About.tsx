"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "4+",   label: "Projects Built" },
  { value: "5",    label: "Languages" },
  { value: "ALX",  label: "Trained At" },
  { value: "Arch", label: "Linux Distro" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 10vw", position: "relative" }}>
      {/* Divider line */}
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
          01. about
        </p>
        <h2 className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--text)" }}>
          Who I Am
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 2, marginBottom: "1.5rem" }}>
            I&apos;m a self-taught systems and backend developer trained at{" "}
            <span style={{ color: "var(--accent)" }}>ALX Africa</span>, where I built a
            strong foundation in C, Linux internals, and low-level programming.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 2, marginBottom: "1.5rem" }}>
            I love building tools that are{" "}
            <span style={{ color: "var(--text)" }}>fast, reliable, and actually useful</span>.
            Whether it&apos;s a CLI system monitor, a file automation bot, or a
            TCP chat server — I care about clean code, good docs, and real-world impact.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 2 }}>
            Currently deepening my skills in{" "}
            <span style={{ color: "var(--accent2)" }}>Rust</span> and{" "}
            <span style={{ color: "var(--accent2)" }}>Go</span>, and open to
            freelance work on Fiverr.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card"
              style={{ padding: "1.5rem", textAlign: "center" }}
            >
              <div className="display" style={{
                fontSize: "1.8rem", fontWeight: 900,
                color: "var(--accent)",
                textShadow: "0 0 20px rgba(126,232,250,0.4)",
                marginBottom: "0.5rem",
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
