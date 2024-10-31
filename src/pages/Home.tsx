import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { CallToAction } from '../components/CallToAction';

export function Home() {
  return (
    <>
      <div style={{ marginLeft: '0px', marginRight: '0px', marginBottom: '40px' }}>
        <Hero />
      </div>
      <div style={{ marginLeft: '40px', marginRight: '40px', marginBottom: '40px' }}>
        <Features />
      </div>
      <div style={{ marginTop: '40px' }}>
        <CallToAction />
      </div>
    </>
  );
}