"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1200));
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="w-full bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mb-8 text-lg">
            Have a project or idea? Send us a message.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 Ahmedabad, India</p>
            <p>📧 support@yourdomain.com</p>
            <p>📞 +91 99999 99999</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {sent && (
            <p className="text-green-400 text-sm">
              Message sent successfully 🚀
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
