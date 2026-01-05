import Link from "next/link";

export default function About() {
  return (
    <section id="about">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Main Content Layout */}
        <section className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 py-10 md:py-16">
          <div className="max-w-[1000px] mx-auto flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm">
                <span className="w-8 h-[2px] bg-primary rounded-full"></span>
                <span>Discover</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">About Me</h1>
            </div>
            {/* Bio & Hero Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Visual Column (Image) */}
              <div className="md:col-span-5 lg:col-span-4 order-1 md:order-2">
                <div className="group relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-white/10">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-10 opacity-60"></div>
                  <img alt="Developer Portrait" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="/me.png"/>
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-surface-dark/90 backdrop-blur-sm border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        <span className="material-symbols-outlined">code</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">Current Focus</p>
                        <p className="text-sm font-bold text-white">Full Stack Architecture</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Column (Bio) */}
              <div className="md:col-span-7 lg:col-span-8 order-2 md:order-1 flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Architecting the Web, <span className="text-primary">One Component at a Time</span>
                  </h2>
                  <div className="space-y-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                      Hello! I&apos;m a passionate <strong className="text-primary font-semibold">MERN Stack Developer</strong> based in Bangladesh. My Name is Subroto Kumar. I am a passionate and dedicated MERN Stack Web Developer.
                    </p>
                    <p>
                      Fast forward to today, I specialize in building robust, scalable web applications using MongoDB, Express, React, and Node.js. I thrive on solving complex problems and turning abstract ideas into functional, user-centric digital experiences.
                    </p>
                  </div>
                </div>
                {/* Mission Block */}
                <div className="relative overflow-hidden rounded-xl bg-surface-dark border-l-4 border-primary p-6 md:p-8">
                  <div className="absolute top-4 right-4 text-primary/10">
                    <span className="material-symbols-outlined text-6xl">format_quote</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2">My Mission</h3>
                    <p className="text-slate-300 italic font-medium text-lg">
                      &quot;To build scalable, accessible, and high-performance applications that not only solve real-world problems but also provide an enjoyable user experience.&quot;
                    </p>
                  </div>
                </div>
                {/* Skills / Tech Stack */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Tech Stack &amp; Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {/* Skill Badges */}
                    <span className="inline-flex items-center rounded-lg bg-surface-dark border border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      <span className="mr-1.5 material-symbols-outlined text-[16px]">javascript</span> JavaScript (ES6+)
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-surface-dark border border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      <span className="mr-1.5 material-symbols-outlined text-[16px]">code_blocks</span> React.js
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-surface-dark border border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      <span className="mr-1.5 material-symbols-outlined text-[16px]">dns</span> Node.js
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-surface-dark border border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      <span className="mr-1.5 material-symbols-outlined text-[16px]">database</span> MongoDB
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-surface-dark border border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      <span className="mr-1.5 material-symbols-outlined text-[16px]">webhook</span> Express
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-surface-dark border border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-default">
                      <span className="mr-1.5 material-symbols-outlined text-[16px]">style</span> Tailwind CSS
                    </span>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#contact" className="flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white font-bold text-sm tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                    Contact Me
                  </a>
                  <button className="flex items-center justify-center h-12 px-6 rounded-lg bg-surface-dark border border-gray-700 text-white font-bold text-sm tracking-wide hover:bg-gray-800 hover:border-gray-600 transition-all">
                    <span className="mr-2 material-symbols-outlined text-[20px]">description</span>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-4">
              {/* Stat Card 1 */}
              <div className="flex flex-col gap-1 p-6 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/20 transition-all group">
                <div className="mb-2 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <p className="text-4xl font-extrabold text-white tracking-tight">1+</p>
                <p className="text-sm font-medium text-gray-400">Years of Experience</p>
              </div>
              {/* Stat Card 2 */}
              <div className="flex flex-col gap-1 p-6 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/20 transition-all group">
                <div className="mb-2 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">folder_managed</span>
                </div>
                <p className="text-4xl font-extrabold text-white tracking-tight">7+</p>
                <p className="text-sm font-medium text-gray-400">Projects Completed</p>
              </div>
              {/* Stat Card 3 */}
              <div className="flex flex-col gap-1 p-6 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/20 transition-all group">
                <div className="mb-2 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">local_cafe</span>
                </div>
                <p className="text-4xl font-extrabold text-white tracking-tight">1k+</p>
                <p className="text-sm font-medium text-gray-400">Cups of Coffee</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
