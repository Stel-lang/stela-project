import Image from "next/image";

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
          <p className="font-mono text-xs tracking-[0.3em] text-white/70 uppercase mb-3">My Work</p>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-white">My Projects</h1>
          <div className="mt-6 max-w-xs h-px bg-white/30" />
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.id} className="border border-white/10 bg-black/30 backdrop-blur-md hover:border-white/40 transition-all duration-300 shadow-2xl">
              <div className="px-6 pt-6 pb-4 border-b border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-white/40 uppercase mb-1">{p.subtitle}</p>
                    <h2 className="font-display text-2xl font-light italic text-white">{p.title}</h2>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-xs text-white/60 border border-white/20 px-3 py-1">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2">
                <div className={"aspect-video relative overflow-hidden flex items-center justify-center border-r border-white/10 " + p.bgClass}>
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <span className="font-display text-7xl text-white/10 italic">{p.id}</span>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-between bg-black/10">
                  <p className="text-sm text-white/80 leading-relaxed mb-6">{p.description}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-xs font-mono uppercase tracking-widest px-6 py-2 border border-white/30 text-white hover:bg-white hover:text-black transition-all"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}