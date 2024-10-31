import { FileText } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <FileText className="w-16 h-16 mb-6" />
          <h1 className="text-5xl font-bold mb-6">All-in-One PDF Solutions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Transform, edit, and manage your PDFs with our powerful toolkit. Simple, fast, and secure.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}