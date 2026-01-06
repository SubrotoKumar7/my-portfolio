import Link from "next/link";

export default function Projects() {
  return (
    <section id="project">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <section className="layout-container flex h-full grow flex-col">
          <div className="px-6 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-240 flex-1">
              {/* Page Heading */}
              <div className="flex flex-wrap justify-between gap-3 p-4 pt-8">
                <div className="flex min-w-72 flex-col gap-3">
                  <h1 className="text-4xl font-black leading-tight tracking-[-0.033em]">Building Digital Experiences</h1>
                  <p className="text-slate-500 dark:text-[#9dabb9] text-base font-normal leading-normal max-w-2xl">
                    A curated selection of full-stack applications built with the MERN stack (MongoDB, Express, React, Node.js). 
                    Focusing on performance, accessibility, and clean code.
                  </p>
                </div>
              </div>
              {/* Filter Chips */}
              <div className="flex gap-3 p-3 flex-wrap pr-4 pb-8">
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-4 transition-transform hover:scale-105 active:scale-95">
                  <p className="text-white text-sm font-medium leading-normal">All Projects</p>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#283039] hover:bg-slate-300 dark:hover:bg-[#353f4b] pl-4 pr-4 transition-colors">
                  <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">React</p>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#283039] hover:bg-slate-300 dark:hover:bg-[#353f4b] pl-4 pr-4 transition-colors">
                  <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">Node.js</p>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#283039] hover:bg-slate-300 dark:hover:bg-[#353f4b] pl-4 pr-4 transition-colors">
                  <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">MERN Stack</p>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#283039] hover:bg-slate-300 dark:hover:bg-[#353f4b] pl-4 pr-4 transition-colors">
                  <p className="text-slate-700 dark:text-white text-sm font-medium leading-normal">UI/UX</p>
                </button>
              </div>
              {/* Featured Hero Project */}
              <div className="@container mb-10">
                <div className="flex flex-col gap-6 p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm @[480px]:gap-8 @[864px]:flex-row group transition-all hover:shadow-md hover:border-primary/30">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-100 @[864px]:w-1/2 overflow-hidden relative" style={{backgroundImage: `url(./article-arena.png)`}}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="flex flex-col gap-6 @[480px]:min-w-100 @[480px]:gap-6 justify-center flex-1">
                    <div className="flex flex-col gap-3 text-left">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">Featured Project</span>
                      </div>
                      <h1 className="text-3xl font-black leading-tight tracking-tight">
                        Article Arena
                      </h1>
                      <div className="flex flex-wrap gap-2 my-1">
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">React</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Firebase</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Tailwind</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Stripe</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Express</span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">MongoDB</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                        Article Arena is an online article writing contest platform where contest creators can host contests, users can participate by submitting their articles, and winners are declared by contest creators. The platform supports three types of roles: Admin, Creators, and Users, each with a dedicated dashboard and functionalities
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <Link target="_blank" href={'https://article-arena.web.app'} className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                        <span>Live Demo</span>
                      </Link>
                      <Link target="_blank" href={'https://github.com/SubrotoKumar7/article-arena-client'} className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-transparent border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95">
                        <span className="material-symbols-outlined text-[20px]">code</span>
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project Grid Headline */}
              <h2 className="tracking-tight text-[28px] font-bold leading-tight px-4 text-left pb-6 pt-2">More Projects</h2>
              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
                {/* Project Card 1 */}
                <div className="group flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-primary/30">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url(./zap-shift.png)`}}>
                    </div>
                    <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">Express</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">MongoDB</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">Firebase</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">Stripe</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">React</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">ZapShift</h3>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                      A full-stack parcel delivery application with real-time parcel tracking, user dashboard, and user authentication using JWT.
                    </p>
                    <div className="mt-auto flex gap-3 pt-5">
                      <a target="_blank" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white" href="https://zap-shift-e9bf3.web.app/">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        Demo
                      </a>
                      <a target="_blank" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" href="https://github.com/SubrotoKumar7/Zap-Shift-Client">
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project Card 2 */}
                <div className="group flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-primary/30">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url(./nestora.png)`}}>
                    </div>
                    <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">React</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">Tailwind CSS</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">Firebase</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">Express</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">MongoDB</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Nestora</h3>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                      Nestora is a real estate web application built using modern technologies like React, TailwindCSS, Firebase, and more. The project is designed to offer a seamless experience for users to explore properties, view details, and contact agents.
                    </p>
                    <div className="mt-auto flex gap-3 pt-5">
                      <a target="_blank" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white" href="https://nestora-2c373.web.app">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        Demo
                      </a>
                      <a target="_blank" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" href="https://github.com/SubrotoKumar7/Nestora-Client">
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project Card 3 */}
                <div className="group flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-primary/30">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url(./cozy-paw.png)`}}>
                    </div>
                    <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">Firebase</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">React</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">CozyPaw</h3>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                      CozyPaw is a one-stop platform designed to ensure your furry friends stay warm, safe, and healthy during the chilly winter months. With a focus on providing high-quality pet care services, winter-ready clothing, grooming options, and expert advice, CozyPaw makes it easier than ever for pet owners to keep their pets cozy and comfortable.
                    </p>
                    <div className="mt-auto flex gap-3 pt-5">
                      <a target="_blank" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white" href="https://cozy-paw-app.web.app">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        Demo
                      </a>
                      <a target="_blank" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" href="https://github.com/SubrotoKumar7/cozy-paw">
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project Card 4 */}
                <div className="group flex flex-col overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-primary/30">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url(./getsoft.png)`}}>
                    </div>
                    <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">Tailwind CSS</span>
                      <span className="rounded bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase text-white">React</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">GetSoft</h3>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                      Welcome to GetSoft, a React-based app discovery platform, inspired by the design and functionality of the Google Play Store. Explore, search, and discover applications built using modern web technologies.
                    </p>
                    <div className="mt-auto flex gap-3 pt-5">
                      <a target="_blank" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white" href="https://getsoft.pages.dev">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        Demo
                      </a>
                      <a target="_blank" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800" href="https://github.com/SubrotoKumar7/GetSoft">
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* CTA Section */}
              <div className="mt-20 flex flex-col items-center justify-center gap-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-10 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div className="max-w-lg space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Interested in working together?</h2>
                  <p className="text-slate-500 dark:text-slate-400">
                    I&apos;m currently available for freelance work and full-time opportunities. Check out my resume or send me a message.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#contact" className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-all hover:bg-blue-600 active:scale-95">
                    Contact Me
                  </a>
                  <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-6 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95">
                    View Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
