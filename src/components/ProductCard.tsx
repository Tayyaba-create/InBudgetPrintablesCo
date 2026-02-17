import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductCard = ({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) => {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.product.id === product.id);
  const [qty, setQty] = useState<number>(1);
  const { toast } = useToast();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group relative overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          {product.badge && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
              {product.badge}
            </span>
          )}
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category.replace("-", " ")}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1 font-display text-lg font-semibold text-foreground transition-colors hover:text-primary">
            {product.title}
          </h3>
        </Link>
        {product.originalPrice && (
          <span className="font-body text-xs text-muted-foreground line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
        <div className="mt-2 flex items-center gap-1">
          <span className="font-body text-xs text-muted-foreground">
            ★ {product.rating}
          </span>
          <span className="font-body text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-md border px-2 py-1">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="text-muted-foreground hover:text-foreground"
              >
                -
              </button>
              <span className="w-8 text-center font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="text-muted-foreground hover:text-foreground"
              >
                +
              </button>
            </div>
            <Button
              size="sm"
              variant="default"
              onClick={() => {
                addItem(product, qty);
                toast({
                  title: "Added to cart",
                  description: `${qty} × ${product.title} added.`,
                });
              }}
              className="gap-1.5"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
