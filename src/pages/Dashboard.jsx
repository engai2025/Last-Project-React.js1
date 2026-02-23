import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const personUser = {
  name: 'Eng Omar Tood',
  email: 'omarjibrilabdikadir@gmail.com',
};

const mockOrders = [
  { id: 'ORD-001', date: 'Feb 22, 2026', total: 1599.98, status: 'Delivered', items: 2 },
  { id: 'ORD-002', date: 'Feb 15, 2026', total: 349.99, status: 'Delivered', items: 1 },
  { id: 'ORD-003', date: 'Feb 10, 2026', total: 2299.98, status: 'Delivered', items: 2 },
];

export default function Dashboard() {
  const { items, cartTotal, cartCount } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
   
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-display font-bold text-xl">
          {personUser.name.charAt(0)}
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900">
            Hello, {personUser.name}
          </h1>
          <p className="text-gray-500 text-sm">{personUser.email}</p>
        </div>
      </div>

   
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <Link
          to="/cart"
          className="block p-5 rounded-2xl bg-white border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Your cart</p>
              <p className="mt-1 font-display font-semibold text-gray-900">
                {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </p>
              <p className="text-primary-600 font-semibold mt-0.5">
                ${cartTotal.toFixed(2)}
              </p>
            </div>
            <span className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
          </div>
          <p className="mt-3 text-sm text-primary-600 font-medium">View cart →</p>
        </Link>

        <div className="p-5 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total orders</p>
              <p className="mt-1 font-display font-semibold text-gray-900">
                {personUser.orders?.length || 0} orders
              </p>
              <p className="text-emerald-600 text-sm font-medium mt-0.5">All delivered</p>
            </div>
            <span className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </span>
          </div>
        </div>
      </div>
 
      <section>
        <h2 className="font-display text-lg font-semibold text-gray-900 mb-4">
          Order history
        </h2>
        <div className="space-y-3">
          {ourOrders.orders?.map((order) => (
            <div
              key={order.id}
              className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">{order.id}</p>
                <p className="text-sm text-gray-500">{order.date} · {order.items} items</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-900">
                  ${order.total.toFixed(2)}
                </span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Demo data. In a real app, orders would come from your account.
        </p>
      </section>

   
      <div className="mt-10 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
        >
          Continue shopping
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
