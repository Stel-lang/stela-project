import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <p className="font-mono text-xs tracking-[0.3em] text-white/70 uppercase mb-3">Thoughts and Writing</p>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-white">Blog</h1>
          <div className="mt-6 max-w-xs h-px bg-white/30" />
        </div>

        <div className="space-y-6">
          {posts.map((p) => (
            <article key={p.id} className="border border-white/10 bg-black/30 backdrop-blur-md hover:border-white/40 transition-all duration-300 group">
              <div className="grid md:grid-cols-[280px_1fr]">
                <div className="aspect-video md:aspect-auto relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 bg-white/5">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  ) : (
                    <div className="p-8 text-center">
                      <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/60">{p.category}</span>
                      <p className="font-display text-5xl text-white/10 italic mt-2">
                        {p.id < 10 ? "0" + p.id : p.id}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono text-xs text-white/40 tracking-widest">{p.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="font-mono text-xs text-white/40 tracking-widest">{p.readTime}</span>
                    </div>
                    <h2 className="font-display text-2xl font-light italic text-white mb-3 group-hover:text-sky-300 transition-colors">{p.title}</h2>
                    <div className="mb-3 max-w-[60px] h-px bg-white/30" />
                    <p className="text-sm text-white/70 leading-relaxed mb-6">{p.excerpt}</p>
                  </div>
                  <Link
                    href={"/blog/" + p.id}
                    className="self-start text-xs font-mono uppercase tracking-widest px-6 py-2 border border-white/30 text-white hover:bg-white hover:text-black transition-all inline-flex items-center gap-2"
                  >
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}