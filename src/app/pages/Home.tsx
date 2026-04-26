import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Award, Clock, Heart } from "lucide-react";
import { useRef } from "react";
import { OptimizedImage } from "../components/OptimizedImage";

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-background">
      {/* Hero Section - Full Bleed */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroImageY }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <OptimizedImage
            src="https://images.unsplash.com/photo-1627308595181-fa2b6f5f04e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzc1OTEzMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Artisan bread"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative h-full flex items-center"
        >
          <div className="max-w-[1400px] mx-auto px-8 w-full pt-24">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6"
              >
                <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm border border-accent">
                  <span className="text-accent uppercase tracking-[0.3em] text-sm">Est. 2026</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <span className="block text-7xl leading-[1.1] text-primary-foreground mb-4">
                  The Gold Standard
                </span>
                <span className="block text-7xl leading-[1.1] text-primary-foreground">
                  of Pastries
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl text-primary-foreground/90 mb-12 leading-relaxed max-w-lg"
                style={{ fontFamily: 'var(--font-serif-alt)' }}
              >
                At BNP, you deserve to be happy. Experience the finest handcrafted breads and pastries, baked fresh daily with passion and tradition.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex gap-6"
              >
                <Link
                  to="/products"
                  className="group px-10 py-5 bg-accent text-primary flex items-center gap-3 hover:bg-accent/90 transition-all duration-300"
                >
                  <span className="uppercase tracking-widest text-sm">Order Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="px-10 py-5 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
                >
                  <span className="uppercase tracking-widest text-sm">Our Story</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Featured Products Section */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-5"
            >
              <div className="h-1 w-24 bg-accent mb-8" />
              <h2
                className="text-6xl text-foreground mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Signature Creations
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                style={{ fontFamily: 'var(--font-serif-alt)' }}
              >
                Each piece is a work of art, combining time-honored techniques with the finest ingredients.
              </p>
            </motion.div>
            <div className="col-span-7" />
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                image: "/src/imports/image-4.png",
                title: "Caramel Filled Bread",
                desc: "Luxurious butterscotch indulgence",
              },
              {
                image: "/src/imports/image-1.png",
                title: "Artisan Cheese Bagel",
                desc: "Savory perfection in every bite",
              },
              {
                image: "https://images.unsplash.com/photo-1712723246766-3eaea22e52ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc2FudCUyMHBhc3RyeXxlbnwxfHx8fDE3NzU5ODk4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Chocolate Pastry",
                desc: "Decadent indulgence",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                </div>
                <h3
                  className="text-2xl text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-3 px-12 py-5 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <span className="uppercase tracking-widest text-sm">View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-32 px-8 bg-primary text-primary-foreground relative overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(201, 168, 124, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201, 168, 124, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, rgba(42, 24, 16, 0.02) 25%, transparent 25%),
            linear-gradient(225deg, rgba(42, 24, 16, 0.02) 25%, transparent 25%)
          `,
          backgroundSize: '200% 200%, 200% 200%, 40px 40px, 40px 40px',
          backgroundPosition: '0 0, 100% 0, 0 0, 20px 20px',
        }}
      >
        {/* Decorative wheat silhouettes */}
        <div className="absolute top-10 left-10 opacity-5">
          <svg width="120" height="200" viewBox="0 0 60 100" fill="currentColor" className="text-accent">
            <path d="M30 0C30 0 24 10 24 15C24 18 27 20 30 20C33 20 36 18 36 15C36 10 30 0 30 0Z" />
            <path d="M30 12C30 12 26 18 26 21C26 23 28 25 30 25C32 25 34 23 34 21C34 18 30 12 30 12Z" />
            <line x1="30" y1="25" x2="30" y2="100" stroke="currentColor" strokeWidth="2"/>
            <path d="M20 30C20 30 16 35 16 38C16 40 18 42 20 42C22 42 24 40 24 38C24 35 20 30 20 30Z" />
            <path d="M40 30C40 30 36 35 36 38C36 40 38 42 40 42C42 42 44 40 44 38C44 35 40 30 40 30Z" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-5 rotate-12">
          <svg width="120" height="200" viewBox="0 0 60 100" fill="currentColor" className="text-accent">
            <path d="M30 0C30 0 24 10 24 15C24 18 27 20 30 20C33 20 36 18 36 15C36 10 30 0 30 0Z" />
            <path d="M30 12C30 12 26 18 26 21C26 23 28 25 30 25C32 25 34 23 34 21C34 18 30 12 30 12Z" />
            <line x1="30" y1="25" x2="30" y2="100" stroke="currentColor" strokeWidth="2"/>
            <path d="M20 30C20 30 16 35 16 38C16 40 18 42 20 42C22 42 24 40 24 38C24 35 20 30 20 30Z" />
            <path d="M40 30C40 30 36 35 36 38C36 40 38 42 40 42C42 42 44 40 44 38C44 35 40 30 40 30Z" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl text-center mb-20"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Commitment
          </motion.h2>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Handcrafted Daily",
                desc: "Every item made fresh each morning by skilled artisan bakers",
              },
              {
                icon: Award,
                title: "Premium Ingredients",
                desc: "Only the finest organic flour, butter, and locally-sourced materials",
              },
              {
                icon: Clock,
                title: "Time-Honored Methods",
                desc: "Traditional techniques passed down through generations of bakers",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-8 border-2 border-accent flex items-center justify-center group hover:bg-accent hover:border-accent transition-all duration-300 relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent transition-all duration-300" />
                  <value.icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors relative z-10" />
                </motion.div>
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {value.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1649675602947-81a41c1ba4af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzc1OTEzMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Baker at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-24 bg-accent mb-8" />
              <h2
                className="text-5xl text-foreground mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Visit Our Bakery
              </h2>
              <p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-serif-alt)' }}
              >
                Experience the warmth of our ovens and the aroma of fresh-baked bread. We're open daily with something special waiting just for you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
              >
                <span className="uppercase tracking-widest text-sm">Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
