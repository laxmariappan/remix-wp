export default function Footer(){
    return(
        <>
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
         {/* footer - start */}
         <footer className="bg-white">
          <div className="bg-indigo-500 py-6">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="text-center md:text-left mb-3 md:mb-0">
                  <span className="text-gray-100 font-bold uppercase tracking-widest">Newsletter</span>
                  <p className="text-indigo-200">Subscribe to our newsletter</p>
                </div>
                <form className="w-full md:max-w-md flex gap-2">
                  <input placeholder="Email" className="w-full flex-1 bg-indigo-400 text-white placeholder-indigo-100 border border-white focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                  <button className="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Send</button>
                </form>
              </div>
            </div>
          </div>
          <div className="pt-12 lg:pt-16">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                <div className="col-span-full lg:col-span-2 ">
                  {/* logo - start */}
                  <div className="lg:-mt-2 mb-4">
                    <a href="/" className="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2" aria-label="logo">
                      Remix WP Demo
                    </a>
                  </div>
                  {/* logo - end */}
                  <p className="text-gray-500 sm:pr-8 mb-6">A quick demo by Lax Mariappan</p>
                  {/* social - start */}
                  <div className="flex gap-4">
                   
                    <a href="https://github.com/laxmariappan/remix-wp/" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                  {/* social - end */}
                </div>

                {/* nav - start */}
                <div>
                  <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Support</div>
                  <nav className="flex flex-col gap-4">
                    <div>
                      <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
                    </div>
                    <div>
                      <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Documentation</a>
                    </div>
                    <div>
                      <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Chat</a>
                    </div>
                    <div>
                      <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">FAQ</a>
                    </div>
                  </nav>
                </div>
                {/* nav - end */}
                {/* nav - start */}
                <div>
                  <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Legal</div>
                  <nav className="flex flex-col gap-4">
                    <div>
                      <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Terms of Service</a>
                    </div>
                    <div>
                      <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Privacy Policy</a>
                    </div>
                    <div>
                      <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Cookie settings</a>
                    </div>
                  </nav>
                </div>
                {/* nav - end */}
              </div>
              <div className="text-gray-400 text-sm text-center border-t py-8">Thanks to Remix team, WebDevStudios, and Flowrift Tailwind Template.</div>
            </div>
          </div>
        </footer>
        {/* footer - end */}
        </div>
        </>
    )
}