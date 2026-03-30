"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OS PORTFOLIO",
    subtitle: "Development",
    description: "A comprehensive operating system portfolio showcasing technical skills and system-level projects.",
    tags: ["Next.js", "Tailwind"],
    bgClass: "bg-white/5",
    href: "https://os-stelamae.vercel.app",
    image: "/os-project.jpg",
  },
  {
    id: 2,
    title: "7-EVELYN",
    subtitle: "Web App",
    description: "A fully responsive personal web application built with modern web technologies and a clean aesthetic.",
    tags: ["React", "Vercel"],
    bgClass: "bg-white/5",
    href: "https://7-evelyn-gilt.vercel.app/",
    image: "/7-evelyn.png",
  },
  {
    id: 3,
    title: "SJF NON-PREEMPTIVE",
    subtitle: "Algorithm Tool",
    description: "An interactive tool for visualizing Shortest Job First (SJF) scheduling algorithms.",
    tags: ["Algorithm", "Education"],
    bgClass: "bg-white/5",
    href: "https://sjf-nonpreemptive.vercel.app/",
    image: "/sjf-project.png",
  },
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.subtitle)))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || project.subtitle === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen relative page-bg-main">
      <div className="absolute inset-0 z-0 page-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-gray-500 dark:text-white/70 uppercase mb-3">My Work</p>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-gray-900 dark:text-white">My Projects</h1>
          <div className="mt-6 max-w-xs h-px bg-gray-300 dark:bg-white/30" />
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${
                  selectedCategory === cat
                    ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-sky-300 dark:bg-sky-300/10 dark:text-sky-300"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900 dark:border-white/20 dark:text-white/60 dark:hover:border-white/50 dark:hover:text-white bg-white/50 dark:bg-black/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/40" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white/70 dark:bg-black/20 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:border-blue-500 dark:focus:border-sky-300 transition-colors backdrop-blur-md"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <div key={p.id} className="border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md hover:border-gray-400 dark:hover:border-white/40 transition-all duration-300 shadow-2xl">
                <div className="px-6 pt-6 pb-4 border-b border-gray-200 dark:border-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-blue-600 dark:text-sky-300 uppercase mb-1">{p.subtitle}</p>
                      <h2 className="font-display text-2xl font-light italic text-gray-900 dark:text-white">{p.title}</h2>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {p.tags.map((t) => (
                        <span key={t} className="font-mono text-xs text-gray-500 dark:text-white/60 border border-gray-300 dark:border-white/20 px-3 py-1">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2">
                  <div className={"aspect-video relative overflow-hidden flex items-center justify-center border-r border-gray-200 dark:border-white/10 " + p.bgClass}>
                    {p.image ? (
                      <Image src={p.image} alt={p.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <span className="font-display text-7xl text-gray-200 dark:text-white/10 italic">{p.id}</span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col justify-between bg-white/30 dark:bg-black/10">
                    <p className="text-sm text-gray-700 dark:text-white/80 leading-relaxed mb-6">{p.description}</p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start text-xs font-mono uppercase tracking-widest px-6 py-2 border border-gray-300 dark:border-white/30 text-gray-800 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md">
              <p className="font-display text-2xl italic text-gray-500 dark:text-white/50">No projects found.</p>
              <p className="text-sm text-gray-400 dark:text-white/40 mt-2">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}