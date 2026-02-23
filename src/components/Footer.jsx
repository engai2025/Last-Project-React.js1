import { Link } from 'react-router-dom';

const footerLinks = {
  Shop: [
    { to: '/shop', label: 'All Products' },
    { to: '/shop?category=Phones', label: 'Phones' },
    { to: '/shop?category=Laptops', label: 'Laptops' },
    { to: '/shop?category=Accessories', label: 'Accessories' },
  ],
  Company: [
    { to: '/about', label: 'About Us' },
    { to: '/dashboard', label: 'Account' },
    { to: '/cart', label: 'Cart' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="font-display font-bold text-xl text-white">
              Kulmis Computer and Stationery
            </Link>
            <p className="mt-3 text-sm">
              Your one-stop for computers, electronics, and stationery. Quality products, fair prices.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kulmis Computer and Stationery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
