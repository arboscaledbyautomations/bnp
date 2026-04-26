import { Link } from "react-router";

export function Footer() {
  return (
    <footer
      className="bg-primary text-primary-foreground relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(45deg, rgba(201, 168, 124, 0.03) 25%, transparent 25%, transparent 75%, rgba(201, 168, 124, 0.03) 75%),
          linear-gradient(45deg, rgba(201, 168, 124, 0.03) 25%, transparent 25%, transparent 75%, rgba(201, 168, 124, 0.03) 75%),
          linear-gradient(to right, rgba(42, 24, 16, 0.3), transparent, rgba(42, 24, 16, 0.3))
        `,
        backgroundSize: '60px 60px, 60px 60px, 100% 100%',
        backgroundPosition: '0 0, 30px 30px, 0 0',
        borderTop: '2px solid rgba(201, 168, 124, 0.3)',
      }}
    >
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" fill="none" className="text-accent">
          <circle cx="0" cy="0" r="80" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="0" cy="0" r="60" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="0" cy="0" r="40" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-accent">
          <path d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z"/>
        </svg>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-foreground/95 p-1">
                <img
                  src="/src/imports/628416718_1880669882553704_5731532768269270336_n.jpg"
                  alt="BNP Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-2xl tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Bread N Pastry Co.
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Handcrafted breads and pastries, baked fresh daily with passion and tradition.
            </p>
          </div>

          <div>
            <h3 className="text-lg uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Brgy, Timalan Balsahan</li>
              <li>Naic, Cavite</li>
              <li>+63 192-168-2561</li>
              <li>breadnpastry.co@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg uppercase tracking-wider mb-6">Hours</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Mon-Fri: 7:00 AM - 7:00 PM</li>
              <li>Saturday: 8:00 AM - 8:00 PM</li>
              <li>Sunday: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-primary-foreground/60 text-sm text-center">
            © 2026 Bread N Pastry Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
