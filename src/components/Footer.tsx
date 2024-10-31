import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2">
            © 2024 PDF Toolkit. All rights reserved.
            <span className="flex items-center">
              Made in India with <Heart className="w-4 h-4 text-pink-500 mx-1" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}