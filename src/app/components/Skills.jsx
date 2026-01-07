export default function Skills() {
  return (
    <section id="skills">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-6 lg:px-40 flex flex-1 justify-center py-10">
            <div className="layout-content-container flex flex-col max-w-300 flex-1">
              {/* Header Section */}
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">
                  Skills &amp; Technologies
                </h2>
                <p className="text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-175 text-[#637588] dark:text-[#9dabb9]">
                  A comprehensive overview of my technical stack. As a MERN stack developer, I specialize in building scalable, high-performance full-stack applications using modern tools and best practices.
                </p>
              </div>
              {/* Skills Grid - Card Layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {/* HTML5 */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">html</span>
                  </div>
                  <h3 className="text-base font-bold text-center">HTML5</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Frontend</span>
                </div>
                {/* CSS3 */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">css</span>
                  </div>
                  <h3 className="text-base font-bold text-center">CSS3</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Frontend</span>
                </div>
                {/* JavaScript */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">javascript</span>
                  </div>
                  <h3 className="text-base font-bold text-center">JavaScript</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Frontend</span>
                </div>
                {/* Tailwind CSS */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">palette</span>
                  </div>
                  <h3 className="text-base font-bold text-center">Tailwind CSS</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Frontend</span>
                </div>
                {/* React */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">code</span>
                  </div>
                  <h3 className="text-base font-bold text-center">React</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Frontend</span>
                </div>
                {/* Next.js */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">web</span>
                  </div>
                  <h3 className="text-base font-bold text-center">Next.js</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Frontend</span>
                </div>
                {/* Node.js */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">dns</span>
                  </div>
                  <h3 className="text-base font-bold text-center">Node.js</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Backend</span>
                </div>
                {/* Express.js */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">api</span>
                  </div>
                  <h3 className="text-base font-bold text-center">Express.js</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Backend</span>
                </div>
                {/* MongoDB */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">storage</span>
                  </div>
                  <h3 className="text-base font-bold text-center">MongoDB</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Database</span>
                </div>
                {/* Firebase */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">local_fire_department</span>
                  </div>
                  <h3 className="text-base font-bold text-center">Firebase</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Database</span>
                </div>
                {/* Git & GitHub */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">source</span>
                  </div>
                  <h3 className="text-base font-bold text-center">Git &amp; GitHub</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Tools</span>
                </div>
                {/* Linux */}
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark p-6 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl">laptop</span>
                  </div>
                  <h3 className="text-base font-bold text-center">Linux</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Tools</span>
                </div>
              </div>
              {/* Additional Certifications or Summary */}
              <div className="mt-8 px-4 py-6">
                <div className="rounded-xl border border-dashed border-[#3b4754] bg-surface-light/50 dark:bg-surface-dark/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col gap-2 text-center md:text-left">
                    <h3 className="text-xl font-bold">Continuous Learning</h3>
                    <p className="text-[#637588] dark:text-[#9dabb9] max-w-lg">I&apos;m currently exploring Next.js, Always open to learning new technologies to solve complex problems.</p>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-[#283039] px-6 py-3 text-white transition-colors hover:bg-[#3b4754]">
                    <span className="material-symbols-outlined">school</span>
                    <span className="font-medium">Explore New Technology</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
