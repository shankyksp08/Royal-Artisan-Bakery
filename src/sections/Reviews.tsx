import { ExternalLink, Star } from 'lucide-react';
import Reveal from '../components/Reveal';
import { business } from '../config/business';

export default function Reviews() {
  return (
    <section className="bg-[#eadfcb]">
      <Reveal className="section text-center">
        <Star className="mx-auto text-copper" />
        <h2 className="mt-4 text-4xl font-semibold text-espresso md:text-6xl">
          What our guests say
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink/80">
          Read genuine, up-to-date reviews from our customers on Google.
        </p>
        <a
          href={business.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-copper mt-8"
        >
          Read Google Reviews <ExternalLink size={16} />
        </a>
      </Reveal>
    </section>
  );
}
