import React, { useState, useEffect } from "react";
import logo from "./img/Frame.png";
import logo2 from "./img/Logo2.png";
import "../App.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  // Поля форми
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
   
    const saved = localStorage.getItem("supportMessages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Помилка ", e);
      }
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") setSupportOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);

  const openSupport = (e) => {
    e.preventDefault();
    setSupportOpen(true);
  };

  const closeSupport = () => {
    setSupportOpen(false);
   
    setName("");
    setEmail("");
    setMessageText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const newMsg = {
      id: Date.now(),
      name: name.trim() || "Анонім",
      email: email.trim() || "",
      message: messageText.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("supportMessages", JSON.stringify(updated));

   
    setName("");
    setEmail("");
    setMessageText("");
   
  };

  const clearAllMessages = () => {
    if (!window.confirm("delete all message?")) return;
    setMessages([]);
    localStorage.removeItem("supportMessages");
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-icon" />
          <span className="logo-text">board</span>
        </div>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#product">PRODUCTS</a>
          <a href="#app">APPS & GAMES</a>
          <a href="#features">FEATURES</a>
          <a href="#support" onClick={openSupport}>SUPPORT</a>
          <a href="#about">ABOUT</a>
        </nav>

        <div className="lock-icon">
          <img alt="lock" src={logo2} />
        </div>

        <div className="burger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>
      </header>

      {/* modal support */}
      {supportOpen && (
        <div className="support-overlay" onClick={closeSupport} role="dialog" aria-modal="true">
          <div className="support-modal" onClick={(e) => e.stopPropagation()}>
            <button className="support-close" onClick={closeSupport} aria-label="Close">✕</button>

            <h2>Support</h2>

            <form className="support-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              </label>
              <label>
                Email
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
              </label>
              <label>
                Message *
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Please, describe the problem"
                  required
                />
              </label>

              <div className="support-actions">
                <button type="submit" className="btn-submit">Send</button>
                <button type="button" className="btn-clear" onClick={clearAllMessages}>Dellete all</button>
              </div>
            </form>

            <div className="support-list">
              <h3>Saved message</h3>
              {messages.length === 0 ? (
                <p className="muted">No message yet.</p>
              ) : (
                <ul>
                  {messages.map((m) => (
                    <li key={m.id} className="support-item">
                      <div className="meta">
                        <strong>{m.name}</strong>
                        <span className="date">{new Date(m.createdAt).toLocaleString()}</span>
                      </div>
                      <div className="msg">{m.message}</div>
                      {m.email && <div className="email">📧 {m.email}</div>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;