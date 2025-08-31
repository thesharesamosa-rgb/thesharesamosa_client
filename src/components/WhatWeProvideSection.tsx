import { Card, CardContent } from "@/components/ui/card";
import { providedServices } from "@/data/whatWeProvide";

const WhatWeProvideSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            What We Provide
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Everything you need to succeed in your samosa business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providedServices.map((service, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-warm transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="shadow-card border-0 bg-primary text-primary-foreground inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg opacity-95">
                  Join hundreds of successful partners across India who are already earning with The Share Samosa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvideSection;