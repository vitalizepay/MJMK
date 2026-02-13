import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `பெயர்: ${formData.name}%0Aதொலைபேசி: ${formData.phone}%0Aசெய்தி: ${formData.message}`;
    window.open(`https://wa.me/918610227387?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">தொடர்புகொள்ளுங்கள்</h2>
          <div className="w-24 h-1.5 party-stripe mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">எங்களை தொடர்பு கொள்ள</h3>
            <div className="space-y-6">
              <a href="tel:8610227387" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">தொலைபேசி</p>
                  <p className="text-muted-foreground">8610227387</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">முகவரி</p>
                  <p className="text-muted-foreground">திருப்பூர், தமிழ்நாடு 641606</p>
                </div>
              </div>
              <a href="https://www.facebook.com/profile.php?id=100064672498498" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Facebook</p>
                  <p className="text-muted-foreground">MJMK அதிகாரப்பூர்வ பக்கம்</p>
                </div>
              </a>
            </div>

            {/* CTA */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-md">
              <h4 className="font-bold text-foreground mb-2">இயக்கத்தில் இணையுங்கள்!</h4>
              <p className="text-sm text-muted-foreground mb-4">
                மக்கள் நலனுக்காகப் போராட விரும்புகிறீர்களா? இன்றே எங்கள் இயக்கத்தில் இணையுங்கள்.
              </p>
              <a href="tel:8610227387" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-secondary/90 transition-all">
                <Phone size={16} /> இப்போது அழைக்கவும்
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-lg border border-border space-y-5">
            <h3 className="text-xl font-bold text-foreground mb-2">செய்தி அனுப்புங்கள்</h3>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">பெயர்</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="உங்கள் பெயர்"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">தொலைபேசி எண்</label>
              <input
                type="tel"
                required
                maxLength={15}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="உங்கள் தொலைபேசி எண்"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">செய்தி</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="உங்கள் செய்தியை எழுதுங்கள்"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} /> WhatsApp வழியாக அனுப்புங்கள்
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
