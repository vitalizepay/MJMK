import logo from "@/assets/logo.png";
import { Target, Eye, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <img src={logo} alt="MJMK" className="h-16 w-16 mx-auto mb-4 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">எங்களைப் பற்றி</h2>
          <div className="w-24 h-1.5 party-stripe mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            மக்கள் ஜனநாயக முன்னேற்ற கழகம் (MJMK) என்பது தமிழ்நாட்டு மக்களின் நலனுக்காக
            நிறுவப்பட்ட ஒரு அரசியல் இயக்கமாகும். ஜனநாயகம், சமத்துவம் மற்றும் அனைவருக்கும்
            முன்னேற்றம் என்ற கொள்கைகளின் அடிப்படையில் இந்த இயக்கம் செயல்படுகிறது.
            ஒடுக்கப்பட்ட சமூகங்களின் உரிமைகளுக்காகப் போராடுவதும், ஒவ்வொரு குடிமகனுக்கும்
            அடிப்படை மனித உரிமைகளும் வாய்ப்புகளும் கிடைப்பதை உறுதி செய்வதும் எங்கள் நோக்கமாகும்.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">எங்கள் இலக்கு</h3>
            <p className="text-muted-foreground leading-relaxed">
              ஒடுக்கப்பட்ட மக்களின் உரிமைகளுக்காகப் போராடி, சமூக நீதியை நிலைநாட்டுவது
              மற்றும் பொருளாதார வளர்ச்சியை அனைவருக்கும் கொண்டு சேர்ப்பது.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
              <Eye className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">எங்கள் பார்வை</h3>
            <p className="text-muted-foreground leading-relaxed">
              ஒவ்வொரு குடிமகனும் கல்வி, சுகாதாரம், வேலைவாய்ப்பு ஆகியவற்றில்
              சமவாய்ப்பைப் பெறும் ஒரு சமூகத்தை உருவாக்குவது.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Users className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">எங்கள் மதிப்புகள்</h3>
            <p className="text-muted-foreground leading-relaxed">
              ஜனநாயகம், ஒற்றுமை, சகிப்புத்தன்மை, சமூக சேவை
              ஆகியவை எங்கள் அடிப்படை மதிப்புகள் ஆகும்.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
