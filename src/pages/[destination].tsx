import { useRouter } from 'next/router';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function destination() {

  const router = useRouter();
  const { destination, daterange_from, daterange_to } = router.query;
  console.log(destination)

  return (
    <main>
      <Header />
      Time to do some api stuff to get a list of interesting locations for {destination} i suppose
      <Footer />
    </main>
  )

};


//if (!router.isReady) { return null; }


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
const Geoapify_key = process.env.GEOAPIFY_API_KEY
function getCityData(location: string) {
  return fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&format=json&apiKey=${Geoapify_key}`).then(data => data.json()).then(results => {
    const cityData = results.results.length ? results.results[0] : null;
    return cityData;
  });
}
