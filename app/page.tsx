import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Summary from './components/Summary';
import InstagramFeed from './components/InstagramFeed';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Summary />
      <Testimonials />
      <InstagramFeed />
    </main>
  );
}
