import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { categories, products } from "@/data/products";

const Categories = () => (
  <Layout>
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Categories</h1>
      <p className="mt-2 font-body text-muted-foreground">Browse our printables by category.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => {
          const count = products.filter((p) => p.category === cat.id).length;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.id}`}
                className="group flex flex-col items-center gap-3 rounded-xl border bg-card p-8 text-center transition-all hover:border-primary hover:shadow-lg"
              >
                <span className="text-5xl">{cat.icon}</span>
                <h2 className="font-display text-xl font-bold text-foreground">{cat.name}</h2>
                <p className="font-body text-sm text-muted-foreground">{cat.description}</p>
                <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {count} printable{count !== 1 ? "s" : ""} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </Layout>
);

export default Categories;
