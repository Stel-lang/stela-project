"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const featured = [
  {
    id: 1,
    title: "OS PORTFOLIO",
    image: "/os-project.jpg",
    category: "Development",
    link: "https://os-stelamae.vercel.app"
  },
  {
    id: 2,
    title: "7-EVELYN",
    category: "Web App",
    bg: "bg-blue-800/20",
    link: "https://7-evelyn-gilt.vercel.app/",
    image: "/7-evelyn.png"
  },
  {
    id: 3,
    title: "SJF NON-PREEMPTIVE",
    category: "Algorithm Tool",
    bg: "bg-sky-900/20",
    link: "https://sjf-nonpreemptive.vercel.app/",
    image: "/sjf-project.png"
  },
];

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/eb/fc/e7/ebfce767ffd4dd6eaf55c01507181fce.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(8, 30, 38, 0.6)" }}
      />

      <div className="relative z-10">
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: "#ebf1f5" }}
              >
                Welcome
              </p>
              <h1
                className="font-display text-5xl md:text-7xl font-light leading-tight mb-6"
                style={{ color: "#ebf1f5" }}
              >
                Hi, I&apos;m{" "}
                <span className="italic" style={{ color: "#ebf1f5" }}>
                  Stelamae
                </span>{" "}
                <span className="block">Sumalinog</span>
              </h1>
              <div
                className="my-6 h-px max-w-xs"
                style={{ background: "linear-gradient(to right, #54c6f0, transparent)" }}
              />
              <p
                className="text-sm leading-relaxed mb-8 max-w-sm"
                style={{ color: "#ebf1f5" }}
              >
                A creative designer and developer crafting beautiful, purposeful digital experiences.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-300"
                style={{
                  background: "rgb(71, 165, 220)",
                  border: "1px solid rgb(10, 234, 219)",
                  color: "#ebf1f5",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(210, 162, 232, 0.78)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(82, 232, 220, 0.68)";
                }}
              >
                View About <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(235, 243, 157, 0.92)" }}
                />
                <div
                  className="absolute inset-4 rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(107, 175, 214, 0.89), rgba(30,60,100,0.3))",
                    border: "1px solid rgba(107,174,214,0.2)",
                  }}
                >
                  <Image
                    src="/basta.jpg"
                    alt="Stelamae Sumalinog"
                    fill
                    className="object-cover rounded-full"
                  />
                  <span
                    className="font-display text-5xl italic absolute"
                    style={{ color: "rgba(168, 175, 179, 0.91)" }}
                  >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="max-w-5xl mx-auto px-6 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(72, 167, 225, 0.9), transparent)" }}
        />

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2
              className="font-display text-3xl font-light italic"
              style={{ color: "#ebf1f5" }}
            >
              Featured Project
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {featured.map((p) => (
              <a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div
                  className="aspect-square mb-3 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{
                    background: "rgba(10, 25, 60, 0.5)",
                    border: "1px solid rgba(107,174,214,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-display text-6xl italic"
                        style={{ color: "rgba(107,174,214,0.15)" }}
                      >
                        {p.id}
                      </span>
                    </div>
                  )}
                </div>
                <p
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "rgba(168,200,232,0.45)" }}
                >
                  {p.category}
                </p>
                <p className="text-sm mt-1" style={{ color: "#c8dff0" }}>
                  {p.title}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-300"
              style={{
                border: "1px solid rgba(107,174,214,0.35)",
                color: "#a8c8e8",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(210, 162, 232, 0.78)";
                (e.currentTarget as HTMLElement).style.color = "#ebf1f5";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#ebf1f5";
              }}
            >
              See All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <div
          className="max-w-5xl mx-auto px-6 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(123, 210, 236, 0.93), transparent)" }}
        />

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#ebf1f5" }}
            >
              Get in Touch
            </p>
            <h2
              className="font-display text-3xl font-light italic"
              style={{ color: "#ebf1f5" }}
            >
              Contact Me
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {[
              { href: "https://mail.google.com/mail/u/0/#inbox", icon: <Mail size={16} />, label: "Email" },
              { href: "tel:+63 976 550 8060", icon: <Phone size={16} />, label: "Phone" },
              { href: "https://www.instagram.com/istel4y/", icon: <Instagram size={16} />, label: "Instagram" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "#ebf1f5" }}
              >
                <span
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500/10"
                  style={{ border: "1px solid rgba(58, 152, 246, 0.95)" }}
                >
                  {c.icon}
                </span>
                <span
                  className="text-sm tracking-wide group-hover:text-sky-300 transition-colors"
                >
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}