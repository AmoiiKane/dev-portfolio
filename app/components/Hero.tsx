"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Systems Programmer",
  "Backend Developer",
  "Automation Engineer",
  "Open Source Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "flex-start",
      padding: "0 10vw",
      position: "relative",
    }}>
      {/* Nebula glow */}
      <div style={{
        position: "absolute", top: "20%", right: "10%",
        width: "400px", height: "400px",
        background: "radial-gradient(ellipse, rgba(167,139,250,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", left: "5%",
        width: "300px", height: "300px",
        background: "radial-gradient(ellipse, rgba(126,232,250,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "float 10s ease-in-out infinite reverse",
      }} />

      {/* Prompt line */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "1rem", letterSpacing: "0.05em" }}
      >
        <span style={{ color: "var(--accent)" }}>~/portfolio</span>
        <span style={{ color: "var(--accent2)" }}> ❯ </span>
        <span>whoami</span>
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="display"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
          fontWeight: 900,
          letterSpacing: "0.05em",
          lineHeight: 1.1,
          marginBottom: "1rem",
          color: "var(--text)",
        }}
      >
        AMOII
        <span style={{
          color: "var(--accent)",
          textShadow: "0 0 30px rgba(126,232,250,0.6), 0 0 60px rgba(126,232,250,0.2)",
        }}>KANE</span>
      </motion.h1>

      {/* Typewriter role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "var(--accent2)",
          marginBottom: "2rem",
          minHeight: "2rem",
          letterSpacing: "0.02em",
        }}
      >
        <span style={{ color: "var(--muted)" }}>// </span>
        {displayed}
        <span style={{
          display: "inline-block", width: "2px", height: "1.2em",
          background: "var(--accent)", marginLeft: "3px", verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }} />
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          fontSize: "0.9rem", color: "var(--muted)",
          maxWidth: "520px", lineHeight: 1.8,
          marginBottom: "3rem",
        }}
      >
        I build things close to the metal — fast CLI tools, reliable backend APIs,
        and automation scripts that actually save time.
        Based on <span style={{ color: "var(--text)" }}>Arch Linux</span>,
        writing <span style={{ color: "var(--accent)" }}>C</span>,{" "}
        <span style={{ color: "var(--accent)" }}>Rust</span>,{" "}
        <span style={{ color: "var(--accent)" }}>Go</span>, and{" "}
        <span style={{ color: "var(--accent)" }}>Python</span>.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
      >
        <a href="#projects" style={{
          padding: "0.75rem 2rem", fontSize: "0.8rem",
          background: "var(--accent)", color: "var(--bg)",
          textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase",
          fontWeight: 700, transition: "all 0.2s",
          boxShadow: "0 0 20px rgba(126,232,250,0.3)",
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 35px rgba(126,232,250,0.6)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 20px rgba(126,232,250,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          View Projects
        </a>
        <a href="https://github.com/AmoiiKane" target="_blank" rel="noopener noreferrer"
          style={{
            padding: "0.75rem 2rem", fontSize: "0.8rem",
            border: "1px solid var(--border)", color: "var(--text)",
            textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase",
            fontWeight: 700, transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent2)"; e.currentTarget.style.color = "var(--accent2)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }}
        >
          GitHub
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          color: "var(--muted)", fontSize: "0.7rem", letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(to bottom, var(--muted), transparent)",
          animation: "float 2s ease-in-out infinite",
        }} />
      </motion.div>
    </section>
  );
}
