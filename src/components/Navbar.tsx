import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-2 text-xl font-bold text-blue-600" style={{ marginLeft: '20px' }}>
          <FileText className="w-6 h-6" />
          <Link to="/" className="flex items-center">
            <span>PDF Toolkit</span>
          </Link>
        </div>
        <div className="flex gap-6" style={{ marginRight: '20px' }}>
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
          <Link to="/donate" className="text-gray-600 hover:text-blue-600">Donate</Link>
        </div>
      </nav>
    </header>
  );
}