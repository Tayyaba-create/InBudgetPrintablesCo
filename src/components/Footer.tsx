import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="InBudgetPrintablesCo" className="h-10 w-10" />
            <h3 className="font-display text-xl font-bold text-foreground">InBudgetPrintablesCo</h3>
          </div>
          <p className="mt-2 font-body text-sm text-muted-foreground">Beautiful digital printables to organize your life with style.</p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground">Quick Links</h4>
          <nav className="mt-2 flex flex-col gap-1">
            <Link to="/shop" className="font-body text-sm text-muted-foreground hover:text-foreground">Shop All</Link>
            <Link to="/categories" className="font-body text-sm text-muted-foreground hover:text-foreground">Categories</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground">Support</h4>
          <p className="mt-2 font-body text-sm text-muted-foreground">hello@inbudgetprintablesco.com</p>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 text-center font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} InBudgetPrintablesCo. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
