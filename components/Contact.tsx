"use client";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [animate, setAnimate] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Added

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // ✅ Disable button before sending

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) alert("Message sent successfully!");
      else alert("Something went wrong");
    } catch (err) {
      alert("Server error, try again later.");
    }

    setName("");
    setEmail("");
    setMessage("");
    setLoading(false); // ✅ Enable button again after response
  };

  return (
    <section
      id="contact"
      className="py-16 bg-black text-white min-h-screen flex flex-col items-center"
    >
      <h2
        className={`text-3xl md:text-4xl font-[Great_Vibes] mb-6 text-teal-400 drop-shadow-[0_0_10px_rgba(56,178,172,0.5)] transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className={`max-w-md w-full mx-auto space-y-4 transition-all duration-1000 delay-200 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-400"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-400"
        ></textarea>

        <button
          type="submit"
          disabled={loading} // ✅ Disabled when loading
          className={`bg-teal-400 text-black px-6 py-3 rounded-full text-xl font-[Great_Vibes] w-full transition-all duration-300 hover:brightness-90 ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
