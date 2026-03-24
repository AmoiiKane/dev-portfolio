"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "sysmon-cli",
    desc: "Real-time system resource monitor for the terminal. CPU, RAM, disk, network, and top processes — with live refresh mode.",
    stack: ["Python", "psutil", "rich"],
    color: "var(--accent)",
    github: "https://github.com/AmoiiKane/sysmon-cli",
    highlight: "CLI Tool",
  },
  {
    name: "automate-me",
    desc: "File organizer bot that watches a directory and automatically sorts files into categorized subfolders by type.",
    stack: ["Python", "watchdog", "rich"],
    color: "var(--accent2)",
    github: "https://github.com/AmoiiKane/automate-me",
    highlight: "Automation",
  },
  {
    name: "c-chat",
    desc: "Terminal chat application in C. TCP sockets, POSIX threads, real-time broadcast to 32 concurrent clients.",
    stack: ["C", "pthreads", "BSD Sockets"],
    color: "var(--accent3)",
    github: "https://github.com/AmoiiKane/c-chat",
    highlight: "Systems / Network",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "8rem 10vw" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: "4rem" }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          03. projects
        </p>
        <h2 className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--text)" }}>
          Featured Work
        </h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card"
            style={{ padding: "2rem", position: "relative", overflow: "hidden" }}
          >
            {/* Glow accent left border */}
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: "2px",
              background: p.color,
              boxShadow: `0 0 15px ${p.color}`,
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.65rem", color: p.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {p.highlight}
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginTop: "0.25rem" }}>
                  {p.name}
                </h3>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.72rem", padding: "0.35rem 1rem",
                  border: `1px solid ${p.color}`, color: p.color,
                  textDecoration: "none", letterSpacing: "0.1em",
                  textTransform: "uppercase", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = p.color; e.currentTarget.style.color = "var(--bg)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = p.color; }}
              >
                GitHub ↗
              </a>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
              {p.desc}
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {p.stack.map(s => (
                <span key={s} style={{
                  fontSize: "0.7rem", padding: "0.2rem 0.7rem",
                  background: "var(--bg)", border: "1px solid var(--border)",
                  color: "var(--muted)", letterSpacing: "0.05em",
                }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
