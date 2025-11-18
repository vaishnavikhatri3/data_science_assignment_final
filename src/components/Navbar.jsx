import React from "react";

export default function Navbar({ name, theme, onToggleTheme }) {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <a
          href="https://drive.google.com/drive/folders/13U6IopmpkEUaEr-B1LBzOtjZOFYVpYsi"
          className="nav-link"
          target="_blank"
        >
          Assignment Link
        </a>

        <div className="nav-details">
          <span>Roll No: <strong>IT-2K23-64</strong></span>
          <span>Enrollment No: <strong>DE2302218</strong></span>
        </div>
      </div>

      <div className="nav-center">
        <span className="nav-name">{name}</span>
      </div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={onToggleTheme}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
