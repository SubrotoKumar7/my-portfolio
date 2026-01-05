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
              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-4">
                {/* Frontend Card */}
                <div className="flex flex-col rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 px-6 pt-6 pb-2 border-b border-gray-100 dark:border-gray-800">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">html</span>
                    </div>
                    <h3 className="tracking-tight text-xl font-bold leading-tight">Frontend Development</h3>
                  </div>
                  <div className="flex flex-col gap-6 p-6">
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">code</span>
                          <p className="text-base font-medium leading-normal">React.js</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Advanced</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">css</span>
                          <p className="text-base font-medium leading-normal">Tailwind CSS</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Advanced</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">javascript</span>
                          <p className="text-base font-medium leading-normal">JavaScript (ES6+)</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Expert</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '98%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">data_object</span>
                          <p className="text-base font-medium leading-normal">Redux Toolkit</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Intermediate</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Backend Card */}
                <div className="flex flex-col rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 px-6 pt-6 pb-2 border-b border-gray-100 dark:border-gray-800">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">settings_ethernet</span>
                    </div>
                    <h3 className="tracking-tight text-xl font-bold leading-tight">Backend Development</h3>
                  </div>
                  <div className="flex flex-col gap-6 p-6">
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">dns</span>
                          <p className="text-base font-medium leading-normal">Node.js</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Advanced</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '88%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">api</span>
                          <p className="text-base font-medium leading-normal">Express.js</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Advanced</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">hub</span>
                          <p className="text-base font-medium leading-normal">GraphQL</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Intermediate</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">security</span>
                          <p className="text-base font-medium leading-normal">JWT Auth</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Advanced</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Database Card */}
                <div className="flex flex-col rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 px-6 pt-6 pb-2 border-b border-gray-100 dark:border-gray-800">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">database</span>
                    </div>
                    <h3 className="tracking-tight text-xl font-bold leading-tight">Database Management</h3>
                  </div>
                  <div className="flex flex-col gap-6 p-6">
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">storage</span>
                          <p className="text-base font-medium leading-normal">MongoDB</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Advanced</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">table_chart</span>
                          <p className="text-base font-medium leading-normal">PostgreSQL</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Intermediate</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '70%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">schema</span>
                          <p className="text-base font-medium leading-normal">Mongoose ODM</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Advanced</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">cloud_queue</span>
                          <p className="text-base font-medium leading-normal">Redis</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Beginner</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '40%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tools Card */}
                <div className="flex flex-col rounded-xl border border-[#e5e7eb] dark:border-[#283039] bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 px-6 pt-6 pb-2 border-b border-gray-100 dark:border-gray-800">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined">build</span>
                    </div>
                    <h3 className="tracking-tight text-xl font-bold leading-tight">Tools</h3>
                  </div>
                  <div className="flex flex-col gap-6 p-6">
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">deployed_code</span>
                          <p className="text-base font-medium leading-normal">Docker</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Intermediate</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">cloud</span>
                          <p className="text-base font-medium leading-normal">AWS</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Intermediate</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">source</span>
                          <p className="text-base font-medium leading-normal">Git &amp; GitHub</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Expert</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-primary">send</span>
                          <p className="text-base font-medium leading-normal">Postman</p>
                        </div>
                        <p className="text-sm font-normal text-[#637588] dark:text-[#9dabb9]">Advanced</p>
                      </div>
                      <div className="rounded-full bg-[#e5e7eb] dark:bg-[#3b4754] h-2 w-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  </div>
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
