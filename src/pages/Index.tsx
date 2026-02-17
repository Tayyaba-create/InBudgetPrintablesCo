import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Digital printables" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border bg-card/80 px-3 py-1 font-body text-xs font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3 w-3" /> Instant Digital Downloads
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Beautiful Printables for an Organized Life
            </h1>
            <p className="mt-4 font-body text-base text-muted-foreground md:text-lg">
              Budget planners, savings trackers, meal planners & more — designed to help you stay on track in style.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/shop">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl">Shop by Category</h2>
        <p className="mx-auto mt-2 max-w-md text-center font-body text-muted-foreground">Find exactly what you need to stay organized.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.id}`}
                className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="font-display text-sm font-semibold text-foreground">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Featured Printables</h2>
              <p className="mt-2 font-body text-muted-foreground">Our most popular digital downloads.</p>
            </div>
            <Link to="/shop" className="hidden items-center gap-1 font-body text-sm font-medium text-primary hover:underline md:flex">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl border bg-card p-10 md:p-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Ready to Get Organized?</h2>
          <p className="mx-auto mt-3 max-w-md font-body text-muted-foreground">
            Browse our full collection of digital printables and start your journey to a more organized, beautiful life.
          </p>
          <Button asChild size="lg" className="mt-8 gap-2">
            <Link to="/shop">
              Explore the Shop <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
