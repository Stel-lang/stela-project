"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSent(true);
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/eb/fc/e7/ebfce767ffd4dd6eaf55c01507181fce.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(8, 30, 38, 0.6)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-white/70 uppercase mb-3">Say Hello</p>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-white">Contact</h1>
          <div className="mt-6 max-w-xs h-px bg-white/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">
              <p className="font-mono text-xs tracking-[0.3em] text-white/60 uppercase mb-2">Reach Out</p>
              <h2 className="font-display text-2xl font-light italic text-white">Contact Information</h2>
            </div>
            <div className="border border-white/10 divide-y divide-white/10 bg-black/20 backdrop-blur-md">
              <a href="mailto:stelamae@email.com" className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors group">
                <span className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 group-hover:border-sky-300 group-hover:text-sky-300 transition-colors flex-shrink-0">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="font-mono text-xs text-white/40 tracking-widest uppercase">Email</p>
                  <p className="text-sm text-white">sumalinogstelamae@gmail.com</p>
                </div>
              </a>
              <a href="tel:+630000000000" className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors group">
                <span className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 group-hover:border-sky-300 group-hover:text-sky-300 transition-colors flex-shrink-0">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="font-mono text-xs text-white/40 tracking-widest uppercase">Phone</p>
                  <p className="text-sm text-white">09765508060</p>
                </div>
              </a>
              <a href="https://www.instagram.com/istel4y/?next=%2Fistel4y%2F" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors group">
                <span className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 group-hover:border-sky-300 group-hover:text-sky-300 transition-colors flex-shrink-0">
                  <Instagram size={18} />
                </span>
                <div>
                  <p className="font-mono text-xs text-white/40 tracking-widest uppercase">Instagram</p>
                  <p className="text-sm text-white">istel4y</p>
                </div>
              </a>
              <a href="https://www.facebook.com/jian.lexter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors group">
                <span className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 group-hover:border-sky-300 group-hover:text-sky-300 transition-colors flex-shrink-0">
                  <Facebook size={18} />
                </span>
                <div>
                  <p className="font-mono text-xs text-white/40 tracking-widest uppercase">Facebook</p>
                  <p className="text-sm text-white">Stelamae Sumalinog</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <p className="font-mono text-xs tracking-[0.3em] text-white/60 uppercase mb-2">Write to Me</p>
              <h2 className="font-display text-2xl font-light italic text-white">Contact Form</h2>
            </div>
            {sent ? (
              <div className="border border-sky-300/30 bg-sky-300/5 backdrop-blur-md p-8 text-center">
                <p className="font-display text-2xl italic text-sky-300 mb-2">Thank you!</p>
                <p className="text-sm text-white/60">Your message has been sent. I will get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-xs tracking-widest text-white/40 uppercase block mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full border border-white/15 bg-black/20 backdrop-blur-md px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-sky-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-widest text-white/40 uppercase block mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full border border-white/15 bg-black/20 backdrop-blur-md px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-sky-300 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs tracking-widest text-white/40 uppercase block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full border border-white/15 bg-black/20 backdrop-blur-md px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-sky-300 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs tracking-widest text-white/40 uppercase block mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    className="w-full border border-white/15 bg-black/20 backdrop-blur-md px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-sky-300 transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full justify-center inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-widest uppercase border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Send size={13} /> Send
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}