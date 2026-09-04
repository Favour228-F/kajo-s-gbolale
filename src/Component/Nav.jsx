import { useState } from "react";
export default Nav;
function Nav() {
  const [menu, setMenu] = useState(false);

  function update() {
    setMenu(!menu);
  }

  return (
    <nav className="bg-black text-white border-b border-green-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            <span className="text-white">Text</span>
            <span className="text-green-500">Books</span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                search here
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                View us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>

          <button className="hidden md:block bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full font-semibold transition">
            About
          </button>

          {/* Mobile Icon */}
          <button
            onClick={update}
            className="md:hidden text-green-400 text-3xl"
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4 text-center">
              <li>
                <a href="#" className="block py-2 hover:text-green-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="block py-2 hover:text-green-400">
                  services
                </a>
              </li>

              <li>
                <a href="#" className="block py-2 hover:text-green-400">
                  Search here
                </a>
              </li>

              <li>
                <a href="#" className="block py-2 hover:text-green-400">
                  View us
                </a>
              </li>

              <li>
                <a href="#" className="block py-2 hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>

            <button className="w-full mt-5 bg-green-500 hover:bg-green-600 py-3 rounded-full font-semibold">
              about
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
