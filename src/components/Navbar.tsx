import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "முகப்பு", href: "#home" },
  { label: "எங்களைப் பற்றி", href: "#about" },
  { label: "எங்கள் பணிகள்", href: "#work" },
  { label: "நிகழ்வுகள்", href: "#events" },
  { label: "படத்தொகுப்பு", href: "#gallery" },
  { label: "தொடர்புகொள்ள", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="MJMK லோகோ" className="h-12 w-12 rounded-full object-cover" />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-primary leading-tight">மக்கள் ஜனநாயக</p>
            <p className="text-sm font-bold text-secondary leading-tight">முன்னேற்ற கழகம்</p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
