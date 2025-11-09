import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <img src="/logo.png" />
            </div>
            <span className="text-xl font-bold text-gradient">PredictByte</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-lg border-border">
                <DropdownMenuItem asChild>
                  <Link
                    to="/services/web-development"
                    className="cursor-pointer"
                  >
                    Web Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/services/app-development"
                    className="cursor-pointer"
                  >
                    App Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/services/digital-marketing"
                    className="cursor-pointer"
                  >
                    Digital Marketing
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-lg border-border">
                <DropdownMenuItem asChild>
                  <Link to="/products/crm" className="cursor-pointer">
                    CRM
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/erp" className="cursor-pointer">
                    ERP
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/careers"
              className="text-foreground hover:text-primary transition-colors"
            >
              Careers
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://cal.com/predictbyte/30min" target="_blank">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Book Demo
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border/50 animate-slide-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <p className="text-sm font-semibold text-muted-foreground">
                Services
              </p>
              <div className="ml-2 mt-1 space-y-1">
                <Link
                  to="/services/web-development"
                  className="block px-2 py-1 text-sm hover:text-primary"
                >
                  Web Development
                </Link>
                <Link
                  to="/services/app-development"
                  className="block px-2 py-1 text-sm hover:text-primary"
                >
                  App Development
                </Link>
                <Link
                  to="/services/digital-marketing"
                  className="block px-2 py-1 text-sm hover:text-primary"
                >
                  Digital Marketing
                </Link>
              </div>
            </div>
            <div className="px-3 py-2">
              <p className="text-sm font-semibold text-muted-foreground">
                Products
              </p>
              <div className="ml-2 mt-1 space-y-1">
                <Link
                  to="/products/crm"
                  className="block px-2 py-1 text-sm hover:text-primary"
                >
                  CRM
                </Link>
                <Link
                  to="/products/erp"
                  className="block px-2 py-1 text-sm hover:text-primary"
                >
                  ERP
                </Link>
              </div>
            </div>
            <Link
              to="/careers"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Careers
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              About
            </Link>
            <div className="px-3 pt-2">
              <a href="https://cal.com/predictbyte/30min" target="_blank">
                <Button className="w-full bg-gradient-to-r from-primary to-accent">
                  Book Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
