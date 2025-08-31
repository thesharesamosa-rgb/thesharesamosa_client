import { galleryImages } from "@/data/gallery";
import { samosaVarieties, varietyCategories } from "@/data/samosaVarieties";
import { Badge } from "@/components/ui/badge";

const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Gallery
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Experience the authentic taste and quality of our samosas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-warm transition-all duration-300">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Samosa Varieties Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Our Samosa Varieties
            </h3>
            <p className="text-lg text-center text-muted-foreground mb-12">
              From traditional to fusion - we offer varieties to satisfy every taste
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {samosaVarieties.map((variety, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-card hover:shadow-warm transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-foreground">{variety.name}</h4>
                    <Badge 
                      variant="secondary" 
                      className="text-xs"
                      style={{ 
                        backgroundColor: varietyCategories.find(cat => cat.name === variety.category)?.color + '20',
                        color: varietyCategories.find(cat => cat.name === variety.category)?.color 
                      }}
                    >
                      {variety.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{variety.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-samosa text-primary-foreground rounded-lg p-8 inline-block">
              <h3 className="text-2xl font-bold mb-2">
                🔥 Authentic Taste, Modern Business
              </h3>
              <p className="text-lg opacity-95">
                8+ varieties, traditional recipes meet innovative franchise opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;