import { Link } from 'react-router-dom';

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Authentic Products',
    description: 'Every device and stationery item is sourced from authorized distributors. No fakes, no compromises.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fair Pricing',
    description: 'Transparent prices with no hidden fees. We keep margins honest so you get the best value.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'Quick dispatch and reliable shipping. Get your computers and stationery when you need them.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 7a7 7 0 100-14 7 7 0 000 14z" />
      </svg>
    ),
    title: 'Easy Returns',
    description: '30-day return policy. Not satisfied? Send it back—no hassle, no stress.',
  },
];

const stats = [
  { value: '10+', label: 'Years in business' },
  { value: '50K+', label: 'Happy customers' },
  { value: '500+', label: 'Products' },
  { value: '98%', label: 'Satisfaction rate' },
];

export default function About() {
  return (
    <div className="overflow-hidden">
   
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-primary-300 font-medium uppercase tracking-widest text-sm mb-4">
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Kulmis Computer and Stationery
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Your one-stop shop for computers, electronics, and stationery. We blend tech and office essentials so you can work smarter and create more.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

  
      <section className="relative -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
            Our Story
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
            Kulmis started with a simple idea: bring together computers and stationery under one roof. Whether you need a new laptop, a smartphone, or quality pens and paper, we’re here to help. We focus on genuine products, clear pricing, and service you can rely on—so your home and office are always equipped.
          </p>
        </div>
      </section>

  
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Kulmis
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We’re committed to quality, value, and a smooth experience from browse to delivery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="mt-4 font-display font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

 
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-display text-4xl md:text-5xl font-bold">{stat.value}</p>
                <p className="mt-1 text-primary-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To make computers and stationery accessible to everyone—students, professionals, and creatives. We stock trusted brands, keep prices fair, and deliver with care so you can focus on what matters.
            </p>
            <ul className="mt-6 space-y-3">
              {['Computers & laptops', 'Phones & tablets', 'Office stationery', 'Accessories & more'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] max-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
              alt="Office and technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
            Ready to shop?
          </h2>
          <p className="mt-3 text-gray-600">
            Explore our range of computers and stationery. We’re here to help you find the right gear.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="btn-primary px-8 py-3 text-base">
              Browse Products
            </Link>
            <Link to="/" className="btn-secondary px-8 py-3 text-base">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
