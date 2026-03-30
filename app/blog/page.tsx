"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Art of Negative Space in Design",
    excerpt: "How intentional emptiness can speak louder than content — exploring the philosophy of breathing room in visual composition.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=1000",
  },
  {
    id: 2,
    title: "Building with Next.js: Lessons from the Field",
    excerpt: "After shipping three projects with Next.js 14, here are the patterns I keep reaching for and the pitfalls I have learned to avoid.",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000",
  },
  {
    id: 3,
    title: "Finding Your Visual Voice",
    excerpt: "A personal reflection on developing a distinctive aesthetic identity in a world flooded with algorithmic design trends.",
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen relative page-bg-main">
      <div className="absolute inset-0 z-0 page-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-gray-500 dark:text-white/70 uppercase mb-3">Thoughts and Writing</p>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-gray-900 dark:text-white">Blog</h1>
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
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white/70 dark:bg-black/20 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:border-blue-500 dark:focus:border-sky-300 transition-colors backdrop-blur-md"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((p) => (
              <article key={p.id} className="border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md hover:border-gray-400 dark:hover:border-white/40 transition-all duration-300 group">
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="aspect-video md:aspect-auto relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-white/5">
                    {p.image ? (
                      <Image src={p.image} alt={p.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    ) : (
                      <div className="p-8 text-center">
                        <span className="font-mono text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-white/60">{p.category}</span>
                        <p className="font-display text-5xl text-gray-200 dark:text-white/10 italic mt-2">
                          {p.id < 10 ? "0" + p.id : p.id}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-mono text-xs text-blue-600 dark:text-sky-300 uppercase tracking-widest">{p.category}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20" />
                        <span className="font-mono text-xs text-gray-400 dark:text-white/40 tracking-widest">{p.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20" />
                        <span className="font-mono text-xs text-gray-400 dark:text-white/40 tracking-widest">{p.readTime}</span>
                      </div>
                      <h2 className="font-display text-2xl font-light italic text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">{p.title}</h2>
                      <div className="mb-3 max-w-[60px] h-px bg-gray-300 dark:bg-white/30" />
                      <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed mb-6">{p.excerpt}</p>
                    </div>
                    <Link
                      href={"/blog/" + p.id}
                      className="self-start text-xs font-mono uppercase tracking-widest px-6 py-2 border border-gray-300 dark:border-white/30 text-gray-800 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all inline-flex items-center gap-2"
                    >
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="py-20 text-center border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-md">
              <p className="font-display text-2xl italic text-gray-500 dark:text-white/50">No posts found.</p>
              <p className="text-sm text-gray-400 dark:text-white/40 mt-2">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}