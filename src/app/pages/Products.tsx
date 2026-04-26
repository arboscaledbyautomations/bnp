import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ProductModal } from "../components/ProductModal";
import { OptimizedImage } from "../components/OptimizedImage";

const products = [
  {
    id: 2,
    name: "Flavored Croissant",
    category: "Pastries",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1773027270919-8714e0af1172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzc1OTg5ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Layers of buttery perfection with a delicate, flaky texture that melts on your tongue. Enhanced with subtle vanilla notes and a hint of sweetness. Perfect for breakfast enthusiasts and those who appreciate classic French patisserie craftsmanship.",
  },
  {
    id: 3,
    name: "Chocolate Pastry",
    category: "Pastries",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1712723246766-3eaea22e52ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc2FudCUyMHBhc3RyeXxlbnwxfHx8fDE3NzU5ODk4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Rich Belgian chocolate meets artisan pastry in this decadent creation. Dark cocoa notes balanced with a subtle sweetness create an indulgent experience. Ideal for chocolate lovers and anyone seeking an afternoon treat that feels like a special occasion.",
  },
  {
    id: 5,
    name: "Almond Croissant",
    category: "Pastries",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1737700087816-95c80570fba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzc1OTg5ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Toasted almond frangipane nestled within buttery croissant layers, crowned with sliced almonds and powdered sugar. Nutty richness with a delicate sweetness. A sophisticated choice for brunch lovers and those who appreciate complex, layered flavors.",
  },
  {
    id: 7,
    name: "Berry Danish",
    category: "Pastries",
    price: "$5.50",
    image: "/src/imports/blueberry-and-cream-danish-1.jpg",
    description: "Fresh seasonal berries atop cream cheese filling, all cradled in a flaky pastry shell. Bright, fruity notes with a creamy finish and buttery base. Perfect for those seeking a balance of sweet and tart, ideal for a light breakfast or mid-morning snack.",
  },
  {
    id: 17,
    name: "Artisan Cheese Bagel",
    category: "Bread",
    price: "$5.00",
    image: "/src/imports/image-1.png",
    description: "Savory cheese swirls throughout a perfectly chewy bagel with a golden crust. Sharp cheddar notes balanced with subtle garlic undertones. A hearty choice for busy professionals and cheese enthusiasts who want a satisfying, protein-rich breakfast.",
  },
  {
    id: 18,
    name: "Caramel Filled Bread",
    category: "Bread",
    price: "$5.50",
    image: "/src/imports/image-4.png",
    description: "Pillowy soft bread concealing a luxurious caramel center that flows with each bite. Sweet butterscotch notes with hints of sea salt and vanilla. An indulgent treat for sweet bread lovers and those who enjoy dessert-inspired breakfast options.",
  },
  {
    id: 19,
    name: "Butter Croissant",
    category: "Bread",
    price: "$4.75",
    image: "/src/imports/image-2.png",
    description: "Classic French technique yields impossibly flaky layers enriched with premium European butter. Pure, rich butter flavor with a delicate crispness. The quintessential choice for traditionalists and anyone seeking an authentic patisserie experience.",
  },
  {
    id: 20,
    name: "Dark Rye Loaf",
    category: "Bread",
    price: "$6.00",
    image: "/src/imports/image-3.png",
    description: "Hearty whole grain rye with a deep, earthy flavor and dense, satisfying texture. Robust notes of toasted grains with a subtle tanginess. Perfect for health-conscious individuals and those who appreciate bold, rustic bread traditions.",
  },
  {
    id: 13,
    name: "Chocolate Strawberry Delight",
    category: "Beverages",
    price: "$5.50",
    image: "/src/imports/image-18.png",
    description: "Velvety chocolate blended with fresh strawberries and topped with whipped cream. Rich cocoa meets sweet berry brightness for a perfectly balanced indulgence. Ideal for dessert beverage enthusiasts and those seeking a refreshing afternoon pick-me-up.",
  },
  {
    id: 14,
    name: "Matcha Green Tea",
    category: "Beverages",
    price: "$5.00",
    image: "/src/imports/image-19.png",
    description: "Premium ceremonial-grade matcha whisked to perfection with your choice of milk. Earthy, vegetal notes with a clean, slightly sweet finish and natural energy. Perfect for wellness-focused individuals and matcha aficionados seeking authentic flavor.",
  },
  {
    id: 15,
    name: "Caramel Bliss",
    category: "Beverages",
    price: "$5.50",
    image: "/src/imports/image-17.png",
    description: "Smooth espresso meets house-made caramel in this luxurious coffee creation. Rich toffee notes with buttery sweetness and a hint of sea salt. A sophisticated treat for coffee lovers who appreciate indulgent, dessert-inspired beverages.",
  },
  {
    id: 16,
    name: "Strawberry Cream Shake",
    category: "Beverages",
    price: "$6.00",
    image: "/src/imports/image-14.png",
    description: "Fresh strawberries blended with premium vanilla ice cream and topped with whipped cream. Bright berry flavor with creamy richness and a nostalgic sweetness. Perfect for families, kids, and anyone craving a classic milkshake experience.",
  },
];

const categories = ["All", "Bread", "Pastries", "Beverages"];

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <div className="pt-32 pb-24 px-8 bg-background min-h-screen">
      <div className="max-w-[1400px] mx-auto">
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
            Our Menu
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-serif-alt)' }}
          >
            Discover our collection of handcrafted breads and pastries, baked fresh each morning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden aspect-square mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end justify-center pb-8"
                >
                  <button className="px-8 py-3 border-2 border-accent text-accent uppercase tracking-widest text-sm hover:bg-accent hover:text-primary transition-all duration-300">
                    View Details
                  </button>
                </motion.div>
              </div>

              <div className="text-center">
                <h3
                  className="text-xl text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {product.name}
                </h3>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-primary text-primary-foreground text-center relative overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(201, 168, 124, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(201, 168, 124, 0.08) 0%, transparent 50%),
              linear-gradient(60deg, rgba(42, 24, 16, 0.03) 25%, transparent 25%, transparent 75%, rgba(42, 24, 16, 0.03) 75%),
              linear-gradient(120deg, rgba(42, 24, 16, 0.03) 25%, transparent 25%, transparent 75%, rgba(42, 24, 16, 0.03) 75%)
            `,
            backgroundSize: '200% 200%, 200% 200%, 50px 50px, 50px 50px',
            backgroundPosition: '0 0, 100% 100%, 0 0, 25px 25px',
            borderTop: '2px solid rgba(201, 168, 124, 0.3)',
            borderBottom: '2px solid rgba(201, 168, 124, 0.3)',
          }}
        >
          {/* Decorative cake silhouette */}
          <div className="absolute top-8 left-16 opacity-5">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="text-accent">
              <rect x="20" y="60" width="60" height="30" rx="2"/>
              <rect x="25" y="40" width="50" height="20" rx="2"/>
              <rect x="30" y="25" width="40" height="15" rx="2"/>
              <circle cx="50" cy="15" r="8"/>
              <line x1="35" y1="15" x2="35" y2="5" stroke="currentColor" strokeWidth="2"/>
              <line x1="50" y1="10" x2="50" y2="0" stroke="currentColor" strokeWidth="2"/>
              <line x1="65" y1="15" x2="65" y2="5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute bottom-8 right-16 opacity-5 rotate-12">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="text-accent">
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M 50 15 Q 35 25, 35 40 T 35 65 Q 35 80, 50 85 Q 65 80, 65 65 T 65 40 Q 65 25, 50 15 Z"/>
              <circle cx="50" cy="35" r="3"/>
              <circle cx="50" cy="50" r="3"/>
              <circle cx="50" cy="65" r="3"/>
            </svg>
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Custom Orders Welcome
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif-alt)' }}
            >
              Planning a special event? We create custom cakes, catering platters, and bulk orders for any occasion.
            </motion.p>
            <Link to="/contact">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-10 py-5 bg-accent text-primary hover:bg-accent/90 transition-all duration-300 shadow-lg"
              >
                <span className="uppercase tracking-widest text-sm">Contact Us</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
