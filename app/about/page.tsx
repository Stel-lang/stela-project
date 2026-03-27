export default function AboutPage() {
  const info = [
    { label: "Full Name", value: "Stelamae Sumalinog" },
    { label: "Nickname", value: "Stela" },
    { label: "Age", value: "21" },
    { label: "Date of Birth", value: "11-17-2004" },
    { label: "Gender", value: "Female" },
  ];

  const interests = [
    "UI/UX Design & Visual Communication",
    "Web Development & Interactive Experiences",
    "Photography & Digital Art",
    "Typography & Brand Identity",
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/ee/f8/1f/eef81fc35eb44f7960349889da32ed37.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: "rgba(0, 0, 0, 0.4)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-white/70 uppercase mb-3">Who I am</p>
          <h1 className="font-display text-5xl md:text-6xl font-light italic text-white">About Me</h1>
          <div className="mt-6 max-w-xs h-px bg-white/30" />
        </div>

        <section className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="relative">
            <div className="aspect-[4/5] bg-white/10 border border-white/10 overflow-hidden">
              <img
                src="/stelay.jpg"
                alt="Stelamae Sumalinog"
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-white/20 -z-10" />
          </div>

          <div className="pt-4">
            <h2 className="font-display text-3xl font-light italic mb-6 text-white">Hello, I am Stelamae</h2>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>I am a passionate designer and developer based in the Philippines, dedicated to creating meaningful digital experiences.</p>
              <p>My work spans brand identity, web development, and visual storytelling. I believe great design should feel effortless.</p>
              <p>Whether crafting a pixel-perfect interface or building robust front-end code, I bring the same attention to detail to every project.</p>
            </div>
          </div>
        </section>

        <div className="h-px bg-white/10 mb-20" />

        <section className="mb-20">
          <div className="mb-8">
            <p className="font-mono text-xs tracking-[0.3em] text-white/60 uppercase mb-2">The Details</p>
            <h2 className="font-display text-3xl font-light italic text-white">Personal Information</h2>
          </div>
          <div className="border border-white/10 divide-y divide-white/10 bg-black/20 backdrop-blur-md">
            {info.map((item) => (
              <div key={item.label} className="grid grid-cols-2 px-6 py-4 hover:bg-white/5 transition-colors">
                <span className="font-mono text-xs tracking-widest text-white/40 uppercase self-center">{item.label}</span>
                <span className="text-sm text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-white/10 mb-20" />

        <section>
          <div className="mb-8">
            <p className="font-mono text-xs tracking-[0.3em] text-white/60 uppercase mb-2">Passions</p>
            <h2 className="font-display text-3xl font-light italic text-white">Interests</h2>
          </div>
          <ul className="space-y-4">
            {interests.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <span className="mt-1 w-5 h-5 border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                </span>
                <span className="text-sm text-white/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}