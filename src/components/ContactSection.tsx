import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useContactForm } from "@/hooks/useContactFrom";

const ContactSection = () => {
  const { sendContactForm, loading, response, error } = useContactForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await sendContactForm(formData);
    if (res.success) {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    } else {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! We'll get back to you soon.",
        variant: "default",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Start Your Samosa Journey Today!
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Ready to become a partner? Fill out the form below and we'll get
            back to you within 24 hours.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-4">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-foreground">
                    Get Started Today
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Preferred Location</Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="City/State for franchise"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business interests and any questions you have..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
