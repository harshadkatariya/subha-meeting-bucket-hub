
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Subha</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Elevate your virtual meetings with centralized meeting management and seamless video conferencing.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-600 hover:text-primary-600 transition-colors">Integrations</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-primary-600 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-primary-600 transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} Subha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
