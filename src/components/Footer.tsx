import { Mail, Facebook, Instagram, Twitter, Linkedin, Phone, MapPin, MessageCircle, MessageCircleIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">The Share Samosa</h3>
              <p className="text-background/80 leading-relaxed">
                Join India's fastest-growing samosa franchise. 
                Empowering entrepreneurs with authentic taste and modern business solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-background/90">thesharesamosa@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-background/90">+91 75350 62803</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-background/90">144 E/ Sindhu Nagar Colony Near By Satelite Bus Station (Bareilly)</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                
                <a 
                  href="https://www.instagram.com/thesharesamosa/" 
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="https://wa.me/917535062803" 
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
                >
                  <MessageCircleIcon className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/the-share-samosa-8064a2237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
              </div>
              <p className="text-background/80 text-sm">
                Stay connected for franchise updates and success stories
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/70">
              © 2025 The Share Samosa. All rights reserved. | Join India's fastest-growing samosa franchise.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{/* Contact Information */}
            {/* <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground">
                        thesharesamosa@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Franchise Locations
                      </h3>
                      <p className="text-muted-foreground">
                        Pan India Operations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div> */}