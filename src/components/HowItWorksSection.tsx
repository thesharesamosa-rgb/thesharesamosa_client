import { Card, CardContent } from "@/components/ui/card";
import { howItWorksSteps } from "@/data/howItWorks";

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Simple steps to start your samosa business journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="relative shadow-card border-0 hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="mb-6 mt-4">
                    <step.icon className="w-12 h-12 mx-auto text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;