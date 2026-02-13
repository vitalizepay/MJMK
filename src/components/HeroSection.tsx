import leaderImg from "@/assets/leader.png";
import logo from "@/assets/logo.png";
import rallyBg from "@/assets/rally-bg.jpg";
import { Facebook, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={rallyBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Party stripe top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 party-stripe" />

      <div className="container mx-auto relative z-10 px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <img src={logo} alt="MJMK" className="h-24 w-24 mx-auto lg:mx-0 rounded-full border-4 border-primary-foreground/30" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight text-shadow">
              மக்கள் ஜனநாயக<br />
              <span className="text-party-gold">முன்னேற்ற கழகம்</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
              தமிழ்நாட்டு மக்களின் உரிமைகளுக்காகவும், சமூக நீதிக்காகவும், பொருளாதார வளர்ச்சிக்காகவும் போராடும் இயக்கம்.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
              >
                இயக்கத்தில் இணையுங்கள்
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064672498498"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3.5 rounded-lg font-bold transition-all hover:scale-105 shadow-lg"
              >
                <Facebook size={20} />
                Facebook
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <p className="text-3xl font-black text-party-gold animate-count-up">86K+</p>
                <p className="text-sm text-primary-foreground/70">விருப்பங்கள்</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-party-gold animate-count-up">104K+</p>
                <p className="text-sm text-primary-foreground/70">பின்தொடர்பவர்கள்</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-party-gold animate-count-up">1000+</p>
                <p className="text-sm text-primary-foreground/70">தொண்டர்கள்</p>
              </div>
            </div>
          </div>

          {/* Right - Leader Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-party-gold shadow-2xl">
                <img src={leaderImg} alt="எஸ்.இப்ராஹீம்பாதுஷா" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                <p className="text-sm font-bold">எஸ்.இப்ராஹீம்பாதுஷா</p>
                <p className="text-xs text-center opacity-80">நிறுவனர் & தலைவர்</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur-sm py-3">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-secondary-foreground text-sm">
          <a href="tel:8610227387" className="flex items-center gap-2 hover:text-party-gold transition-colors">
            <Phone size={16} /> 8610227387
          </a>
          <span>📍 திருப்பூர், தமிழ்நாடு 641606</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
