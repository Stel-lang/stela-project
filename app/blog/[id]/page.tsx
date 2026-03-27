import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Art of Negative Space in Design",
    excerpt: "How intentional emptiness can speak louder than content — exploring the philosophy of breathing room in visual composition.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=1000",
    content: "When we design, we often focus on what to include: the images, the typography, the colors, the interactive elements. However, one of the most powerful tools in a designer's arsenal is something that isn't actually there: negative space.\\n\\nNegative space, or white space, is the empty area surrounding the elements of your design. It's the breathing room that allows your content to speak clearly without shouting over a cluttered background. By intentionally leaving areas blank, we can guide the user's eye, establish hierarchy, and create a sense of elegance and sophistication.\\n\\nIn my recent projects, I've found that reducing elements by even 20% can increase the perceived quality of the interface dramatically. It's not about making things empty; it's about making things purposeful."
  },
  {
    id: 2,
    title: "Building with Next.js: Lessons from the Field",
    excerpt: "After shipping three projects with Next.js 14, here are the patterns I keep reaching for and the pitfalls I have learned to avoid.",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000",
    content: "Next.js has revolutionized how we build React applications, particularly with the introduction of the App Router. The shift from client-side rendering to server-first components requires a fundamental change in how we think about data fetching and state management.\\n\\nOne pattern I've consistently relied on is keeping Client Components as small as possible, pushing them only to the absolute edges of the component tree where interactivity is required. This ensures the bulk of the application is rendered on the server, resulting in faster initial page loads and better SEO.\\n\\nAnother crucial lesson has been understanding the caching behavior. Next.js aggressively caches fetch requests by default, which is fantastic for performance but can lead to stale data if you aren't careful with revalidation tags."
  },
  {
    id: 3,
    title: "Finding Your Visual Voice",
    excerpt: "A personal reflection on developing a distinctive aesthetic identity in a world flooded with algorithmic design trends.",
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000",
    content: "We live in an era where Dribbble and Behance dictate what 'good design' looks like on any given Tuesday. The algorithm rewards consistency, leading to an ocean of interfaces that, while beautiful, are incredibly homogenous.\\n\\nFinding your visual voice isn't about rejecting trends entirely—it's about understanding why they exist and choosing whether or not they serve your specific project's narrative. For me, developing a personal aesthetic meant looking away from screens. Inspiration came from mid-century print magazines, brutalist architecture, and the quiet ambiance of independent coffee shops.\\n\\nYour visual voice is the intersection of your taste, your skills, and the unique problems you choose to solve. It takes time, experimentation, and a willingness to occasionally create something that the algorithm might entirely ignore."
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "rgba(8, 30, 38, 1)" }}>
        <h1 className="font-display text-4xl text-white italic">Post not found</h1>
      </div>
    );
  }

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
        style={{ background: "rgba(8, 30, 38, 0.75)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-sky-300">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-mono text-xs text-white/40 tracking-widest">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-mono text-xs text-white/40 tracking-widest">{post.readTime}</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-light italic text-white leading-tight mb-8">
            {post.title}
          </h1>

          {post.image && (
            <div className="aspect-video relative overflow-hidden border border-white/10 mb-12 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.split('\\n\\n').map((paragraph, i) => (
            <p key={i} className="text-white/80 leading-relaxed mb-6 font-light">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="font-mono text-xs tracking-widest uppercase text-white/40 text-center">
            Thanks for reading
          </p>
        </div>
      </div>
    </div>
  );
}
