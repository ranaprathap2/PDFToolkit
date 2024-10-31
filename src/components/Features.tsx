import { FileText, Merge, Scissors, Lock, Upload, Download } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: FileText,
    title: 'PDF Editing',
    description: 'Edit text, images, and layouts. Merge, split, rotate, and rearrange pages with ease.'
  },
  {
    icon: Upload,
    title: 'PDF Creation',
    description: 'Create PDFs from scratch or convert other file formats. Add branding and signatures.'
  },
  {
    icon: Download,
    title: 'Asset Extraction',
    description: 'Extract images, text, and other content from PDFs for reuse in other projects.'
  },
  {
    icon: Merge,
    title: 'PDF Merging',
    description: 'Combine multiple PDF files into a single document effortlessly.'
  },
  {
    icon: Scissors,
    title: 'PDF Splitting',
    description: 'Split PDFs into individual pages or custom sections with precision.'
  },
  {
    icon: Lock,
    title: 'PDF Security',
    description: 'Protect your PDFs with passwords, encryption, and permission controls.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful PDF Tools</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to work with PDFs in one convenient platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}