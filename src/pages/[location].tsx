import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';


export default function country() {
  const router = useRouter();
  const { location, daterange_from, daterange_to } = router.query;

  return (
    <main>
      <Header />
      <h1>Location: {location}</h1>
      <Footer />
    </main>
  )

};