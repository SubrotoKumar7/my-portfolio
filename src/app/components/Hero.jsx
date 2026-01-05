export default function Hero() {
  return (
    <section id="hero">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-xl">terminal</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Subroto</span>
            </div>
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#about">About</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#project">Projects</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#skills">Skills</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#contact">Contact</a>
            </div>
            {/* CTA */}
            <div className="hidden md:flex items-center">
              <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Resume</span>
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 dark:text-gray-300 hover:text-white">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="flex flex-col min-h-[calc(100vh-64px)] justify-center">
        {/* Hero Section */}
        <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto lg:mx-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Available for Hire</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                  Building Scalable <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Web Applications</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Hi, I&apos;m Subroto Kumar. A Full Stack Developer specializing in the MERN stack. I transform complex requirements into elegant, robust digital solutions using MongoDB, Express, React, and Node.js.
                </p>
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                  <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white h-12 px-8 rounded-lg text-base font-bold transition-all shadow-lg shadow-primary/25">
                    <span>View My Work</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white h-12 px-8 rounded-lg text-base font-bold transition-all">
                    <span>Contact Me</span>
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </button>
                </div>
                {/* Tech Stack Chips */}
                <div className="flex flex-col items-center lg:items-start gap-4 mt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500">My Tech Stack</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {/* MongoDB */}
                    <div className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors cursor-default">
                      <span className="material-symbols-outlined text-green-500 group-hover:scale-110 transition-transform">database</span>
                      <span className="text-sm font-medium">MongoDB</span>
                    </div>
                    {/* Express */}
                    <div className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors cursor-default">
                      <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform">webhook</span>
                      <span className="text-sm font-medium">Express.js</span>
                    </div>
                    {/* React */}
                    <div className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors cursor-default">
                      <span className="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform">code_blocks</span>
                      <span className="text-sm font-medium">React</span>
                    </div>
                    {/* Node */}
                    <div className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors cursor-default">
                      <span className="material-symbols-outlined text-green-600 group-hover:scale-110 transition-transform">dns</span>
                      <span className="text-sm font-medium">Node.js</span>
                    </div>
                    {/* Tailwind */}
                    <div className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors cursor-default">
                      <span className="material-symbols-outlined text-cyan-400 group-hover:scale-110 transition-transform">brush</span>
                      <span className="text-sm font-medium">Tailwind</span>
                    </div>
                  </div>
                </div>
                {/* Social Proof Links */}
                <div className="flex items-center justify-center lg:justify-start gap-6 mt-4">
                  <a className="text-gray-500 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">code</span> {/* GitHub rep */}
                  </a>
                  <a className="text-gray-500 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">work</span> {/* LinkedIn rep */}
                  </a>
                  <a className="text-gray-500 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-2xl">flutter_dash</span> {/* Twitter rep */}
                  </a>
                </div>
              </div>
              {/* Right Visual */}
              <div className="relative w-full h-full flex justify-center items-center lg:justify-end">
                {/* Abstract Background Decoration */}
                <div className="absolute -z-10 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl opacity-30"></div>
                {/* Main Image Card */}
                <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-surface-dark group">
                  {/* Code Snippet Decor */}
                  <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-lg hidden sm:block">
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-24 bg-gray-600 rounded opacity-50"></div>
                      <div className="h-1.5 w-16 bg-primary rounded opacity-70"></div>
                      <div className="h-1.5 w-20 bg-gray-600 rounded opacity-50"></div>
                    </div>
                  </div>
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7qGE50Eiv5R5U1TUfmCKazD87qR0jczSm9PsfedTKH9OPR_9p-0kXGMuzHNtNuD_UgzqBnTtkcIecAWtmZ6-wbZvQtLo9B1jutYS40Q7hok4FFWknFjbffMn1qWRJsyDB0CVJyWSsS4Neh-0Ub_ssefKVgG2YaTzYKez1e6MbHvlHylUcdlBEoTfMgGwpArUKJYKVnQ4UESuyh8STYm7tRs1Ud__a3EC7gmgiQ21D1FaIxz2_PuRQSpXVI2uQBFC0JsxGVYg5gI7')"}}>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                  </div>
                  {/* Floater Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface-dark/90 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg transform transition-transform group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-primary/20 rounded-lg text-primary">
                        <span className="material-symbols-outlined">rocket_launch</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">100+ Projects Completed</p>
                        <p className="text-gray-400 text-xs mt-0.5">Delivering excellence since 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
