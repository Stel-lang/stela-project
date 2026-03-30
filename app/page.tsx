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
    <div className="min-h-screen relative page-bg-main">
      <div className="absolute inset-0 z-0 page-overlay" />

      <div className="relative z-10">
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4 text-gray-600 dark:text-[#ebf1f5]">
                Welcome
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-6 text-gray-900 dark:text-[#ebf1f5]">
                Hi, I&apos;m{" "}
                <span className="italic text-gray-900 dark:text-[#ebf1f5]">
                  Stelamae
                </span>{" "}
                <span className="block">Sumalinog</span>
              </h1>
              <div
                className="my-6 h-px max-w-xs"
                style={{ background: "linear-gradient(to right, #54c6f0, transparent)" }}
              />
              <p className="text-sm leading-relaxed mb-8 max-w-sm text-gray-700 dark:text-[#ebf1f5]">
                A creative designer and developer crafting beautiful, purposeful digital experiences.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-300 bg-blue-600 dark:bg-[rgb(71,165,220)] border border-blue-500 dark:border-[rgb(10,234,219)] text-white backdrop-blur-sm hover:bg-purple-500 dark:hover:bg-[rgba(210,162,232,0.78)]"
              >
                View About <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                <div
                  className="absolute inset-0 rounded-full border border-yellow-300/80 dark:border-[rgba(235,243,157,0.92)]"
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
            <h2 className="font-display text-3xl font-light italic text-gray-900 dark:text-[#ebf1f5]">
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
                  className="aspect-square mb-3 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] border border-gray-200 dark:border-[rgba(107,174,214,0.2)] backdrop-blur-sm"
                  style={{
                    background: "rgba(10, 25, 60, 0.5)",
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
                <p className="font-mono text-xs tracking-widest uppercase text-gray-400 dark:text-[rgba(168,200,232,0.45)]">
                  {p.category}
                </p>
                <p className="text-sm mt-1 text-gray-700 dark:text-[#c8dff0]">
                  {p.title}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-300 border border-gray-300 dark:border-[rgba(107,174,214,0.35)] text-gray-700 dark:text-[#a8c8e8] backdrop-blur-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-[rgba(210,162,232,0.78)] dark:hover:border-transparent"
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
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3 text-gray-600 dark:text-[#ebf1f5]">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl font-light italic text-gray-900 dark:text-[#ebf1f5]">
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
                className="flex items-center gap-3 transition-colors group text-gray-800 dark:text-[#ebf1f5]"
              >
                <span className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500/10 border border-blue-500 dark:border-[rgba(58,152,246,0.95)]">
                  {c.icon}
                </span>
                <span className="text-sm tracking-wide group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
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