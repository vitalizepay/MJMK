import { HandCoins, GraduationCap, HeartHandshake, Megaphone } from "lucide-react";

const programs = [
  {
    icon: HandCoins,
    title: "நிதி உதவித் திட்டங்கள்",
    description: "சிறு கடன் திட்டங்கள் மூலம் ஏழைகளுக்கும் நடுத்தர வர்க்கத்தினருக்கும் பொருளாதார உதவி வழங்குதல். கடன் பகுதி 6, 7, 8, 9 போன்ற திட்டங்கள் வெற்றிகரமாக நடைபெற்று வருகின்றன.",
    color: "primary" as const,
  },
  {
    icon: GraduationCap,
    title: "கல்வி மேம்பாடு",
    description: "ஏழை மாணவர்களுக்கு கல்வி உதவித்தொகை, புத்தகங்கள் மற்றும் கல்வி சாதனங்கள் வழங்குதல்.",
    color: "secondary" as const,
  },
  {
    icon: HeartHandshake,
    title: "சமூக சேவை",
    description: "இயற்கை பேரிடர்களின் போது நிவாரண பணிகள், இரத்ததான முகாம்கள், மருத்துவ முகாம்கள் நடத்துதல்.",
    color: "accent" as const,
  },
  {
    icon: Megaphone,
    title: "மக்கள் குரல்",
    description: "மக்களின் பிரச்சனைகளை அரசின் கவனத்திற்கு கொண்டு செல்லும் ஆர்ப்பாட்டங்கள் மற்றும் போராட்டங்கள்.",
    color: "primary" as const,
  },
];

const colorMap = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
};

const WorkSection = () => {
  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">எங்கள் பணிகள்</h2>
          <div className="w-24 h-1.5 party-stripe mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            மக்களுக்காக நாங்கள் மேற்கொள்ளும் முக்கிய திட்டங்கள் மற்றும் நடவடிக்கைகள்
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <div key={i} className={`bg-card rounded-xl p-8 shadow-md border ${c.border} hover:shadow-lg transition-all hover:-translate-y-1`}>
                <div className={`w-14 h-14 ${c.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <p.icon className={c.text} size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
