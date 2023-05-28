"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      console.log(formState);
      console.log(res);

      setFormState({ name: "", email: "", message: "" });
      toast.success("Message sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
      <ToastContainer />
    </form>
  );
}
