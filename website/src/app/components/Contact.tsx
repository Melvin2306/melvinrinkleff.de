"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      setFormState({ name: "", email: "", message: "" });
      alert("Message sent!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formState.name}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formState.email}
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formState.message}
        onChange={(e) =>
          setFormState({ ...formState, message: e.target.value })
        }
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
