import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { businessModels } from "@/data/businessModels";

const BusinessModelsSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Business Models
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Choose the perfect model that fits your goals and resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessModels.map((model, index) => (
              <Card key={index} className="relative shadow-card border-0 hover:shadow-warm transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="absolute -top-3 right-4">
                    <Badge variant="secondary" className="font-semibold">
                      {model.tag}
                    </Badge>
                  </div>
                  
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <model.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {model.title}
                  </CardTitle>
                  <p className="text-primary font-semibold text-lg">
                    {model.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3 hover:line-clamp-none">
                    {model.description}
                  </p>
                  
                  <div className="space-y-2">
                    {model.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">Profit Potential</p>
                    <p className="text-2xl font-bold text-primary">{model.earning}</p>
                    <p className="text-xs text-muted-foreground">Scalable Returns</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelsSection;