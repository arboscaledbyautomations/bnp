import { motion } from "motion/react";
import { Link } from "react-router";
import { Users, Heart, Wheat, Award } from "lucide-react";
import { OptimizedImage } from "../components/OptimizedImage";

export function About() {
  return (
    <div className="pt-32 pb-24 bg-background">
      {/* Hero Section */}
      <div className="px-8 mb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-1 w-24 bg-accent mb-8" />
              <h1
                className="text-7xl text-foreground mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Our Story
              </h1>
              <p
                className="text-xl text-muted-foreground mb-6 leading-relaxed"
                style={{ fontFamily: 'var(--font-serif-alt)' }}
              >
                Founded in 2026, Bread N Pastry Co. began with a simple vision: to bring the authentic taste of European artisan baking to our community.
              </p>
              <p
                className="text-xl text-muted-foreground leading-relaxed"
                style={{ fontFamily: 'var(--font-serif-alt)' }}
              >
                Every loaf, every pastry, every creation is a testament to our dedication to traditional techniques and exceptional ingredients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1689037676470-b72230d5236e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU5MzIyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bakery interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="px-8 mb-32 bg-secondary/30 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl text-foreground mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-16">
            {[
              {
                icon: Wheat,
                title: "Quality Ingredients",
                desc: "We source only organic, locally-milled flour and premium European butter. Every ingredient is carefully selected to ensure the highest quality in every bite.",
              },
              {
                icon: Heart,
                title: "Traditional Methods",
                desc: "Our bakers follow time-honored techniques, from slow fermentation to hand-shaping each loaf. These methods take time, but they create incomparable flavor and texture.",
              },
              {
                icon: Users,
                title: "Community First",
                desc: "We're proud to be part of this neighborhood. From supporting local farmers to hosting baking workshops, we believe in giving back to the community that supports us.",
              },
              {
                icon: Award,
                title: "Excellence Always",
                desc: "We never compromise on quality. Each day brings a fresh commitment to perfection, whether it's a simple baguette or an elaborate celebration cake.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 border-2 border-primary flex items-center justify-center group hover:bg-primary transition-all duration-300">
                    <value.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-2xl text-foreground mb-4"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="px-8 mb-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="h-1 w-24 bg-accent mb-8" />
            <h2
              className="text-6xl text-foreground mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Prepare",
                desc: "We start before dawn, mixing dough with care and allowing proper fermentation times.",
                image: "https://images.unsplash.com/photo-1649675602947-81a41c1ba4af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzc1OTEzMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                step: "02",
                title: "Shape",
                desc: "Each piece is hand-shaped with precision, respecting the dough's natural structure.",
                image: "https://images.unsplash.com/photo-1649675602217-416a4fafcecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzc1OTEzMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                step: "03",
                title: "Bake",
                desc: "Our ovens create the perfect crust and crumb, delivering exceptional flavor every time.",
                image: "https://images.unsplash.com/photo-1698093121320-9df031f3e414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzc1OTEzMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span
                    className="text-5xl text-accent"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {step.step}
                  </span>
                  <h3
                    className="text-2xl text-foreground"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-8 py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Meet Our Bakers
            </h2>
            <p
              className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-12"
              style={{ fontFamily: 'var(--font-serif-alt)' }}
            >
              Our team of skilled artisans brings decades of combined experience to every creation. Each member is passionate about their craft and dedicated to maintaining the highest standards of quality.
            </p>

            <div className="grid grid-cols-3 gap-12 mt-16">
              {[
                { name: "Jericho Guianan", role: "Head Baker", image: "/src/imports/image-8.png" },
                { name: "John Mark Castillo", role: "Pastry Chef", image: "/src/imports/image-9.png" },
                { name: "JL Artuza", role: "Master Baker", image: "/src/imports/image-10.png" },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-6 border-2 border-accent rounded-full overflow-hidden bg-accent/20 flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users className="w-16 h-16 text-accent" />
                    )}
                  </div>
                  <h3
                    className="text-2xl mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-primary-foreground/80 uppercase tracking-wider text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-8 py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-5xl text-foreground mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Visit Us Today
            </h2>
            <p
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif-alt)' }}
            >
              Experience the warmth and aroma of our bakery. We're open daily with fresh bakes waiting for you.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <span className="uppercase tracking-widest text-sm">Get Directions</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
