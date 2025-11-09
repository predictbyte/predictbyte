import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <img src="/logo.png" />
              </div>
              <span className="text-xl font-bold text-gradient">
                PredictByte
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building next-generation web, app, and AI solutions for modern
              businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Visit PredictByte on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Visit PredictByte on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/predictbyte-infosoft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Visit PredictByte on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Visit PredictByte on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/products/crm"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Custom CRM
                </Link>
              </li>
              <li>
                <Link
                  to="/products/erp"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Custom ERP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <a
                  href="mailto:info@predictbyte.com"
                  className="hover:text-primary transition-colors"
                >
                  info@predictbyte.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <a
                  href="tel:+917302227370"
                  className="hover:text-primary transition-colors"
                >
                  +91 7302227370
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>
                  H-140 4 floor Office No-402,Sector 63, Noida, India-201305
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} PredictByte. All rights reserved.
              Made with ❤️ by PredictByte
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
