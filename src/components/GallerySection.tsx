import rallyBg from "@/assets/rally-bg.jpg";
import banner from "@/assets/banner.png";

const GallerySection = () => {
  const images = [rallyBg, banner];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">படத்தொகுப்பு</h2>
          <div className="w-24 h-1.5 party-stripe mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground">எங்கள் பேரணிகள், சமூகப் பணிகள் மற்றும் பொதுக்கூட்டங்களின் புகைப்படங்கள்</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={img}
                  alt={`MJMK நிகழ்வு ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
