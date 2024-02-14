import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <body>
      <Header />

      <main className="container mx-auto">
        <div className="p-4 border border-gray-300 rounded-lg">
          <ul>
            <li>landing page that takes your desired location</li>
            <li>Landing page also take dates optionally</li>
            <li>"Start Planning" Button (very original)</li>
            <li>offered interesting places and things to do based on selected location</li>
            <li>can fill dates with selected things to do</li>
            <li>save the result as some list</li>
            <li>make tests</li>
          </ul>
        </div>
      </main>

      <Footer />
    </body>
  )
}
