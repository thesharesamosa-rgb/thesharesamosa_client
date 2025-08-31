import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calculator, PiggyBank, Target } from "lucide-react";

const earningsData = [
  {
    icon: Calculator,
    label: "Margin per Samosa",
    value: "₹1.50 - ₹2.50",
    description: "Healthy profit margin on every piece"
  },
  {
    icon: TrendingUp,
    label: "Daily Earning",
    value: "₹3,750 - ₹4,000+",
    description: "Consistent daily income potential"
  },
  {
    icon: PiggyBank,
    label: "Monthly Earning",
    value: "₹1,12,500+",
    description: "Gross monthly revenue target"
  },
  {
    icon: Target,
    label: "Net Profit After Expenses",
    value: "₹50,000+",
    description: "Your take-home profit monthly"
  }
];

const EarningsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Earning Breakdown
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Transparent financial projections for your business success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {earningsData.map((item, index) => (
              <Card key={index} className="shadow-card border-0 text-center hover:shadow-warm transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Breakdown Card */}
          <Card className="shadow-card border-0 bg-gradient-samosa text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Sample Monthly Calculation (Cloud Kitchen Model)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Production</h4>
                  <p className="text-3xl font-bold mb-2">2,500</p>
                  <p className="opacity-90">samosas daily</p>
                  <p className="text-sm opacity-75 mt-2">75,000 monthly</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Revenue</h4>
                  <p className="text-3xl font-bold mb-2">₹1,50,000</p>
                  <p className="opacity-90">gross monthly</p>
                  <p className="text-sm opacity-75 mt-2">@ ₹2 avg margin</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Net Profit</h4>
                  <p className="text-3xl font-bold mb-2">₹50,000+</p>
                  <p className="opacity-90">after expenses</p>
                  <p className="text-sm opacity-75 mt-2">67% profit margin</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm opacity-90">
                  * Calculations are approximate and may vary based on location, efficiency, and market conditions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;