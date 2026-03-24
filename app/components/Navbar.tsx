"use client";
import { useState, useEffect } from "react";

const links = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1rem 2.5rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: scrolled ? "rgba(3,5,15,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.4s ease",
    }}>
      <span className="display" style={{
        fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em",
        color: "var(--accent)",
        textShadow: "0 0 15px rgba(126,232,250,0.5)",
      }}>
        AMOIIKANE
      </span>

      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {links.map((link) => (
          <a key={link} href={`#${link}`} style={{
            fontSize: "0.72rem", color: "var(--muted)", textDecoration: "none",
            textTransform: "uppercase", letterSpacing: "0.12em",
            transition: "color 0.2s, text-shadow 0.2s",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.textShadow = "0 0 12px rgba(126,232,250,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            {link}
          </a>
        ))}

        <a href="https://www.fiverr.com/amoiikane" target="_blank" rel="noopener noreferrer"
          style={{
            fontSize: "0.72rem", padding: "0.4rem 1rem",
            border: "1px solid var(--accent)",
            color: "var(--accent)", textDecoration: "none",
            textTransform: "uppercase", letterSpacing: "0.12em",
            transition: "all 0.2s",
            textShadow: "0 0 8px rgba(126,232,250,0.4)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "var(--bg)";
            e.currentTarget.style.textShadow = "none";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(126,232,250,0.4)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.textShadow = "0 0 8px rgba(126,232,250,0.4)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
