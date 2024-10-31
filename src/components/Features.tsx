import { FeatureCard } from './FeatureCard';
import { Edit, FilePlus, Image, Lock, Unlock, Compass, Merge, Split, RotateCw, Trash2, Key, Shield, EyeOff } from 'lucide-react'; // Example icons

const features = [
  {
    category: 'PDF Operations',
    items: [
      { icon: Edit, title: 'PDF Editing', description: 'Edit text, images, and layouts. Merge, split, rotate, and rearrange pages.' },
      { icon: FilePlus, title: 'PDF Creation', description: 'Create PDFs from scratch or convert other file formats. Add branding, signatures, and more.' },
      { icon: Image, title: 'Asset Extraction', description: 'Extract images, text, and other content from PDFs for reuse in other projects.' },
    ],
  },
  {
    category: 'PDF Enhancement',
    items: [
      { icon: Compass, title: 'Compress', description: 'Reduce file size without losing quality.' },
      { icon: Lock, title: 'Protect', description: 'Add passwords and permissions to secure your PDFs.' },
      { icon: Unlock, title: 'Unlock', description: 'Remove restrictions to enable full access.' },
      { icon: RotateCw, title: 'Resize', description: 'Adjust page dimensions for optimal viewing.' },
    ],
  },
  {
    category: 'PDF Merging and Splitting',
    items: [
      { icon: Merge, title: 'Merge', description: 'Combine multiple PDF files into a single document.' },
      { icon: Split, title: 'Extract', description: 'Split a PDF into individual pages or sections.' },
      { icon: RotateCw, title: 'Rearrange', description: 'Reorder, rotate, and delete pages within a PDF.' },
    ],
  },
  {
    category: 'PDF Page Management',
    items: [
      { icon: RotateCw, title: 'Sort Pages', description: 'Rearrange PDF pages in any order, then save the updated document.' },
      { icon: Trash2, title: 'Delete Pages', description: 'Remove unwanted pages from a PDF to create a streamlined file.' },
      { icon: RotateCw, title: 'Rotate Pages', description: 'Correct the orientation of PDF pages with a simple click.' },
    ],
  },
  {
    category: 'PDF Security and Protection',
    items: [
      { icon: Key, title: 'Add Passwords', description: 'Restrict access to authorized users.' },
      { icon: Shield, title: 'Set Permissions', description: 'Control what actions users can perform on the PDF.' },
      { icon: Lock, title: 'Encrypt Content', description: 'Ensure sensitive information remains confidential.' },
      { icon: EyeOff, title: 'Redact Critical Data', description: 'Remove or obscure sensitive details before sharing.' },
    ],
  },
];

export function Features() {
  return (
    <div>
      {features.map((section) => (
        <div key={section.category} style={{ margin: '20px 0' }}>
          <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 