import { useRouter } from 'next/router';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';


export default function country() {
  const router = useRouter();
  const { location, daterange_from, daterange_to } = router.query;

  return (
    <main>
      <Header />
      Time to do some api stuff to get a list of interesting locations for {location} i suppose
      <Footer />
    </main>
  )

};