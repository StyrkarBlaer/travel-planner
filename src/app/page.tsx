import Header from '@/components/header';
import Footer from '@/components/footer';
import AutoCompleteInput from '@/components/AutoCompleteInput';
import DateRangePicker from '@/components/DatePicker'

export default function Home() {
  return (
    <body>
      <Header />

      <main className="container mx-auto">

      <div className="border border-gray-50 flex flex-col justify-center min-h-screen">
        <div className="text-center">
          <p className='h-11'>Where to?</p>
        </div>
        <div className='p-4 border border-gray-50'>
          <AutoCompleteInput />
        </div>
        <div className='p-4 border border-gray-50'>
          <DateRangePicker />
        </div>
      </div>

      </main>

      <Footer />
    </body>
  )
}
