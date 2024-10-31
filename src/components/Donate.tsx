import { Heart } from 'lucide-react';

export function Donate() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Support Our Project</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Help us keep our tools free and accessible to everyone
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-blue-600 transition-all transform hover:scale-105">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <span>Donate Now</span>
          </div>
        </button>
      </div>
    </section>
  );
}