"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Content", href: "#content" },
  { label: "Audience", href: "#audience" },
  { label: "Work", href: "#portfolio" },
  { label: "Brands", href: "#brands" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="nav-mobile-toggle"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* Overlay + Panel */}
      <div
        className={`mobile-menu-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div
          className="mobile-menu-panel"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="mobile-menu-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-menu-cta"
            onClick={() => setOpen(false)}
          >
            Partner With Me
          </a>
        </div>
      </div>
    </>
  );
}
