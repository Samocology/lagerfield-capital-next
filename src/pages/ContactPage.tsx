import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building, User, MessageSquare, Twitter, Linkedin, Facebook } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section
          className="relative py-40 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/hero-financial.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">Contact Us</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              We are here to help. Reach out to us for any inquiries or to discuss how we can assist you in achieving your financial goals.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-7">
                <Card className="p-8 md:p-12 shadow-xl rounded-2xl bg-card">
                  <h2 className="text-4xl font-bold text-primary mb-3">Send a Message</h2>
                  <p className="text-muted-foreground mb-10">Our team will get back to you shortly.</p>
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="name" className="font-medium text-sm">Full Name</label>
                        <div className="relative flex items-center">
                          <User className="absolute left-4 h-5 w-5 text-muted-foreground" />
                          <Input id="name" placeholder="John Doe" className="pl-12 h-12 rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-medium text-sm">Email Address</label>
                        <div className="relative flex items-center">
                          <Mail className="absolute left-4 h-5 w-5 text-muted-foreground" />
                          <Input id="email" type="email" placeholder="john.doe@example.com" className="pl-12 h-12 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="font-medium text-sm">Subject</label>
                      <div className="relative flex items-center">
                        <MessageSquare className="absolute left-4 h-5 w-5 text-muted-foreground" />
                        <Input id="subject" placeholder="How can we help?" className="pl-12 h-12 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-medium text-sm">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={8}
                        className="text-base rounded-2xl p-4"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-lg font-semibold rounded-full h-14">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-5">
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-5 rounded-full shadow-md">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Our Office</h3>
                      <p className="text-muted-foreground mt-2 text-lg">
                        123 Financial District, Victoria Island, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-5 rounded-full shadow-md">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Call Us</h3>
                      <p className="text-muted-foreground mt-2 text-lg">+234 (0) 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-5 rounded-full shadow-md">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Email Us</h3>
                      <p className="text-muted-foreground mt-2 text-lg">info@lagerfieldcapital.com</p>
                    </div>
                  </div>
                  {/* Map */}
                  <Card className="overflow-hidden shadow-xl rounded-2xl">
                    <CardContent className="p-0">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.741133309335!2d3.424927214770695!3d6.427777095347889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b30b7d3b3ab%3A0x4f8b3b3b3b3b3b3b!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1678886666666!5m2!1sen!2sng"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Get in Touch Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Follow us on our social media channels to stay updated with the latest news and insights from Lagerfield Capital.
            </p>
            <div className="flex justify-center gap-6">
              <Button variant="outline" size="icon" className="rounded-full h-14 w-14">
                <Twitter className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-14 w-14">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-14 w-14">
                <Facebook className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;