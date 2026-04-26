import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    description?: string;
  } | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-sm p-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-background max-w-4xl w-full overflow-hidden shadow-2xl"
          style={{
            border: '2px solid var(--accent)',
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-2 gap-0">
            <div className="aspect-square overflow-hidden bg-secondary/20">
              <OptimizedImage
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>
                <div className="h-1 w-16 bg-accent mt-3 mb-6" />
              </div>

              <h2
                className="text-5xl text-foreground mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {product.name}
              </h2>

              <p
                className="text-xl text-muted-foreground leading-relaxed"
                style={{ fontFamily: 'var(--font-serif-alt)' }}
              >
                {product.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
