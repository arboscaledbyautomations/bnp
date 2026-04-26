import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { OptimizedImage } from "../components/OptimizedImage";

export function Contact() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="h-1 w-24 bg-accent mx-auto mb-8" />
          <h1
            className="text-7xl text-foreground mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Get In Touch
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-serif-alt)' }}
          >
            We'd love to hear from you. Visit us, call us, or send us a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-20 mb-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="text-3xl text-foreground mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Send Us A Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-wider text-foreground mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 border-2 border-border bg-input-background focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-foreground mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 border-2 border-border bg-input-background focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-foreground mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-6 py-4 border-2 border-border bg-input-background focus:border-primary focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wider text-foreground mb-3">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-border bg-input-background focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                <span className="uppercase tracking-widest text-sm">Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="text-3xl text-foreground mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Visit Our Bakery
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-2 uppercase tracking-wider">
                    Location
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Brgy, Timalan Balsahan
                    <br />
                    Naic, Cavite
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-2 uppercase tracking-wider">
                    Phone
                  </h3>
                  <p className="text-muted-foreground">+63 192-168-2561</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-2 uppercase tracking-wider">
                    Email
                  </h3>
                  <p className="text-muted-foreground">breadnpastry.co@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-2 uppercase tracking-wider">
                    Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                    <p>Saturday: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-video overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1657498023828-1e0181449d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiYWtlcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU5MzIyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bakery display"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
