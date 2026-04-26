import { Link, useLocation } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const isHomePage = location.pathname === "/";

  const links = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const navBgClass = isHomePage && !isScrolled
    ? "bg-transparent"
    : "bg-primary/95 backdrop-blur-sm shadow-lg";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
      style={{
        backgroundImage: isHomePage && !isScrolled ? 'none' : `
          linear-gradient(135deg, rgba(201, 168, 124, 0.03) 25%, transparent 25%),
          linear-gradient(225deg, rgba(201, 168, 124, 0.03) 25%, transparent 25%),
          linear-gradient(45deg, rgba(201, 168, 124, 0.03) 25%, transparent 25%),
          linear-gradient(315deg, rgba(201, 168, 124, 0.03) 25%, transparent 25%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 0, 10px -10px, 0px 10px',
        borderBottom: isHomePage && !isScrolled ? 'none' : '1px solid rgba(201, 168, 124, 0.2)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-foreground/95 p-1 transition-transform group-hover:scale-105">
            <img
              src="/src/imports/628416718_1880669882553704_5731532768269270336_n.jpg"
              alt="BNP Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <span
              className="text-xl tracking-wide text-primary-foreground relative inline-block"
              style={{
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.05em',
              }}
            >
              <span className="relative">
                Bread N Pastry Co.
                <span
                  className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60"
                  style={{ transform: 'scaleX(0.8)' }}
                />
              </span>
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-primary-foreground/90 hover:text-primary-foreground transition-colors uppercase tracking-widest text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
