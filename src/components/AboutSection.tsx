import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Us
          </h2>
          
          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                We provide a unique franchise model for samosas. From cloud kitchens to vendor stalls, 
                you cook or sell — we handle branding, delivery, and customers. Join India's fastest-growing 
                samosa franchise and turn your passion for food into a profitable business with our proven system.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;