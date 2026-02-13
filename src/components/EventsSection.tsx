import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "சமூக நலப் பேரணி",
    date: "விரைவில் அறிவிக்கப்படும்",
    location: "திருப்பூர், தமிழ்நாடு",
    description: "மக்களின் அடிப்படை உரிமைகளுக்காக நடத்தப்படும் மாபெரும் பேரணி.",
  },
  {
    title: "நிதி உதவி முகாம் - கடன் பகுதி 10",
    date: "விரைவில் அறிவிக்கப்படும்",
    location: "திருப்பூர் மாவட்டம்",
    description: "தேவைப்படும் மக்களுக்கு சிறு கடன் வழங்கும் திட்டத்தின் அடுத்த கட்டம்.",
  },
  {
    title: "இளைஞர் விழிப்புணர்வு கூட்டம்",
    date: "விரைவில் அறிவிக்கப்படும்",
    location: "திருப்பூர்",
    description: "இளைஞர்களின் எதிர்காலத்திற்கான வழிகாட்டுதல் நிகழ்ச்சி.",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">நிகழ்வுகள் & புதுப்பிப்புகள்</h2>
          <div className="w-24 h-1.5 party-stripe mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {events.map((event, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all group">
              <div className="h-2 party-stripe" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin size={14} />
                  {event.location}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook embed CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">எங்கள் சமீபத்திய செய்திகளுக்கு Facebook இல் பின்தொடரவும்</p>
          <a
            href="https://www.facebook.com/profile.php?id=100064672498498"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-all hover:scale-105"
          >
            Facebook பக்கத்தைப் பார்வையிடுங்கள்
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
