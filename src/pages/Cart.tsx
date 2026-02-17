import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from "lucide-react";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import CheckoutDialog from "@/components/CheckoutDialog";

const Cart = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
            <p className="font-body text-lg text-muted-foreground">
              Your cart is empty
            </p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item, i) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 rounded-lg border bg-card p-4"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="h-24 w-20 rounded-md object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.product.title}
                        </h3>
                        <p className="font-body text-xs text-muted-foreground">
                          Digital Download
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-display text-lg font-bold text-primary">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 rounded-md border px-2 py-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="self-start text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Order Summary
              </h2>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between font-body text-sm text-muted-foreground">
                  <span>
                    {items.reduce((sum, i) => sum + i.quantity, 0)} item
                    {items.reduce((sum, i) => sum + i.quantity, 0) !== 1
                      ? "s"
                      : ""}
                  </span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between font-display text-lg font-bold text-foreground">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-6 w-full gap-2"
                onClick={() => setCheckoutOpen(true)}
              >
                Checkout <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-3 text-center font-body text-xs text-muted-foreground">
                Secure checkout • Instant download after payment
              </p>
            </div>
          </div>
        )}
      </div>
      <CheckoutDialog
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        total={total}
      />
    </Layout>
  );
};

export default Cart;
