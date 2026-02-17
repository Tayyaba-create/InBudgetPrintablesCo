import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Download, CheckCircle, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, items } = useCart();
  const inCart = product ? items.some((i) => i.product.id === product.id) : false;
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Product not found</h1>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <Link to="/shop" className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-2">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-3"
          >
            <div className="overflow-hidden rounded-lg border bg-muted">
              <img
                src={product.images[activeImage]}
                alt={product.title}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden rounded-md border-2 transition-colors ${
                    i === activeImage ? "border-primary" : "border-transparent hover:border-muted-foreground/30"
                  }`}
                >
                  <img src={img} alt={`${product.title} ${i + 1}`} className="h-20 w-16 object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2">
              <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {product.category.replace("-", " ")}
              </p>
              {product.badge && (
                <span className="rounded-full bg-primary px-2.5 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {product.badge}
                </span>
              )}
            </div>
            <h1 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">{product.title}</h1>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="font-body text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="font-body text-lg text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="mt-4 font-body leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => addItem(product)}
                disabled={inCart}
                className="gap-2"
              >
                {inCart ? <CheckCircle className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
                {inCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3 text-sm text-muted-foreground">
                <Download className="h-4 w-4 text-primary" />
                <span className="font-body">Instant digital download after purchase</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="font-body">Print at home or use digitally</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">You May Also Like</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
