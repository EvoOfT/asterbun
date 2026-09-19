import { useState } from "react";

import Container from "../ui/Container";
import { navigation } from "../../data/navigation";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">

      <Container>

        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            Asterbun
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}

          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-2 text-slate-300 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((current) => !current)
            }
          >
            ☰
          </button>

        </nav>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">

            <div className="flex flex-col gap-4">

              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}

            </div>

          </div>
        )}

      </Container>

    </header>
  );
}

export default Navbar;