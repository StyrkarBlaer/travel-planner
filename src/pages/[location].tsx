import { useRouter } from 'next/router';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

// example fetch request

//var requestOptions = {
// method: 'GET',
//};

//function getCityData(city, apiKey) {
//  return fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(city)}&format=json&apiKey=${myAPIKey}`).then(data => data.json()).then(results => {
//    const cityData = results.results.length ? results.results[0] : null;
//    return cityData;
//  });
//}

export default function location() {
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