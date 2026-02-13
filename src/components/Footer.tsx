import logo from "@/assets/logo.png";
import { Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="h-1.5 party-stripe" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="MJMK" className="h-14 w-14 rounded-full" />
              <div>
                <p className="font-bold text-lg">மக்கள் ஜனநாயக</p>
                <p className="font-bold text-lg text-party-gold">முன்னேற்ற கழகம்</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              தமிழ்நாட்டு மக்களின் உரிமைகளுக்காகவும், சமூக நீதிக்காகவும் போராடும் இயக்கம்.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">விரைவு இணைப்புகள்</h4>
            <div className="space-y-2 text-background/70 text-sm">
              <a href="#home" className="block hover:text-party-gold transition-colors">முகப்பு</a>
              <a href="#about" className="block hover:text-party-gold transition-colors">எங்களைப் பற்றி</a>
              <a href="#work" className="block hover:text-party-gold transition-colors">எங்கள் பணிகள்</a>
              <a href="#events" className="block hover:text-party-gold transition-colors">நிகழ்வுகள்</a>
              <a href="#contact" className="block hover:text-party-gold transition-colors">தொடர்புகொள்ள</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">தொடர்பு</h4>
            <div className="space-y-3 text-background/70 text-sm">
              <a href="tel:8610227387" className="flex items-center gap-2 hover:text-party-gold transition-colors">
                <Phone size={14} /> 8610227387
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> திருப்பூர், தமிழ்நாடு 641606
              </div>
              <a href="https://www.facebook.com/profile.php?id=100064672498498" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-party-gold transition-colors">
                <Facebook size={14} /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} மக்கள் ஜனநாயக முன்னேற்ற கழகம் (MJMK). அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
