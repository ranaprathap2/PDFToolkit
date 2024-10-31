import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div style={{ margin: '0 0 20px 0' }}>
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}