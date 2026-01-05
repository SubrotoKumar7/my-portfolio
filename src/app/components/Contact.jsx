export default function Contact() {
  return (
    <section id="contact">
      {/* Main Content */}
      <section className="grow flex justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="layout-content-container flex flex-col max-w-300 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Left Column: Info & Contact Cards */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-primary text-xs font-bold uppercase tracking-wide">Available for Work</span>
                </div>
                <h1 className="text-white tracking-tight text-4xl sm:text-5xl font-black leading-tight">
                  Let&apos;s Build Something<br/><span className="text-primary">Together</span>
                </h1>
                <p className="text-[#9dabb9] text-lg font-normal leading-relaxed max-w-135">
                  I specialize in the MERN stack and I&apos;m currently open to new opportunities and freelance projects. Whether you have a technical question or a business idea, I&apos;m here to help.
                </p>
              </div>
              <div className="grid gap-4">
                {/* Email Card */}
                <div className="flex gap-4 rounded-xl border border-[#3b4754] bg-[#1c2127] p-5 items-center hover:border-primary/50 transition-colors group">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-[#283039] group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-white group-hover:text-primary" style={{fontSize: '24px'}}>mail</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-white text-base font-bold leading-tight">Email Me</h2>
                    <a className="text-[#9dabb9] hover:text-primary transition-colors text-sm font-normal" href="mailto:subrotokumar7@outlook.com">subrotokumar7@outlook.com</a>
                  </div>
                </div>
                {/* Socials Card */}
                <div className="flex gap-4 rounded-xl border border-[#3b4754] bg-[#1c2127] p-5 items-center hover:border-primary/50 transition-colors group">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-[#283039] group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-white group-hover:text-primary" style={{fontSize: '24px'}}>share</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-white text-base font-bold leading-tight">Follow Me</h2>
                    <div className="flex gap-3 mt-1">
                      <a className="text-[#9dabb9] hover:text-white text-sm transition-colors" target="_blank" href="https://www.linkedin.com/in/subrotokumar7/">LinkedIn</a>
                      <span className="text-[#3b4754]">•</span>
                      <a className="text-[#9dabb9] hover:text-white text-sm transition-colors" target="_blank" href="https://github.com/SubrotoKumar7">GitHub</a>
                      <span className="text-[#3b4754]">•</span>
                      <a className="text-[#9dabb9] hover:text-white text-sm transition-colors" target="_blank" href="https://www.facebook.com/subrotokumar17">Facebook</a>
                    </div>
                  </div>
                </div>
                {/* Location Card */}
                <div className="flex gap-4 rounded-xl border border-[#3b4754] bg-[#1c2127] p-5 items-center hover:border-primary/50 transition-colors group">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-[#283039] group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-white group-hover:text-primary" style={{fontSize: '24px'}}>location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-white text-base font-bold leading-tight">Location</h2>
                    <p className="text-[#9dabb9] text-sm font-normal">Remote / Kurigram, Rangpur, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Form */}
            <div className="relative w-full">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-[#1c2127] border border-[#3b4754] rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <label className="flex flex-col flex-1 gap-2">
                      <span className="text-white text-sm font-medium">Your Name</span>
                      <input className="w-full rounded-lg border border-[#3b4754] bg-[#111418] text-white px-4 h-12 placeholder:text-[#9dabb9]/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" type="text"/>
                    </label>
                    <label className="flex flex-col flex-1 gap-2">
                      <span className="text-white text-sm font-medium">Email Address</span>
                      <input className="w-full rounded-lg border border-[#3b4754] bg-[#111418] text-white px-4 h-12 placeholder:text-[#9dabb9]/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" type="email"/>
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">Subject</span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#9dabb9]" style={{fontSize: '20px'}}>tag</span>
                      <input className="w-full rounded-lg border border-[#3b4754] bg-[#111418] text-white pl-11 pr-4 h-12 placeholder:text-[#9dabb9]/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Project Inquiry, Job Offer, etc." type="text"/>
                    </div>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-white text-sm font-medium">Message</span>
                    <textarea className="w-full rounded-lg border border-[#3b4754] bg-[#111418] text-white p-4 min-h-40 resize-y placeholder:text-[#9dabb9]/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Tell me a bit about your project or what you're looking for..."></textarea>
                  </label>
                  <button className="mt-2 w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                    <span>Send Message</span>
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-[#283039] bg-background-dark py-8 mt-auto">
        <div className="px-10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-360 mx-auto w-full">
          <p className="text-[#9dabb9] text-sm">© {new Date().getFullYear()} Subroto Kumar. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
