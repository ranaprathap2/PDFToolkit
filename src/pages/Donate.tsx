import { Heart, Coffee } from 'lucide-react';

export function Donate() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Support Our Project</h2>
          <p className="text-xl text-gray-600 mb-8">
            Help us keep PDF Toolkit free and accessible for everyone. Your donation supports our development and server costs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <button className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Coffee className="w-8 h-8 text-yellow-600 mb-4" />
              <span className="text-2xl font-bold mb-2">₹149</span>
              <span className="text-gray-600">Buy us a coffee</span>
            </button>
            
            <button className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-8 h-8 text-pink-500 mb-4" />
              <span className="text-2xl font-bold mb-2">₹499</span>
              <span className="text-gray-600">Show some love</span>
            </button>
            
            <button className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                <Heart className="w-8 h-8 text-pink-500" />
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <span className="text-2xl font-bold mb-2">₹999</span>
              <span className="text-gray-600">Become a supporter</span>
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Custom Amount</h3>
            <div className="flex gap-4 justify-center">
              <input
                type="number"
                min="1"
                placeholder="Enter amount in ₹"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}