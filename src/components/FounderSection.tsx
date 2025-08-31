import { Card, CardContent } from "@/components/ui/card";
import { founderInfo } from "@/data/founder";

const FounderSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Meet Our Founders
          </h2>
          
          <Card className="shadow-card border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={founderInfo.photo} 
                    alt="Founder of The Share Samosa"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-warm"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {founderInfo.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    "{founderInfo.quote}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;