export default function Header(){
    return(
        <>
                {/* hero - start */}
                <div className="bg-white ">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                  <header className="flex justify-between items-center py-4 md:py-8 mb-4">
                    {/* logo - start */}
                    <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                    Remix WP Demo
                    </a>
                    {/* logo - end */}
                    {/* nav - start */}
                    <nav className="hidden lg:flex gap-12">
                      <a href="/posts" className="text-indigo-500 text-lg font-semibold">Blog</a>
                      <a href="/about" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
                    </nav>
                    {/* nav - end */}
                    {/* buttons - start */}
                    <a href="https://github.com/laxmariappan/remix-wp/" className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">View Code</a>
                    <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Menu
                    </button>
                    {/* buttons - end */}
                  </header>
                  <hr className="mt-4"></hr>
                </div>
              </div>
              {/* hero - end */}
        </>
    )
}