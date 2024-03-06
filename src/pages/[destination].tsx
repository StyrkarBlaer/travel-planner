import { useRouter } from 'next/router';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Geo } from 'next/font/google';

export default function destination() {

  const router = useRouter();
  const { destination, daterange_from, daterange_to } = router.query;

  return (
    <main>
      <Header />
      <div className='display: flex justify-evenly gap-5 '>
        <div className='outline'>
          Hotels in {destination}
        </div>
        <div className='outline'>
          Recreation in {destination}
        </div>
        <div className='outline'>
          Food in {destination}
        </div>
      </div>
      <Footer />
    </main>
  )

};


// TODO:figure out how to pick up variable from env
const Geoapify_key = process.env.GEOAPIFY_API_KEY
console.log(Geoapify_key)
function getCityData(location: string) {
  return fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&format=json&apiKey=${Geoapify_key}`).then(data => data.json()).then(results => {
    const cityData = results.results.length ? results.results[0] : null;
    return cityData;
  });
}
