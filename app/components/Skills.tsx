"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "C",          level: 85, color: "var(--accent)",  desc: "Systems, data structures, ALX trained" },
  { name: "Python",     level: 80, color: "var(--accent2)", desc: "Automation, scripting, FastAPI" },
  { name: "Rust",       level: 50, color: "var(--accent3)", desc: "Memory safety, CLI tools" },
  { name: "Go",         level: 55, color: "var(--accent)",  desc: "Backend APIs, concurrent systems" },
  { name: "JavaScript", level: 60, color: "var(--accent2)", desc: "Frontend, Node.js" },
  { name: "Shell/Bash", level: 75, color: "var(--accent3)", desc: "Automation, DevOps pipelines" },
  { name: "Docker",     level: 60, color: "var(--accent)",  desc: "Containerization, dev environments" },
  { name: "Linux",      level: 90, color: "var(--accent2)", desc: "Arch Linux daily driver" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 10vw" }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "4rem" }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          02. skills
        </p>
        <h2 className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--text)" }}>
          Tech Stack
        </h2>
      </motion.div>

      {/* Skills grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1.5rem",
      }}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="card"
            style={{ padding: "1.5rem" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span style={{ color: skill.color, fontSize: "0.9rem", fontWeight: 700 }}>{skill.name}</span>
              <span style={{ color: "var(--muted)", fontSize: "0.75rem" }}>{skill.level}%</span>
            </div>
            {/* Bar */}
            <div style={{
              height: "2px", background: "var(--border)",
              marginBottom: "0.75rem", overflow: "hidden",
            }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 + 0.3, duration: 0.8, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: skill.color,
                  boxShadow: `0 0 8px ${skill.color}`,
                }}
              />
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
