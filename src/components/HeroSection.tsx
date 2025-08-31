import { Button } from "@/components/ui/button";
import heroStreetScene from "@/assets/hero-street-scene.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-full lg:h-screen py-[120px] lg:py-0 lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroStreetScene})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <img 
            src={logo} 
            alt="The Share Samosa Logo" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-warm"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          The Share Samosa
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95 animate-fade-in">
          India's Most Unique Samosa Franchise — Earn While We Handle Everything!
        </p>
        
        {/* Features highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">🍛 Multiple Models</h3>
            <p className="text-sm opacity-90">Cloud Kitchen, Stall, Vendor</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">📦 Full Support</h3>
            <p className="text-sm opacity-90">Training, Branding & Delivery</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-lg mb-2">🌟 Premium Quality</h3>
            <p className="text-sm opacity-90">8+ Samosa Varieties</p>
          </div>
        </div>
        
        <Button 
          size="lg" 
          variant="secondary"
          onClick={scrollToContact}
          className="text-lg px-8 py-6 font-semibold shadow-warm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
        >
          Become a Partner
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/80 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;